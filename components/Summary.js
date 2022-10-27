import { useRouter } from "next/router"
import useFetch from "../hooks/useFetch"
import { PostCard } from "./Cards"
import Button from "./Common"

const SummaryPost = ({ items }) => {

    const router = useRouter()

    return (
        <div className="space-y-4">

            <div className="border p-4">
                <Button className="bg-green-600" onClick={() => router.push("/post")}>
                    Create Post
                </Button>
            </div>
            <div className="space-y-2">
                <h1 className="text-2xl">Latest Post</h1>
                {items?.sort((a, b) => (a.id > b.id ? -1 : 1)).map((item, index) =>
                    <div>
                        <PostCard item={item} />
                    </div>
                )}
            </div>
        </div>
    )
}

const Summary = () => {
    const [posts] = useFetch(`http://localhost:3001/posts`)
    return (
        <div>
            <SummaryPost items={posts} />
        </div>
    )
}

export default Summary