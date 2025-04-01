import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";


 const Withdrawal = () => {
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
                            {[1,1,1,1,1,1,1,1,1,1,1].map((item,index) =>(
                            <TableRow key={index}>
                            <TableCell>
                                <p>April 2, 2025 at 11.43</p>
                            </TableCell>

                               <TableCell className="">Bank</TableCell>
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
export default Withdrawal;