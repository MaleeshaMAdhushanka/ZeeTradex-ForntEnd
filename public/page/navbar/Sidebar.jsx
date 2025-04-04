import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";
import { ActivityLogIcon, DashboardIcon, ExitIcon, HomeIcon, PersonIcon } from "@radix-ui/react-icons";
import { BookMarkedIcon, CreditCardIcon, LandmarkIcon, WalletIcon } from "lucide-react";
import path from "path";
import React from "react";
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

    // const hanldeNavigate =(value) =>

    return(
        <div className="mt-1 space-y-4">
            {menu.map((item)=> (
                <div key={item.name}>
                  <SheetClose className="w-full">

                   <Button 
                    variant="primary" 
                     className="flex items-center gap-4 py-6 px-10 w-full h-7 text-lg bg-black hover:bg-gray-700"
                     onClick={() => navigate(item.path)}
                     >

                     <span className="w-8">{item.icon}</span>
                     <p className="text-blue-600">{item.name}</p>

                    </Button>


                 </SheetClose>


                </div>

            ))}

        </div>
    );

};

export default Sidebar