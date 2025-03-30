import React from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";


const Activity = () => {
    return (
        <div className="p-5 lg:px-10 bg-dark-500  font-bold">
        <h1 className="font-bold text-3xl pb-5">Activity</h1>

         <Table className="border">
            <TableHeader>
                <TableRow>
                   <TableHead className="py-5">
                      Date & Time
                   </TableHead>
                    <TableHead>
                      Treding Pair
                    </TableHead>
                    <TableHead>
                      Buy Price
                    </TableHead>
                    <TableHead>
                      Selling Price
                    </TableHead>
                    <TableHead>
                     Order Type
                    </TableHead>
                   <TableHead>
                      Profite/Loss
                  </TableHead>
                  <TableHead className="text-right">Value</TableHead>

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