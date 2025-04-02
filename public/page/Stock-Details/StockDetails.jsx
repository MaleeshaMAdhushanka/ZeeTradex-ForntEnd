import { Avatar, AvatarImage } from "@/components/ui/avatar";

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
                </div>
            </div>
        </div>
    )
}

export default StockDetails;