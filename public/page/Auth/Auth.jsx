import React from "react";
import "./Auth.css";
import SignupForm from "./SignupForm";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import ForgotPasswordForm from "./ForgotPasswordForm";
import SigninForm from "./SigninForm";
const Auth = () => {

    const navigate = useNavigate();

    const location = useLocation();


    return (
        <div className="h-screen relative authContainer">



            <div className="absolute top-0 left-0 right-0 bottom-0  bg-opacity-50 text-yellow-300">
                <div className="bg-Blure absolute top-1/2 left-1/2 transform 
                -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center h-[35rem] w-[28rem] rounded-2xl z-50 bg-black
                bg-opacity-50 shadow-2xl shadow-white " >

                    <h1 className="text-5xl font-bold pb-9 text-white">Zee Trade X</h1>

                {location.pathname=="/signup"   ?  (
                    <section className ="w-full">
                            <SignupForm/>

                            {/* <div className="flex items-center justify-center">
                                <span>have already account ?</span>
                                <Button onClick={() => navigate("/signin")} variant="outline">
                                    SignIn
                                </Button>

                            </div> */}
                            <div className="flex items-center justify-center mt-2 ml-3">
                                <span>have already account ?</span>
                                <Button 
                                    onClick={() => navigate("/signin")} 
                                    variant="outline" 
                                    className="border-2 ml-4 border-gray-400 text-yellow-300 px-4 py-2 rounded-md transition-all duration-300 ease-in-out hover:bg-green-500 hover:text-white hover:border-gray-800"
                                >
                                    SignIn
                                </Button>
                            </div>

                            

                        </section> 
                        ) : location.pathname== "/forgot-password" ? (
                             <section  className ="w-full">
                            <ForgotPasswordForm/>
                            <div className="flex items-center justify-center mat-2 ">
                                <span>back to Login</span>
                                <Button onClick={() => navigate("/signin")} variant="outline"
                                      className="border-2 ml-3 border-gray-400 text-yellow-300 px-4 py-2 rounded-md transition-all duration-300 ease-in-out hover:bg-green-500 hover:text-white hover:border-gray-800">
                                    SignIn
                                </Button>

                            </div>
                        </section>
                        ) : (
                            <section  className ="w-full ">
                              <SigninForm/>
                              <div className="flex items-center justify-center mt-5">
                                <span>"don't have already account ?"</span>
                                <Button onClick={() => navigate("/signup")} 
                                variant="outline"
                                className="border-2 border-gray-400 text-yellow-300 px-4 py-2 rounded-md transition-all duration-300 ease-in-out hover:bg-green-500 hover:text-white hover:border-gray-800 ml-3">
                                    Signup
                                </Button>

                            </div>

                            <div className="mt-10 flex justify-center">
                                <Button
                                className="w-48 py-6  border-2 border-gray-400 text-yellow-300 px-5 rounded-md transition-all duration-300 ease-in-out hover:bg-green-500 hover:text-white hover:border-gray-800"
                                 onClick={() => navigate("/forgot-password")} 
                                variant="outline"
                                >
                                    Forgot Password
                                </Button>

                            </div>
                           </section> 

                           )}

                </div>
                 
            </div>

        </div>
    );
};

export default Auth;
