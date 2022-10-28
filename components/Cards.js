import { useState } from "react"
import Moment from "react-moment"
import useFetch from "../hooks/useFetch"
import Button from "./Common"
import { FaRegTrashAlt } from "react-icons/fa"
import AddComment from "./comment/Create"

const baseUrl = `http://localhost:3001`

const UserCard = ({ item }) => {
    const { name, email, profilImage } = item
    return (
        <div className="cursor-pointer border flex p-4 space-x-4 mb-4 rounded-lg">
            <img
                className="rounded-full border w-12 h-12"
                src={profilImage} alt="user" />
            <div className="flex items-center justify-center">
                <div>
                    <div className="font-black">{name}</div>
                    <div className="text-xs font-light">{email}</div>
                </div>
            </div>
        </div>
    )
}

export const Profile = ({ item }) => {
    const { name, username, email, phone, profilImage } = item
    return (
        <div className="p-4 text-center border rounded-t-lg bg-blue-200">
            <img
                className="rounded-full border mx-auto"
                src={profilImage}
                alt="user" />
            <div>
                <div className="font-black">{name} - {username}</div>
                <div className="text-xs font-light">{email}</div>
                <div className="text-xs font-light">{phone}</div>
            </div>
        </div>
    )
}

export const PostCard = ({ item, getPosts, selectedPost, showButton = true }) => {
    const { id, title, createdAt } = item

    const [detail, setDetail] = useState(false)

    const [comments] = useFetch(`${baseUrl}/comments?postId=${id}`)

    const renderComment = (item, index) => {
        const { id, name, body, createdAt } = item
        return (
            <div key={index} className="flex space-x-4 p-4">
                <div className="w-full space-y-2">
                    <div className="">{name}</div>
                    <div className="font-light">{body}</div>
                    <p class="font-light text-xs">
                        <Moment fromNow ago>{createdAt}</Moment>
                    </p>
                </div>
                <FaRegTrashAlt
                    className="cursor-pointer text-red-600"
                    onClick={() => handleDeleteComment(id)}
                />
            </div>
        )
    }

    const handleDeletePost = id => {
        const url = `${baseUrl}/posts/${id}`
        const options = { method: "DELETE" }
        fetch(url, options)
            .then(response => response.json())
            .then(() => {
                getPosts()
            })
    }

    const handleDeleteComment = id => {
        console.log(id);
        const url = `${baseUrl}/comments/${id}`
        const options = { method: "DELETE" }
        fetch(url, options)
            .then(response => response.json())
            .then(() => {
                getPosts()
            })
    }

    return (
        <div class="flex justify-center">
            <div class="block p-6 rounded-lg border bg-white w-full space-y-4">
                <p className={`font-light text-lg ${!detail ? 'line-clamp-1' : ''}`}>
                    {title}
                </p>
                <p class="font-light text-xs">
                    <Moment fromNow ago>{createdAt}</Moment>
                </p>

                {
                    detail &&
                    <div>
                        {
                            comments?.length > 0 &&
                            <span class="inline-block py-1 px-2 leading-none text-center whitespace-nowrap align-baseline font-medium bg-gray-300 text-xs text-black rounded">{`${comments?.length} comment`}</span>
                        }
                        <div className="divide-y">
                            {comments?.map(renderComment)}
                            <AddComment getPost={getPosts} postId={id} />
                        </div>

                    </div>
                }

                <div className="flex">
                    <div className="w-full">
                        <Button
                            className="bg-blue-600"
                            onClick={() => setDetail(!detail)}>
                            {detail ? 'Hide' : 'Show More'}
                        </Button>
                    </div>
                    {
                        showButton &&
                        <div className="flex space-x-2">
                            <Button
                                className="bg-blue-600"
                                onClick={() => selectedPost(item)}>
                                Update
                            </Button>
                            <Button
                                className="bg-red-600"
                                onClick={() => handleDeletePost(id)}>
                                Delete
                            </Button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export const AlbumCard = ({ item }) => {
    const { title, thumbnailUrl, createdAt } = item
    return (
        <div class="flex justify-center">
            <div class="w-full flex flex-col md:flex-row rounded-lg bg-white shadow-lg">
                <img class="h-32 object-cover w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={thumbnailUrl} alt="" />
                <div class="p-6 flex flex-col justify-start">
                    <h5 class="text-gray-900 text-xl font-medium mb-2 capitalize">{title}</h5>
                    <p class="font-light text-xs">
                        <Moment fromNow ago>{createdAt}</Moment>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UserCard