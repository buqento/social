import { PostCard } from "./Cards"
import AddPost from "../components/post/Create"
import { useEffect, useState } from "react"

const SummaryPost = ({ items, getPosts, selectedPost }) => {
    return (
        <div className="space-y-4">
            {items?.sort((a, b) => (a.id > b.id ? -1 : 1)).map((item, index) =>
                <div key={index}>
                    <PostCard
                        item={item}
                        showButton
                        getPosts={getPosts}
                        selectedPost={selectedPost} />
                </div>
            )}
        </div>
    )
}

const Summary = ({ }) => {
    const [posts, setPosts] = useState()
    const [selected, setSelected] = useState()
    useEffect(() => getPosts(), [])
    const getPosts = () => {
        let url = `http://localhost:3001/posts`
        fetch(url)
            .then((response) => response.json())
            .then(data => setPosts(data))
    }
    const selectedPost = item => setSelected(item)
    return (
        <div className="space-y-4">
            <AddPost
                getPost={getPosts}
                posts={posts}
                selected={selected} />
            <SummaryPost
                items={posts}
                getPosts={getPosts}
                selectedPost={selectedPost} />
        </div>
    )
}

export default Summary