import { Avatar } from "@mui/material";


const DashboardNav = () => {
    return (
        <div className="flex justify-between text-white py-5">
            <div className="flex items-center gap-x-3 ">
                <img src="logo.svg" alt="" />
                <span>Banglamart Admin</span>
            </div>
            <div className="flex items-center gap-x-8">
                <img src="/search.svg" alt="" className="icon" />
                <img src="/app.svg" alt="" className="icon" />
                <img src="/expand.svg" alt="" className="icon" />
                <div className="relative">
                    <img src="/notifications.svg" alt="" />
                    <span className="absolute -top-2 -right-3 bg-red-500 h-[15px] w-[15px] p-[10px] rounded-full flex items-center justify-center">1</span>
                </div>
                <div className="flex items-center gap-x-2">
                    <Avatar>
                        <img
                            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                            alt=""
                        />
                    </Avatar>
                    <span>Jane</span>
                </div>
                <img src="/settings.svg" alt="" className="icon" />
            </div>
        </div>
    );
};

export default DashboardNav;
