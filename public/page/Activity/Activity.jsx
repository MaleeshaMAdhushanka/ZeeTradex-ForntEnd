import React from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";



const Activity = () => {
    return (
        <div className="p-5 lg:px-10 bg-dark-500  font-bold">
         <h1 className="font-bold text-3xl pb-5">Activity</h1>

         <Table className="border">
            <TableHeader>
                <TableRow>
                   <TableHead className="py-5 bg-gray-800 text-white">
                      Date & Time
                   </TableHead>
                    <TableHead  className="bg-gray-800 text-white">
                      Treding Pair
                    </TableHead >
                    <TableHead  className="bg-gray-800 text-white">
                      Buy Price
                    </TableHead>
                    <TableHead  className="bg-gray-800 text-white">
                      Selling Price
                    </TableHead>
                    <TableHead  className="bg-gray-800 text-white">
                     Order Type
                    </TableHead>
                   <TableHead  className="bg-gray-800 text-white">
                      Profite/Loss
                  </TableHead>
                  <TableHead className="text-right bg-gray-800 text-white">Value</TableHead>

                </TableRow>
            </TableHeader>
                        <TableBody>
                            {[1,1,1,1,1,1,1,1,1,1,1].map((item,index) =>(
                            <TableRow key={index}>
                            <TableCell>
                                <p>20225/03/31</p>
                                <p className="text-gray-300">12:47:20</p>
                            </TableCell>

                               <TableCell className="font-medium flex items-center gap-2">
                                  <Avatar className="-z-50">
            
                                    <AvatarImage src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"/>
                                       
                                  </Avatar>
                                  <span>Bitcoin</span>
                                    
                    
                                </TableCell>
                               <TableCell className="">$83686</TableCell>
                               <TableCell>1660363443420</TableCell>
                               <TableCell>87724</TableCell>
                              <TableCell className="">$83686</TableCell>
                              <TableCell className="text-right">
                                345
                              </TableCell>

                        </TableRow>
                    ))}
                      
                    </TableBody> 
        </Table>


     </div>
    );
};

export default Activity;