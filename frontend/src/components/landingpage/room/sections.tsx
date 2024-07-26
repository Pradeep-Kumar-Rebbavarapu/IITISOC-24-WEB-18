


export default function Sections(props:any){
    return(
        <div className="  2xl:min-w-[500px]  xl:min-w-[400px] min-w-[350px] [@media(max-width:1100px)]:min-w-[95%] flex flex-col gap-[10px] items-center justify-around">
        {props.children}

        </div>
    );

}