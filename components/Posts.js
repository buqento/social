import Script from "next/script"
import useFetch from "../hooks/useFetch"
import Albums from "./Albums"
import { PostCard } from "./Cards"

const Posts = ({ userId }) => {

    const [posts] = useFetch(`http://localhost:3001/posts?userId=${userId}`)

    const renderPost = (item, index) => {
        return (
            <div key={index}>
                <PostCard item={item} />
            </div>
        )
    }

    const renderComment = (item, index) => {
        const { name, body } = item
        return (
            <div key={index} className="border p-2">
                <div className="font-medium">{name}</div>
                <div className="font-light">{body}</div>
            </div>
        )
    }

    const Post = ({ item }) => {
        const { id, title, body } = item
        const [comments] = useFetch(`http://localhost:3001/comments?postId=${id}`)
        return (
            <div>
                <h1 className="text-2xl capitalize">{title}</h1>
                <div>
                    {body}
                </div>
                <div>
                    <div>
                        {`${comments?.length} komentar`}
                    </div>
                    {comments?.map(renderComment)}
                </div>
            </div>
        )
    }

    const handlePost = () => {
        const data = {
            id: 4,
            title: "tsssest",
            author: "bv"
        }
        const url = "http://localhost:3001/posts"
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }
        fetch(url, options)
            .then(response => response.json())
            .then(data => { console.log(data); })
    }

    return (
        <>
            <Script src='/js/index.min.js' />

            <ul class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tabFill"
                role="tablist">
                <li class="nav-item flex-auto text-center" role="presentation">
                    <a href="#tabs-homeFill" class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    " id="tabs-home-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-homeFill" role="tab"
                        aria-controls="tabs-homeFill" aria-selected="true">Posts</a>
                </li>
                <li class="nav-item flex-auto text-center" role="presentation">
                    <a href="#tabs-profileFill" class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-profile-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-profileFill" role="tab"
                        aria-controls="tabs-profileFill" aria-selected="false">Album</a>
                </li>

            </ul>
            <div class="tab-content" id="tabs-tabContentFill">
                <div class="tab-pane fade show active" id="tabs-homeFill" role="tabpanel" aria-labelledby="tabs-home-tabFill">
                    <div className="space-y-2">
                        {posts?.map(renderPost)}
                    </div>
                </div>
                <div class="tab-pane fade" id="tabs-profileFill" role="tabpanel" aria-labelledby="tabs-profile-tabFill">
                    <div className="space-y-2">
                        <Albums userId={userId} />
                    </div>
                </div>
            </div>


        </>
    )
}
export default Posts