import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getWithdrawalHistory } from "@/State/Withdrawal/Action";


 const Withdrawal = () => {
    const  dispatch = useDispatch();
     const {wallet, withdrawal} = useSelector(store => store)

     useEffect(() => {
       dispatch(getWithdrawalHistory(localStorage.getItem("jwt")))
     }, [])
    
    return (
        <div className="p-5 lg:px-10 bg-dark-500  font-bold">
         <h1 className="font-bold text-3xl pb-5">Withdrawal</h1>

         <Table className="border">
            <TableHeader>
                <TableRow>
                   <TableHead className="py-5 bg-gray-800 text-white">
                      Date
                   </TableHead>
                    <TableHead  className="bg-gray-800 text-white">
                      method
                    </TableHead >
                    <TableHead  className="bg-gray-800 text-white">
                     Amount
                    </TableHead>
                  <TableHead className="text-right bg-gray-800 text-white">Status</TableHead>

                </TableRow>
            </TableHeader>
                        <TableBody>
                            {withdrawal.history.map((item,index) =>(
                            <TableRow key={index}>
                            <TableCell>
                                <p>{item.date.toString()}</p>
                            </TableCell>

                               <TableCell className="">Bank</TableCell>
                              <TableCell className="">${item.amount}</TableCell>
                              <TableCell className="text-right">
                                {item.status}
                              </TableCell>

                        </TableRow>
                    ))}
                      
                    </TableBody> 
        </Table>


     </div>
       
        
    );
};
export default Withdrawal;