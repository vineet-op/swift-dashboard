import { Link } from "react-router-dom"
import DataTable from "../Table/Table"
import { Button } from "../ui/button"

const Dashboard = () => {
    return (
        <div className="w-screen h-full flex pt-10 flex-col justify-center items-center ">
            <Link to="/" className="w-full">
                <Button className="bg-purple-500 text-white text-center cursor-pointer w-fit ml-32 mb-8">
                    Go to Dashboard
                </Button>
            </Link>
            <DataTable />
        </div>
    )
}

export default Dashboard
