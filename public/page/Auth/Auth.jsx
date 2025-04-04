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



            <div className="absolute top-0 left-0 right-0 bottom-0  bg-opacity-50 text-black">
                <div className="bg-Blure absolute top-1/2 left-1/2 transform 
                -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center h-[35rem] w-[28rem] rounded-md z-50 bg-orange-500
                bg-opacity-50 shadow-2xl shadow-white">

                    <h1 className="text-6xl font-bold pb-9 text-black">Zee Trade X</h1>

                {location.pathname=="/signup"   ?  (
                    <section className ="w-full">
                            <SignupForm/>

                            <div className="flex items-center justify-center">
                                <span>have already account ?</span>
                                <Button onClick={() => navigate("/signin")} variant="outline">
                                    SignIn
                                </Button>

                            </div>

                        </section> 
                        ) : location.pathname== "/forgot-password" ? (
                             <section>
                            <ForgotPasswordForm/>
                            <div className="flex items-center justify-center">
                                <span>back to Login</span>
                                <Button onClick={() => navigate("/signin")} variant="outline">
                                    SignIn
                                </Button>

                            </div>
                        </section>
                        ) : (
                            <section>
                              <SigninForm/>
                              <div className="flex items-center justify-center">
                                <span>"don't have already account ?"</span>
                                <Button onClick={() => navigate("/signup")} 
                                variant="outline">
                                    Signup
                                </Button>

                            </div>

                            <div className="">
                                <Button
                                className="w-full py-5"
                                 onClick={() => navigate("/forgot-password")} 
                                variant="outline">
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
