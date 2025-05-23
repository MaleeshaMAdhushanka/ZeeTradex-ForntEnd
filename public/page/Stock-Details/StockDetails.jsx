import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BookmarkFilledIcon, BookmarkIcon, DotIcon } from "@radix-ui/react-icons";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import TreadingForm from "./TreadingForm";
import StockChart from "../home/StockChart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCoinDetails } from "@/State/Coin/Action";
import { addItemToWatchlist, getUserWatchlist } from "@/State/Watchlist/Action";
import { existInWatchlist } from "@/utils/existInWatchlist";
  


//click the any asset redirect to the stock details page
const StockDetails = () => {

const { coin, watchlist } = useSelector(store => store);



    //bitcoin click enne ekata adala stock details page eka
const dispatch = useDispatch();

const { id } = useParams();


useEffect(()=> {
    dispatch(fetchCoinDetails({coinId: id, jwt: localStorage.getItem("jwt")})
);
     dispatch(getUserWatchlist(localStorage.getItem("jwt")));


},[id]);

const handleAddToWatchlist =()=> {
    dispatch(addItemToWatchlist({coinId:coin.coinDetails?.id, jwt:localStorage.getItem("jwt")}));
}

    return (
        <div className="p-5 mt-5">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div>
                        <Avatar>
                            <AvatarImage
                            src={
                                coin.coinDetails?.image.large


                            }
                            />

                        </Avatar>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <p>{coin.coinDetails?.symbol.toUpperCase()}</p>
                            <DotIcon className="text-gray-400"/>
                            <p className="text-gray-400">{coin.coinDetails?.name}</p>


                        </div>
                        <div className="flex items-end gap-2">
                            <p className="text-xl font-bold">${
                                 coin.coinDetails?.market_data?.current_price.usd
                              }
                            </p>
                            {/* market change 24 */}
                            <p className="text-red-600">
                                
                                    <span>{coin.coinDetails?.market_data?.market_cap_change_24h}</span>
                                    <span>({coin.coinDetails?.market_data?.market_cap_change_percentage_24h})%</span>
                            </p>

                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Button onClick= {handleAddToWatchlist}>
                          {Array.isArray(watchlist?.items) && existInWatchlist(watchlist.items, coin.coinDetails) ? (
                           <BookmarkFilledIcon className="h-6 w-6"/>
                          ) : (
                           <BookmarkIcon className="h-6 w-6"/>
                           )}
                    </Button>
                    <Dialog>
                        <DialogTrigger asChild>
                        <Button  size ="lg"className="">
                            Tread
                        </Button>
                        </DialogTrigger>
                        <DialogContent>
                        <DialogHeader>
                            <DialogTitle>How Much Do you want to spend?</DialogTitle>
                            
                        </DialogHeader>
                        <TreadingForm/>
                        </DialogContent>
                </Dialog>

                </div>

            </div>
            <div className=" flex justify-center mt-14">
            <StockChart coinId={id}/>
            </div>
            
        </div>
    );
};

export default StockDetails;