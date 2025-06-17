import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import logo from "../../assets/Swift_logo.svg"
import { motion } from "motion/react"

const Navbar = () => {
    return (
        <motion.nav
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
                delay: 0.2,
                duration: 0.5,
                ease: "easeInOut"
            }}
            className='w-screen h-20 bg-blue-950 p-8 flex justify-between items-center'>
            <div className='text-white font-medium font-sans text-base pl-14'>
                <img className="text-white" src={logo} alt="swift logo" />
            </div>
            <div className='text-white font-light text-sm flex gap-5  items-center text-center pr-14'>
                <Avatar className="bg-white text-blue-950 font-semibold">
                    <AvatarFallback>EH</AvatarFallback>
                </Avatar>
                <div className="font-normal text-base">
                    Ervin Hovel
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar
