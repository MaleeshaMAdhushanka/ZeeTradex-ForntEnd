import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addPaymentDetails } from "@/State/Withdrawal/Action";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const PaymentDetailsForm = () => {

    const dispatch = useDispatch();

    const form = useForm({
        defaultValues: {
            accountHolderName: "",
            ifsc: "",
            accountNumber: "",
            confirmAccountNumber: "",
            bankName: "",
        },
    });

    const onSubmit = (data) => {
        dispatch(addPaymentDetails({
            paymentDetails:data,
            jwt:localStorage.getItem("jwt")
        }))
        console.log(data);
    };

    return (
        <div className="px-10 py-2 bg-yellow-400 text-black">
            <Form
             {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <FormField
                        control={form.control}
                        name="accountHolderName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Account Holder Name</FormLabel>
                                <FormControl>
                                    <Input
                                        className="border w-full border-gray-700 p-5"
                                        placeholder="Maleesha"
                                        {...field}
                                    />
                                </FormControl>
                                
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                     <FormField
                        control={form.control}
                        name="ifsc"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>IFSC Code</FormLabel>
                                <FormControl>
                                    <Input
                                        className="border w-full border-gray-700 p-5"
                                        placeholder="IFSC Code"
                                        {...field}
                                    />
                                </FormControl>
                                
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="accountNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Account Number</FormLabel>
                                <FormControl>
                                    <Input
                                        className="border w-full border-gray-700 p-5"
                                        placeholder="*********5604"
                                        {...field}
                                    />
                                </FormControl>
                                
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmAccountNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm Account Number</FormLabel>
                                <FormControl>
                                    <Input
                                        className="border w-full border-gray-700 p-5"
                                        placeholder="confirm account number" {...field}
                                    />
                                </FormControl>
                                
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="bankName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Bank Name</FormLabel>
                                <FormControl>
                                    <Input
                                        className="border w-full border-gray-700 p-5"
                                        placeholder="Yes Bank"
                                        {...field}
                                    />
                                </FormControl>
                                
                                <FormMessage />
                            </FormItem>
                        )}
                    />
               
               {/* click karama close wenna */}
                    <DialogClose className="w-full">
                       <Button type="submit" className="w-full py-5 bg-blue-500 hover:bg-green-400">
                        Submit


                       </Button>

                    </DialogClose>
                    
                      
                </form>
            </Form>
        </div>
    );
};

export default PaymentDetailsForm;