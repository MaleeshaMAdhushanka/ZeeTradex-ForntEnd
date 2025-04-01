import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VerifiedIcon } from "lucide-react";
import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import AccountVerificationForm from "./AccountVerificationForm";
  

const Profile = () => {

    const handleEnableTwoStepVerification = () => {
        console.log("two step verification")
    }
    return(
        <div className="flex flex-col items-center mb-5">
            <div className="pt-10 w-full lg:w-[70%]">
                <Card>
                    <CardHeader className="pb-7">
                        <CardTitle>Your Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="lg:flex gap-32">
                            <div className='space-y-7'>
                                <div className="flex">
                                    <p className="w-[8rem]">Email : </p>
                                    <p className="text-blue-400">zeejmaleeshamadushanka@gamil.com</p>

                                </div>
                                <div className="flex">
                                    <p className="w-[8rem]">Full Name : </p>
                                    <p className="text-blue-400">Maleesha Madushanka</p>

                                </div>
                                <div className="flex">
                                    <p className="w-[8rem]">Date of Birth : </p>
                                    <p className="text-blue-400">2/02/2025</p>

                                </div>
                                <div className="flex">
                                    <p className="w-[8rem]">Nationality : </p>
                                    <p className="text-blue-400">Srilankan</p>

                                </div>

                            </div>
                            <div className='space-y-7'>
                                <div className="flex">
                                    <p className="w-[8rem]">Address : </p>
                                    <p className="text-blue-400">zeejmaleeshamadushanka@gamil.com</p>

                                </div>
                                <div className="flex">
                                    <p className="w-[8rem]">City: </p>
                                    <p className="text-blue-400">Maleesha Madushanka</p>

                                </div>
                                <div className="flex">
                                    <p className="w-[8rem]">Postcode : </p>
                                    <p className="text-blue-400">2/02/2025</p>

                                </div>
                                <div className="flex">
                                    <p className="w-[8rem]">Country : </p>
                                    <p className="text-blue-400">Srilankan</p>

                                </div>

                            </div>


                        </div>
                        

                    </CardContent>

                </Card>
                <div className="mt-6">
                    <Card className="w-full">
                        <CardHeader className="pb-7">
                            <div className="flex items-center gap-3">
                                <CardTitle>2 Step Verfication</CardTitle>

                               {true ? <Badge className={"space-x-2 text-white bg-green-600"}>
                                    <VerifiedIcon/>
                                    <span>
                                    Enabled

                                    </span>
                                    
                                </Badge>: <Badge className="bg-orange-500">Disalbed</Badge>}

                            </div>


                        </CardHeader>

                        <CardContent>
                           <div>
                            <Dialog>
                                  <DialogTrigger>
                                    <Button>Enabled Two Step verification</Button>
                                  </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                     <DialogTitle>Verify your account </DialogTitle>
                                       
                                   </DialogHeader>
                                   <AccountVerificationForm handleSubmit={handleEnableTwoStepVerification}/>
                                   </DialogContent>
                             </Dialog>


                            </div>

                        </CardContent>


                    </Card>


                </div>


            </div>

        </div>
    )
}
export default Profile;