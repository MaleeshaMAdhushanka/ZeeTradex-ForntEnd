import React from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

const AssetTable = () => {
    return(
    <Table>
                   <TableHeader>
                       <TableRow>
                          <TableHead className="w-[100px]">
                            Coin
                          </TableHead>
                          <TableHead>
                            SYMBOL
                          </TableHead>
                          <TableHead>
                            VOLUME
                          </TableHead>
                          <TableHead>
                            MARKET CAP
                          </TableHead>
                          <TableHead>
                            24h
                          </TableHead>
                         <TableHead className="text-right">PRICE</TableHead>
                       </TableRow>
                  </TableHeader>
                <TableBody>
                    {[1,1,1,1,1,1,1,1,1,1,1].map((item,index) => (
                    <TableRow key={index}>
                       <TableCell className="font-medium flex items-center gap-2">
                          <Avatar className="-z-50">
    
                            <AvatarImage src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"/>
                               
                          </Avatar>
                          <span>Bitcoin</span>
                            
            
                        </TableCell>
                       <TableCell>BTC</TableCell>
                       <TableCell>32652127595</TableCell>
                       <TableCell>1660363443420</TableCell>
                       <TableCell>87724</TableCell>
    
                      <TableCell className="text-right">$83686</TableCell>
                  </TableRow>
                  ))}
                  
                </TableBody> 
         </Table>

      

    );

};

export default AssetTable;