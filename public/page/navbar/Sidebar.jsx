import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";
import { logout } from "@/State/Auth/Action";
import { ActivityLogIcon, DashboardIcon, ExitIcon, HomeIcon, PersonIcon } from "@radix-ui/react-icons";
import { BookMarkedIcon, CreditCardIcon, LandmarkIcon, WalletIcon } from "lucide-react";
import path from "path";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const menu = [
    {name :"Home", path: "/", icon:<HomeIcon className='h-6 w-6'/>},

    {name :"Portfolio", path: "/portfolio", icon:<DashboardIcon className='h-6 w-6'/>},

    {name :"Watchlist", path: "/watchlist", icon:<BookMarkedIcon className='h-6 w-6'/>},

    {name :"Activity", path: "/activity", icon:<ActivityLogIcon className='h-6 w-6'/>},

    {name :"Wallet", path: "/wallet", icon:<WalletIcon className='h-6 w-6'/>},

    {name :"Payment Details", path: "/payment-details", icon:<LandmarkIcon className='h-6 w-6'/>},

    {name :"Withdrawal", path: "/withdrawal", icon:<CreditCardIcon className='h-6 w-6'/>},

    {name :"Profile", path: "/profile", icon:<PersonIcon className='h-6 w-6'/>},

    {name :"Logout", path: "/", icon:<ExitIcon className='h-6 w-6'/>},


];

//navigate to user diffrent diffent page
const Sidebar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()


    // const hanldeNavigate =(value) =>

        const handleLogout=() => {
            dispatch(logout())

        }

    return(
        <div className="mt-2 space-y-3 ">
            {menu.map((item)=> (
                <div key={item.name}>
                  <SheetClose asChild>

                   <Button 
                    variant="primary" 
                     className="flex items-center gap-3 py-6 px-10 w-full h-7 text-lg bg-black hover:bg-blue-600"
                     onClick={() => {
                        navigate(item.path)
                        if (item.name=="Logout") {
                            handleLogout()
                        }
                    }}
                     >

                     <span className="w-8">{item.icon}</span>
                     <p className="text-yellow-500">{item.name}</p>

                    </Button>


                 </SheetClose>


                </div>

            ))}

        </div>
    );

};

export default Sidebar;