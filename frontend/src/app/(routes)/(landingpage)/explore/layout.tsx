import AnimatedCursor from "react-animated-cursor"

export default function landingPageLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    
    return (
        <>

        <div className="flex justify-center relative min-h-[100vh] p-0 w-[100vw] overflow-x-clip">
       

         
<AnimatedCursor
      innerSize={30}
      outerSize={30}
      color='248, 100, 0'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={3}
     trailingSpeed={1}

      
    />
          
          {children}

          </div>

       
  
         
        </>
    );
  }