import Script from "next/script"
import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import Albums from "./Albums"
import { PostCard, Profile } from "./Cards"
import AddComment from "./comment/Create"

const Posts = ({ userId }) => {

    const baseUrl = `http://localhost:3001`

    const [posts] = useFetch(`${baseUrl}/posts?userId=${userId}`)

    const [user] = useFetch(`${baseUrl}/users?id=${userId}`)

    const SummaryPost = ({ items, getPosts, selectedPost }) => {
        return (
            <div className="space-y-4">
                {posts?.sort((a, b) => (a.id > b.id ? -1 : 1)).map((item, index) =>
                    <div key={index}>
                        <PostCard item={item} showButton={false} getPosts={getPosts} selectedPost={selectedPost} />
                    </div>
                )}

            </div>
        )
    }

    useEffect(() => { getPosts() }, [])

    const getPosts = () => {
        let url = `${baseUrl}/posts?userId=${userId}`
        fetch(url)
            .then((response) => response.json())
    }

    const selectedPost = item => { setSelected(item) }

    return (
        <>
            <Script src='/js/index.min.js' />

            {user && <Profile item={user[0]} />}

            <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tabFill"
                role="tablist">
                <li className="nav-item flex-auto text-center" role="presentation">
                    <a href="#tabs-homeFill" className="nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent active" id="tabs-home-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-homeFill" role="tab"
                        aria-controls="tabs-homeFill" aria-selected="true">Posts</a>
                </li>
                <li class="nav-item flex-auto text-center" role="presentation">
                    <a href="#tabs-profileFill" class="nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent " id="tabs-profile-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-profileFill" role="tab"
                        aria-controls="tabs-profileFill" aria-selected="false">Album</a>
                </li>
            </ul>

            <div class="tab-content" id="tabs-tabContentFill">
                <div class="tab-pane fade show active" id="tabs-homeFill" role="tabpanel" aria-labelledby="tabs-home-tabFill">
                    <div className="space-y-2">
                        {
                            posts?.length === 0 &&
                            <p className="p-6 rounded-lg border bg-white w-full font-light text-lg">
                                No post!
                            </p>
                        }
                        <SummaryPost items={posts} getPosts={getPosts} selectedPost={selectedPost} />
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