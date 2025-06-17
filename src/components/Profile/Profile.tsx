import { ArrowRightSquare } from "lucide-react";
import { Link } from 'react-router-dom';
import { motion } from "motion/react"

const Profile = () => {
    return (
        <section className='w-full min-h-screen flex items-center justify-center font-sans p-4 sm:p-6 lg:p-10 overflow-hidden'>
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
                    delay: 0.4,
                    duration: 0.8,
                    ease: "easeInOut"
                }}
                className="flex flex-col bg-neutral-50 shadow-lg w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-6xl h-auto lg:h-[35rem] rounded-2xl sm:rounded-3xl lg:rounded-4xl justify-start p-4 sm:p-6 lg:px-20 lg:py-10">

                {/* Profile Header */}
                <div className="flex gap-3 sm:gap-4 justify-start items-center mb-6 sm:mb-8 lg:mb-10">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-25 lg:h-25 rounded-full bg-neutral-200 text-center flex justify-center items-center flex-shrink-0">
                        <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-violet-950">EH</span>
                    </div>
                    <div className="min-w-0 flex-1">
                        <div className="font-semibold text-violet-950 text-base sm:text-lg truncate">
                            Ervin Howell
                        </div>
                        <div className="text-neutral-500 text-sm sm:text-base truncate">
                            ervinhowell@gmail.com
                        </div>
                    </div>
                </div>

                {/* Form Fields - Two Column Layout on Desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 flex-1">
                    {/* Left Column */}
                    <div className="flex flex-col gap-4 sm:gap-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="user-id" className="text-sm font-medium text-gray-700">User ID</label>
                            <input
                                type="text"
                                id="user-id"
                                value="12345687"
                                className="w-full px-3 py-2 text-violet-950 font-normal bg-neutral-200 border-none outline-none focus:outline-none focus:ring-0 focus:border-none rounded-md text-sm sm:text-base"
                                readOnly
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email ID</label>
                            <input
                                type="email"
                                id="email"
                                value="ervinhowell@gmail.com"
                                className="w-full px-3 py-2 text-violet-950 font-normal bg-neutral-200 border-none outline-none focus:outline-none focus:ring-0 focus:border-none rounded-md text-sm sm:text-base"
                                readOnly
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</label>
                            <input
                                type="text"
                                id="phone"
                                value="96068 12345"
                                className="w-full px-3 py-2 text-violet-950 font-normal bg-neutral-200 border-none outline-none focus:outline-none focus:ring-0 focus:border-none rounded-md text-sm sm:text-base"
                                readOnly
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-4 sm:gap-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                value="Ervin Howell"
                                className="w-full px-3 py-2 text-violet-950 font-normal bg-neutral-200 border-none outline-none focus:outline-none focus:ring-0 focus:border-none rounded-md text-sm sm:text-base"
                                readOnly
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="address" className="text-sm font-medium text-gray-700">Address</label>
                            <input
                                type="text"
                                id="address"
                                value="voluptate iusto quis nobis reprehenderit…"
                                className="w-full px-3 py-2 text-violet-950 font-normal bg-neutral-200 border-none outline-none focus:outline-none focus:ring-0 focus:border-none rounded-md text-sm sm:text-base"
                                readOnly
                            />
                        </div>
                    </div>
                </div>

                {/* Button */}
                <Link to={"/dashboard"}>
                    <div className="mt-6 lg:mt-8 flex justify-end">
                        <button className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-md cursor-pointer flex items-center gap-2 font-medium transition-colors text-sm sm:text-base w-full lg:w-auto">
                            Go to Dashboard
                            <ArrowRightSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                    </div>
                </Link>
            </motion.div>
        </section>
    );
}

export default Profile;