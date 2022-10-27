import Script from "next/script"
import { useState } from "react"
import useFetch from "../hooks/useFetch"
import Albums from "./Albums"

const Posts = ({ userId }) => {

    const [posts] = useFetch(`http://localhost:3001/posts?userId=${userId}`)

    const [selected, setSelected] = useState()

    const renderPost = (item, index) => {
        return (
            <div class="flex justify-center" key={index}>
                <div class="block p-6 rounded-lg shadow-lg bg-white w-full space-y-4">
                    <p class="font-light text-lg line-clamp-3">
                        {item.title}
                    </p>
                    <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"
                        onClick={() => setSelected(item)}
                    >
                        View Detail
                    </button>
                </div>
            </div>
        )
    }

    const renderComment = (item, index) => {
        const { name, body } = item
        return (
            <div key={index} className="p-2">
                <div className="font-medium">{name}</div>
                <div className="font-light">{body}</div>
            </div>
        )
    }

    const Post = ({ item }) => {
        const { id, title, body } = item
        const [comments] = useFetch(`http://localhost:3001/comments?postId=${id}`)
        return (
            <div className="space-y-4">
                <h1 className="text-2xl capitalize">{title}</h1>
                <div>
                    {body}
                </div>
                <div>
                    {
                        comments?.length > 0 &&
                        <span class="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-600 text-white rounded">{`${comments?.length} comment`}</span>
                    }
                    <div className="divide-y">
                        {comments?.map(renderComment)}
                    </div>
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
            {
                selected &&
                <div class="offcanvas offcanvas-bottom fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 left-0 right-0 border-none h-1/3 max-h-full" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                    <div class="offcanvas-header flex items-center justify-between p-4">
                        <h5 class="offcanvas-title mb-0 leading-normal font-semibold" id="offcanvasBottomLabel">Detail</h5>
                        <button type="button" class="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body flex-grow p-4 overflow-y-auto small">
                        <Post item={selected} />
                    </div>
                </div>
            }

        </>
    )
}
export default Posts