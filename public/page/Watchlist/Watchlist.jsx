import React from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";


const Watchlist = () => {

    const handleRemoveToWatchlist =(value) => {
        console.log(value)
    }
    return (
        <div className="p-5 lg:px-10 bg-dark-500  font-bold">
        <h1 className="font-bold text-3xl pb-5">Watchlist</h1>

         <Table className="border">
            <TableHeader>
                <TableRow>
                   <TableHead className="py-5">
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
                  <TableHead className="">PRICE</TableHead>
                  <TableHead className="text-right text-red-600">REMOVE</TableHead>

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
                              <TableCell className="">$83686</TableCell>
                              <TableCell className="text-right">
                                <Button 
                                 variant="ghost"
                                onClick={()=> handleRemoveToWatchlist(item.id)} size="icon" className="h-10 w-10">
                                    <BookmarkFilledIcon className="w-6 h-6"/>
                                </Button>

                              </TableCell>

                        </TableRow>
                        ))}
                      
                    </TableBody> 
        </Table>


    </div>

    )
}
export default Watchlist;