import { useRouter } from "next/router"
import useFetch from "../hooks/useFetch"
import Button from "./Common"

const SummaryPost = ({ items }) => {

    const router = useRouter()

    return (
        <div className="space-y-2">
            <div>
                {`${items?.length} posts`}
            </div>
            <div>
                <Button onClick={() => router.push("/post")}>
                    Create New Post
                </Button>
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