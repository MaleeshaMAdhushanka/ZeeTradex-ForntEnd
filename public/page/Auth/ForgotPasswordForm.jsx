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
import { useForm } from "react-hook-form";

const ForgotPasswordForm = () => {
    const form = useForm({
        defaultValues: {
            email: "",
           
        },
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="px-10 py-5">
            <h1 className="text-xl font-bold text-center pb-3">Forgot password</h1>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    
                     <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        className="border w-full border-gray-700 p-5"
                                        placeholder="Enter your email..."
                                        {...field}
                                    />
                                </FormControl>
                                
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                   
                   
               {/* click karama close wenna */}
                       <Button type="submit" className="w-full 
                       border-2 border-gray-400 text-yellow-300 px-5 py-5 rounded-md transition-all duration-300 ease-in-out hover:bg-green-500 hover:text-white hover:border-gray-800">
                        Submit


                       </Button>

                </form>
            </Form>
        </div>
    );
};

export default ForgotPasswordForm;