import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BookmarkFilledIcon, BookmarkIcon, DotIcon } from "@radix-ui/react-icons";


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
                <div>
                    <Button>
                        {true ? (<BookmarkFilledIcon className="h-6 w-6"/>) : (<BookmarkIcon className="h-6 w-6"/> )}
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default StockDetails;