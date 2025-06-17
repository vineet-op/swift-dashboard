// App.tsx
import { useEffect, useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "motion/react"

const PAGE_SIZE_OPTIONS = [10, 50, 100];

interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

interface SavedState {
    currentPage: number;
    pageSize: number;
    sortBy: keyof Comment | null;
    sortOrder: 'asc' | 'desc' | null;
    search: string;
}

export default function App() {
    const [rawData, setRawData] = useState<Comment[]>([]);
    const [search, setSearch] = useState<string>("");
    const [sortBy, setSortBy] = useState<keyof Comment | null>(null);
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const res = await fetch("https://jsonplaceholder.typicode.com/comments");
            const data: Comment[] = await res.json();
            setRawData(data);
            setLoading(false)
        };
        fetchData();
    }, []);

    useEffect(() => {
        const saved = localStorage.getItem("commentState");
        if (saved) {
            const parsed: SavedState = JSON.parse(saved);
            setCurrentPage(parsed.currentPage);
            setPageSize(parsed.pageSize);
            setSortBy(parsed.sortBy);
            setSortOrder(parsed.sortOrder);
            setSearch(parsed.search);
        }
    }, []);

    useEffect(() => {
        const state: SavedState = { currentPage, pageSize, sortBy, sortOrder, search };
        localStorage.setItem("commentState", JSON.stringify(state));
    }, [currentPage, pageSize, sortBy, sortOrder, search]);

    const handleSort = (key: keyof Comment) => {
        if (sortBy !== key) {
            setSortBy(key);
            setSortOrder("asc");
        } else {
            if (sortOrder === "asc") setSortOrder("desc");
            else if (sortOrder === "desc") {
                setSortBy(null);
                setSortOrder(null);
            } else {
                setSortOrder("asc");
            }
        }
    };

    const filtered = useMemo(() => {
        return rawData.filter((item) => {
            const q = search.toLowerCase();
            return (
                item.name.toLowerCase().includes(q) ||
                item.email.toLowerCase().includes(q) ||
                item.body.toLowerCase().includes(q)
            );
        });
    }, [search, rawData]);

    const sorted = useMemo(() => {
        if (!sortBy || !sortOrder) return filtered;
        return [...filtered].sort((a, b) => {
            if (a[sortBy]! < b[sortBy]!) return sortOrder === "asc" ? -1 : 1;
            if (a[sortBy]! > b[sortBy]!) return sortOrder === "asc" ? 1 : -1;
            return 0;
        });
    }, [filtered, sortBy, sortOrder]);

    const paginated = useMemo(() => {
        const start = (currentPage - 1) * pageSize;
        return sorted.slice(start, start + pageSize);
    }, [sorted, currentPage, pageSize]);

    const totalPages = Math.ceil(filtered.length / pageSize);

    return (
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
                delay: 0.2,
                duration: 0.5,
                ease: "easeInOut"
            }}
            className="p-6 font-sans space-y-3 w-full max-w-7xl bg-neutral-200 shadow-xl rounded-2xl ">
            <div className="flex flex-wrap justify-between gap-4">
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        className={`shadow-2xl cursor-pointer ${sortBy === "postId" ? "bg-purple-500 text-white" : "bg-purple-300"}`}
                        onClick={() => handleSort("postId")}
                    >
                        Sort Post ID
                    </Button>
                    <Button
                        variant="outline"
                        className={`cursor-pointer ${sortBy === "name" ? "bg-purple-500 text-white" : "bg-purple-300"}`}
                        onClick={() => handleSort("name")}
                    >
                        Sort Name
                    </Button>
                    <Button
                        variant="outline"
                        className={`cursor-pointer bg-purple-300 ${sortBy === "email" ? "bg-purple-500 text-white" : "bg-purple-300"}`}
                        onClick={() => handleSort("email")}
                    >
                        Sort Email
                    </Button>
                </div>
                <Input
                    placeholder="Search name, email, comment"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full sm:w-1/3 outline-1 outline-purple-400 border-purple-500 text-purple-800"
                />
            </div>

            <Table>
                <TableHeader className="bg-neutral-400 text-violet-950">
                    <TableRow>
                        <TableHead>Post ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Comment</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="text-violet-600">
                    {loading ? (
                        <TableRow>
                            <TableCell colSpan={4} className="text-center text-violet-500">
                                Loading comments...
                            </TableCell>
                        </TableRow>
                    ) : paginated.length > 0 ? (
                        paginated.map((comment) => (
                            <TableRow key={comment.id}>
                                <TableCell>{comment.postId}</TableCell>
                                <TableCell>{comment.name}</TableCell>
                                <TableCell>{comment.email}</TableCell>
                                <TableCell className="truncate max-w-xs">{comment.body}</TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={4} className="text-center text-violet-500">
                                No matching comments found.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>


            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                    {((currentPage - 1) * pageSize + 1)}–{Math.min(currentPage * pageSize, filtered.length)} of {filtered.length} Items
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                    <Button
                        variant="outline"
                        size="sm"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((p) => p - 1)}
                    >
                        Prev
                    </Button>

                    {[...Array(totalPages)].map((_, idx) => (
                        <motion.div
                            layout
                            layoutId={`page-button-${idx + 1}`}
                            key={idx}
                        >
                            <Button
                                className={currentPage === idx + 1
                                    ? "bg-purple-500 text-white hover:bg-purple-600"
                                    : "bg-white hover:bg-neutral-100"}
                                size="sm"
                                onClick={() => setCurrentPage(idx + 1)}
                            >
                                {idx + 1}
                            </Button>
                        </motion.div>
                    ))}

                    <Button
                        variant="outline"
                        size="sm"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((p) => p + 1)}
                        className="hover:bg-neutral-100"
                    >
                        Next
                    </Button>

                    <div className="bg-white">
                        <Select
                            value={pageSize.toString()}
                            onValueChange={(value) => {
                                setPageSize(Number(value));
                                setCurrentPage(1);
                            }}
                        >
                            <SelectTrigger className="w-[120px] cursor-pointer bg-white">
                                <SelectValue placeholder="Page size" />
                            </SelectTrigger>
                            <SelectContent className="cursor-pointer">
                                {PAGE_SIZE_OPTIONS.map((size) => (
                                    <SelectItem className="cursor-pointer" key={size} value={size.toString()}>
                                        {size} / Page
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
