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

const SignupForm = () => {
    const form = useForm({
        defaultValues: {
           fullName: "",
            email: "",
            password: "",
           
        },
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="px-10 py-2">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Full Name</FormLabel>
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
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        className="border w-full border-gray-700 p-5"
                                        placeholder="Email"
                                        {...field}
                                    />
                                </FormControl>
                                
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Password</FormLabel>
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
                   
               
               {/* click karama close wenna */}
                       <Button type="submit" className="w-full py-5">
                        Submit


                       </Button>

                                    
                      
                </form>
            </Form>
        </div>
    );
};

export default SignupForm;