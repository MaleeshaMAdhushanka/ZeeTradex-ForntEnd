import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import PaymentDetailsForm from "./PaymementDetailsForm";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPaymentDetails } from "@/State/Withdrawal/Action";
  

const PaymentDetails = () => {
   const {withdrawal} = useSelector(store => store);
   const dispatch = useDispatch();

   useEffect(() => {
       dispatch(getPaymentDetails({jwt:localStorage.getItem("jwt")}))
   }, [])
    return(
        <div className="px-20 ">
             <h1 className="text-3xl font-bold py-15 ">Payment Details</h1>
{/* if user have already add their payment detail once i will not allow him to add payment detail agin
  user haven't add their payment detail then i will show him the add payment detail button
*/}
               {withdrawal.paymentDetails ? (
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Yes Bank
                        </CardTitle>
                        <CardDescription>
                            A/c No:
                            {withdrawal.paymentDetails?.accountNumber}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center">
                            <p className="w-32">A/C Holder</p>
                            <p className="text-blue-600">
                                {""}
                                :{withdrawal.paymentDetails?.accountHolderName}</p>

                        </div>
                        <div className="flex items-center">
                            <p className="w-32">IFSC</p>
                            <p className="text-blue-600"> : {withdrawal.paymentDetails?.bankName}</p>

                        </div>


                    </CardContent>

                </Card> 
            ):( 
            
            <Dialog className="bg-white">

                <DialogTrigger>
                    <Button className="py-6">Add payment details</Button>
                </DialogTrigger>

                <DialogContent>
                    <DialogHeader>
                    <DialogTitle>Payment Details?</DialogTitle>

                    </DialogHeader>
                    <PaymentDetailsForm/>
                </DialogContent>
       </Dialog>)}
   


        </div>
    );
};

export default PaymentDetails;