import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import AssetTable from "./AssetsTable";
import StockChart from "../home/StockChart";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "@/components/ui/avatar";
import { Cross1Icon, DotIcon } from "@radix-ui/react-icons";
import { MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { getCoinList } from "@/State/Coin/Action";

const Home =() => {
    const [category, setCategory] = React.useState("all")
    const [inputValue, setInputValue] = React.useState("");
    //by deafult realase
    const [isBotRealeace, setIsBotRealeace] = React.useState(false);

    const {coin} = useSelector(store=> store);

    const dispatch = useDispatch()

    const handleBotRealeace = () => setIsBotRealeace(!isBotRealeace);

    //handle category
    const handleCategory = (value) => {
        setCategory(value)
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);

    };
    const handeleKeyPress=(event) => {
         if(event.key == "Enter"){
            console.log(inputValue)
         }
         setInputValue("")
    };


   useEffect(()=> {
     dispatch(getCoinList(1))
    
   }, [])
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
                    <AssetTable coin={coin.coinList} category={category}/>

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


            { isBotRealeace && <div className="rounded-md w-[20rem] md:w-[25rem] lg:w-[25rem] h-[70vh]
              bg-slate-300">
                <div className="flex justify-between items-center border-b px-6 h-
                [12%]">
                  <p>Chat Bot</p>
                   <Button onClick={handleBotRealeace} variant="ghost" size="icon">
                    <Cross1Icon/>
                   </Button>

                </div>

             {/*  create scroll-container */}
                <div className="h-[76%] flex flex-col overflow-y-auto gap-5 px-5 py-2 scroll-container">

                    <div className="self-start pb-5 w-auto">

                      <div className="justify-end self-end px-3 py-3 rounded-md bg-slate-800 w-auto">
                        <p>hi, Maleesha Madushanka</p>
                        <p>you can ask cypto related any quations</p>
                        <p>like , Price, Market Cap extra....</p>

                      </div>

                    </div>

                    {
                        [1, 1, 1, 1].map((item, i) => ( 
                         <div key={i}
                         className={`${
                            i%2==0 ? "self-start":"self-end"
                            }"pb-5 w-auto"`}
                         >

                        
                          {i%2==0 ? <div className="justify-end self-end px-3 py-4 rounded-md bg-slate-800 w-auto">
                          <p>prompt who are you</p>
                          
                          </div>:<div className="justify-end self-end px-3 py-3 rounded-md bg-slate-800 w-auto">
                          <p>anser hi, Maleesha Madushanka</p>
                          
  
                        </div> }

                        
  
                        
  
  
                      </div>
                      ))
                    }


                </div>

                <div className="h-[12%] border-t">
                    <Input className="w-full h-full outline-none " 
                    placeholder="write propmt"
                    onChange={handleChange}
                    value={inputValue}
                    onKeyPress={handeleKeyPress}
                    />
              

                </div>

            </div>}


           <div className="relative w-[10rem] cursor-pointer group">
                <Button 
                  onClick={handleBotRealeace}
                
                 className="w-full h-[3rem] gap-2 items-center">
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