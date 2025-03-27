import React from "react";
import {
     Sheet,
     SheetContent,
     SheetDescription,
     SheetHeader,
     SheetTitle,
     SheetTrigger,
   } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import { DragHandleHorizontalIcon } from "@radix-ui/react-icons"; // Import the icon from the correct library

   

const Navbar = () => {
     return(
          <div className='px-2 py-3 border-b z-50 bg-background  text-black bg opacity-100 sticky 
          top-0 left-0 right-0 right-0 flex justify-between items-center'>

               <div className="flex items-center gap-3">
               <Sheet>
                 <SheetTrigger >
                    <Button variant="ghost"
                      size="icon" 
                      className="rounded-full h-11 w-11">
                         <DragHandleHorizontalIcon className='h-20 w-10'/>
                    </Button>
                 </SheetTrigger>
                <SheetContent  className="w-72 border-r-0 flex flex-col justify-center" 
                 side="left">
                  <SheetHeader>
                   <SheetTitle></SheetTitle>
                      
                  </SheetHeader>
                </SheetContent>
               </Sheet>


               </div>

          </div>
     )
}

export default Navbar