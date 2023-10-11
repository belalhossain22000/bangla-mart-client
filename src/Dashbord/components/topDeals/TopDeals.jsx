import { Avatar } from "@mui/material"
import { topDealUsers } from "../../data"



const TopDeals = () => {
    return (
        <div className="text-white py-5 px-3">
            <h1 className="text-2xl font-semibold pb-5">Top Deals</h1>
            <div className="space-y-5">
                {topDealUsers.map(user => (
                    <div className="flex justify-between" key={user.id}>
                        <div className="flex items-center gap-x-1 ">
                            <Avatar>
                            <img src={user.img} alt="" />
                            </Avatar>
                            <div className="flex flex-col">
                                <span className="username">{user.username}</span>
                                <span className="email">{user.email}</span>
                            </div>
                        </div>
                        <span className="amount">${user.amount}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopDeals