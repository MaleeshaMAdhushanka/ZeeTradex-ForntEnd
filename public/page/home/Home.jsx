import { Button } from "@/components/ui/button";
import React from "react";
import AssetTable from "./AssetsTable";
import StockChart from "../home/StockChart";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "@/components/ui/avatar";
import { DotIcon } from "@radix-ui/react-icons";
import { MessageCircle } from "lucide-react";
const Home =() => {
    const [category, setCategory] = React.useState("all")
    //handle category
    const handleCategory = (value) => {
        setCategory(value)
    }
    return(
        <div className='relative'>

            <div className='lg:flex'>
                <div className= 'lg:w-[50%] lg:border-r'>

                    <div className='p-3 flex items-center gap-4'>

                        <Button onClick={() => handleCategory("all")} variant={category=="all" ? "default":"outline"} className="rounded-full">All</Button>

                        <Button onClick={() => handleCategory("top50")} variant={category=="top50" ? "default":"outline"} className="rounded-full">Top 50</Button>

                        <Button onClick={() => handleCategory("topGainers")} variant={category=="topGainers" ? "default" : "outline"} className="rounded-full">Top Gainers</Button>

                        <Button onClick={() => handleCategory("topLosers")} variant={category=="topLosers" ? "default" : "outline"} className="rounded-full">Top Losers</Button>




                    </div>
                    <AssetTable/>

                </div>
                <div className="hidden lg:block lg:w-[50%] p-5">
                    <StockChart />

                    {/* Stock Market Card */}
                    <div className="flex gap-5 items-center mt-5">
                        <div>
                            <Avatar className="h-12 w-12">
                                <AvatarImage
                                    src={
                                        "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628"
                                    }
                                    className={"h-15 w-14"}
                                />
                            </Avatar>
                        </div>

                        <div>
                            <div className="flex items-center gap-2">
                                <p>ETH</p>
                                <DotIcon className="text-gray-400" />
                                <p className="text-gray-400">Ethereum</p>
                            </div>

                            <div className="flex items-end gap-2">
                                <p className="text-xl font-bold">5464</p>

                                <p className="text-red-600">
                                    <span>-6284016391.2286</span>
                                    <span>(2.77825)</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                

            </div>

            <section className="absolute bottom-5 right-5 z-40 flex flex-col justify-end items-end gap-2">


           <div className="relative w-[10rem] cursor-pointer group">
                <Button className="w-full h-[3rem] gap-2 items-center">
                    <MessageCircle 
                    size={30}
                    className="fill-[#1e293b] -rote-90 stroke-none group-hover:fill-[#ffffff]"/>
                    <span className="text-2xl">Chat Bot</span>

                </Button>

           </div>



            </section>




        </div>
    );
}
export default Home;