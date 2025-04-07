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
import { DragHandleHorizontalIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons"; // Import the icon from the correct library
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Sidebar from "./Sidebar";

   

const Navbar = () => {
     return(
          <div className='px-2 py-3 border-b z-50 bg-black  text-yellow-400 bg opacity-100 sticky 
          top-0 left-0 right-0 right-0 flex justify-between items-center'>
               <div className="flex items-center gap-3">
                <Sheet>
                 <SheetTrigger asChild>
                    <Button variant="ghost"
                      size="icon" 
                      className="rounded-full h-11 w-11">
                         <DragHandleHorizontalIcon className='h-20 w-10'/>
                    </Button>
                     
                 </SheetTrigger>

                <SheetContent  className="w-72 border-r-0 flex flex-col justify-center  bg-gray-900 text-gray-200"
                // className="w-72 border-r-0 flex flex-col justify-center bg-gray-900 text-gray-200"
                 side="left">
                  <SheetHeader>

                   <SheetTitle>
                    <div className="text-3xl flex justify-center item-center 
                    gap-2">
                         <Avatar>
                            <AvatarImage src="https://cdn.pixabay.com/photo/2018/04/28/18/17/bitcoin-3357895_1280.png"/>

                         </Avatar>
                         <div>
                              <span className="font-bold text-yellow-500">Zee</span>
                              <span  className="font-bold text-white">Trade-X</span>

                         </div>
                      

                    </div>

                   </SheetTitle>
                      
                  </SheetHeader>

                  <Sidebar/>
                  
                </SheetContent>
                
                </Sheet>
                 <p className="text-lg lg:text-base cursor-pointer">
                    ZeeTrade-X
                 </p>
                 <div className="p-0 ml-15">
                    <Button variant="outline" className="flex items-center gap-5">
                         <MagnifyingGlassIcon/>
                         <span>Search</span>
                    </Button>

                 </div>


               </div>
               <div>
                    <Avatar>
                         <AvatarFallback>
                              MA
                         </AvatarFallback>

                    </Avatar>
               </div>

          </div>
     );
};

export default Navbar;