import { Button, Input } from "@nextui-org/react";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import { useEffect, useState } from "react";
import Webcam from "react-webcam";
import Logo from './logo';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import React from "react";

export default function joinroom() {

  const [video, setVideo] = useState(false);
  const [mic, setMic] = useState(false);

  const [link, setLink] = React.useState("");


  function toggleVideo() {
    if (video) {
      setVideo(false);
    } else {
      setVideo(true);
    }
  }
  function toggleMic() {
    if (mic) {
      setMic(false);
    } else {
      setMic(true);
    }
  }

  return (
    <div className="  flex flex-col h-min  backdrop-blur-md bg-[#ffffff3b] gap-[20px] p-[20px] rounded-3xl ">


<Input
        isClearable
        type="email"
        variant="bordered"
        color="default"
        value={link}
        onValueChange={setLink}
        label="Code" />
        

      <div className=" flex flex-row gap-[10px] justify-between">

        <Button  isDisabled={link === "" ? true : false} color="primary" size="lg" startContent={<AddReactionIcon fontSize='small' />} radius="full" variant="flat" className="  text-customblue-500" >
          Join Room
        </Button>

        <div className=" flex gap-[5px]">
          <div onClick={toggleVideo} className=' bg-[#ffffff81] h-[3rem] w-[3rem] rounded-[80%] flex justify-center items-center'>
            {video ? <VideocamIcon fontSize='small' color='warning' /> : <VideocamOffIcon fontSize='small' color='action' />}

          </div>
          <div onClick={toggleMic} className='bg-[#ffffff81] h-[3rem] w-[3rem] rounded-[80%] flex justify-center items-center'>
            {mic ? <MicIcon fontSize='small' color='warning' /> : <MicOffIcon fontSize='small' color='action' />}
          </div>

        </div>


      </div>


      {video ? <div className=" flex justify-center items-center h-[225px] w-[300px] bg-[#0000003b] rounded-3xl"><Webcam mirrored height={300} width={300} className=" rounded-lg" /></div> : <div className=" flex justify-center items-center h-[225px] w-[300px] bg-[#ffffff81] rounded-3xl "><Logo width={40} /></div>}



    </div>
  );
}