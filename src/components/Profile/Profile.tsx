import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { ArrowRightSquare } from "lucide-react";
import { motion } from "motion/react"

const Profile = () => {
    return (
        <div className='w-full h-[42rem] flex items-center justify-center font-sans'>
            {/* Card */}
            <motion.div
                initial={{
                    opacity: 0,
                    filter: "blur(10px)",
                    y: 10
                }}

                animate={{

                    opacity: 1,
                    filter: "blur(0px)",
                    y: 0,
                }}
                transition={{
                    delay: 0.3,
                    duration: 0.5,
                    ease: "easeInOut"
                }}
                className="flex flex-col lg:flex-row xl:flex-row gap-10 bg-neutral-50 shadow w-6xl h-[35rem] rounded-4xl justify-start px-20 py-10 ">

                {/* Left Column */}
                <div className="flex flex-col gap-5">
                    <div className="flex gap-4 justify-start items-center">
                        <div className="size-25 rounded-full bg-neutral-200 text-center flex justify-center items-center">
                            <span className="text-2xl font-semibold text-violet-950">EH</span>
                        </div>
                        <div>
                            <div className="font-semibold text-violet-950 text-lg">
                                Ervin Howell
                            </div>
                            <div className="text-neutral-500">
                                ervinhowell@gmail.com
                            </div>
                        </div>
                    </div>

                    <div className="grid w-md max-w-2xl items-center gap-5">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="user-id">User ID</Label>
                            <Input type="text" id="user-id" value="12345687" className="text-violet-950 font-normal bg-neutral-200 border-none outline-none focus:outline-none focus:ring-0 focus:border-none" readOnly />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="email">Email ID</Label>
                            <Input type="email" id="email" value="ervinhowell@gmail.com" className="text-violet-950 font-normal bg-neutral-200 border-none outline-none focus:outline-none focus:ring-0 focus:border-none" readOnly />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input type="text" id="phone" value="96068 12345" className="text-violet-950 font-normal bg-neutral-200 border-none outline-none focus:outline-none focus:ring-0 focus:border-none" readOnly />
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-5">
                    <div className="grid w-md max-w-2xl items-center gap-5 lg:mt-30 xl:mt-30">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input type="text" id="name" value="Ervin Howell" className="text-violet-950 font-normal bg-neutral-200 border-none outline-none focus:outline-none focus:ring-0 focus:border-none" readOnly />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="address">Address</Label>
                            <Input type="text" id="address" value="voluptate iusto quis nobis reprehenderit…" className="text-violet-950 font-normal bg-neutral-200 border-none outline-none focus:outline-none focus:ring-0 focus:border-none" readOnly />
                        </div>
                    </div>
                    <Link to="/dashboard" className="w-full">
                        <Button className="bg-purple-500 text-white w-full text-center cursor-pointer">
                            Go to Dashboard
                            <ArrowRightSquare />
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}

export default Profile;
