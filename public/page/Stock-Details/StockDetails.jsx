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
  


//click the any asset redirect to the stock details page
const StockDetails = () => {
    return (
        <div className="p-5 mt-5">
            <div className="flex justify-between">
                <div className="flex gap-5 items-center">
                    <div>
                        <Avatar>
                            <AvatarImage
                            src={
                                "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628"


                            }
                            />

                        </Avatar>
                    </div>
                    <div>
                        <div className="flex items-center gap-4">
                            <p>BTC</p>
                            <DotIcon className="text-gray-400"/>
                            <p className="text-gray-400">Bitcoin</p>


                        </div>
                        <div className="flex items-end gap-2">
                            <p className="text-xl font-bold">$65554</p>
                            {/* market change 24 */}
                            <p className="text-red-600">
                                
                                    <span>-6284016391.2286</span>
                                    <span>(2.77825%)</span>
                            </p>

                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Button>
                        {true ? (<BookmarkFilledIcon className="h-6 w-6"/>) : (<BookmarkIcon className="h-6 w-6"/> )}
                    </Button>
                    <Dialog>
  <DialogTrigger>
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
            <StockChart/>
            </div>
            
        </div>
    );
};

export default StockDetails;