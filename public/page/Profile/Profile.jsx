import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const Profile = () => {
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

            </div>

        </div>
    )
}
export default Profile;