import React, { useEffect } from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const AssetTable = ({coin, category}) => {

  //fetch all coin list
 const dispatch = useDispatch()

  const navigate = useNavigate()


 

  
    return(
    <Table>
                   <TableHeader>
                       <TableRow >
                          <TableHead className="w-[100px] bg-gray-800 text-white">
                            Coin
                          </TableHead>
                          <TableHead className="bg-gray-800 text-white">
                            SYMBOL
                          </TableHead>
                          <TableHead  className="bg-gray-800 text-white">
                            VOLUME
                          </TableHead>
                          <TableHead  className="bg-gray-800 text-white">
                            MARKET CAP
                          </TableHead>
                          <TableHead className= "bg-gray-800 text-white">
                            24h
                          </TableHead>
                         <TableHead className="text-right bg-gray-800 text-white">PRICE</TableHead>
                       </TableRow>
                  </TableHeader>
                <TableBody>
                    {coin.map((item,index) => <TableRow key={item.id}>
                       <TableCell onClick={() => navigate(`/market/${item.id}`)} className="font-medium flex items-center gap-2">
                          <Avatar className="-z-50">
    
                            <AvatarImage src={item.image}/>
                               
                          </Avatar>
                          <span>{item.name}</span>
                            
            
                        </TableCell>
                       <TableCell>{item.symbol}</TableCell>
                       <TableCell>{item.total_volume}</TableCell>
                       <TableCell>{item.market_cap}</TableCell>
                       <TableCell>{item.price_change_percentage_24h}</TableCell>
    
                      <TableCell className="text-right">${item.current_price}</TableCell>
                  </TableRow>
                  )}
                  
                </TableBody> 
         </Table>

      

    );

};

export default AssetTable;