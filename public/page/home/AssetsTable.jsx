import React, { useEffect } from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getCoinList } from "@/State/Coin/Action";

const AssetTable = ({coin, category}) => {

  //fetch all coin list
 const dispatch = useDispatch()

  const navigate = useNavigate()

  

    return(
      <ScrollArea className={`${category=="all"?"h-[75vh]":"h-[82vh]"}`}>

            <Table>
                  <TableHeader className="bg-yellow-300 text-black">
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
                          <TableHead >
                            MARKET CAP
                          </TableHead>
                          <TableHead >
                            24h
                          </TableHead>
                          <TableHead className="text-right">PRICE</TableHead>
                        </TableRow>
                  </TableHeader>
                  <TableBody>
                      {coin.map((item,index) => <TableRow key={item.id}>
                          <TableCell  
                          onClick={() => navigate(`/market/${item.id}`)} className="font-medium flex items-center gap-2 text-orange-500">
                            <Avatar className="-z-50">

                              <AvatarImage src={item.image}/>
                                  
                            </Avatar>
                            <span>{item.name}</span>
                              
              
                          </TableCell>
                          <TableCell className="text-green-400">{item.symbol}</TableCell>
                          <TableCell className=" text-yellow-300">{item.total_volume}</TableCell>
                          <TableCell className=" text-yellow-300">{item.market_cap}</TableCell>
                          <TableCell className=" text-yellow-300">{item.price_change_percentage_24h}</TableCell>

                        <TableCell className="text-right text-yellow-300">${item.current_price}</TableCell>
                    </TableRow>
                    )}
                    
                  </TableBody> 
                
          </Table>

         </ScrollArea>

      

    );

};

export default AssetTable;