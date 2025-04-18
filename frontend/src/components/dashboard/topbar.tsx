import Image from 'next/image'
import {Avatar} from "@nextui-org/react";
import Logo from "./logo";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PeopleIcon from '@mui/icons-material/People';
import FlareIcon from '@mui/icons-material/Flare';
import LogoutIcon from '@mui/icons-material/Logout';
import CameraIndoorIcon from '@mui/icons-material/CameraIndoor';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import InsightsIcon from '@mui/icons-material/Insights';
import { Tooltip } from "@nextui-org/react";
import Link from 'next/link'
import { logOut } from "@/helpers/auth";
export default function topbar(){


    return(

        <div className="relative hover:scale-[1.01] transition-all duration-300  p-[10px]  w-[100%]   h-[4.5rem] z-50 bg-[rgb(20,20,20)] rounded-[35px] flex justify-around items-center">
    
           

          

                <Link href='/dashboard/expressofriends'>
                    <Tooltip content="Friends" color='foreground' placement='bottom' className=' bg-[rgb(30,30,30)]' offset={28}>
             
                            <PeopleIcon fontSize='medium' color='warning' className=' text-[1.5rem] hover:text-[2.5rem] transition-all duration-300  '  style={{color: "white" }} />
                   
                    </Tooltip>
                </Link>
               

            <Link href='/dashboard/expressoroom'>
                    {/* <Tooltip content="Rooms" color='foreground' placement='bottom' className=' bg-[rgb(30,30,30)]' offset={28}> */}
                    <div className=" transition-all duration-300 hover:scale-110 ">
                    <Logo width={50}  />
              </div>     
                    {/* </Tooltip> */}
                </Link>
                

                <button
        onClick={() => {
          logOut();
        }}
      >
        <Tooltip
          content="Exit"
          color="foreground"
          placement="bottom"
          className=" bg-[rgb(30,30,30)]"
          offset={28}
        >
          <LogoutIcon
            fontSize="medium"
            color="warning"
            className=" text-[1.5rem] hover:text-[2.5rem] transition-all duration-300  "
            style={{ color: "white" }}
          />
        </Tooltip>
      </button>



            

        </div>








    );
}