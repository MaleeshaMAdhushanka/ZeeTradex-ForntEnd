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
  

const PaymentDetails = () => {
    return(
        <div className="px-20 ">
             <h1 className="text-3xl font-bold py-15 ">Payment Details</h1>

             <Card>
                <CardHeader>
                    <CardTitle>
                        Yes Bank
                    </CardTitle>
                    <CardDescription>
                        A/c No:
                        ******** ****1651
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center">
                        <p className="w-32">A/C Holder</p>
                        <p className="text-blue-600"> : Maleesha</p>

                    </div>
                    <div className="flex items-center">
                        <p className="w-32">IFSC</p>
                        <p className="text-blue-600"> : YESB0000007</p>

                    </div>


                </CardContent>

             </Card>
    <Dialog>

        <DialogTrigger>
            <Button className="py-6">Add payment details</Button>
        </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Payment Details?</DialogTitle>
    
            </DialogHeader>
            
       </DialogContent>
     </Dialog>


        </div>
    )
}

export default PaymentDetails;