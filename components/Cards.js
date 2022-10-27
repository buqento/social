import { useState } from "react"
import Moment from "react-moment"
import Button from "./Common"

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
    const { id, title } = item
    const [detail, setDetail] = useState(false)

    const handleDeletePost = id => {
        const url = `http://localhost:3001/posts/${id}`
        const options = { method: "DELETE" }
        fetch(url, options)
            .then(response => response.json())
            .then(() => {
                getPosts()
            })
    }

    return (
        <div class="flex justify-center">
            <div class="block p-6 rounded-lg border bg-white w-full space-y-2">
                <p className={`font-light text-lg ${!detail ? 'line-clamp-1' : ''}`}>
                    {title}
                </p>
                <div className="flex ">
                    <div className="w-full">
                        {
                            title.length > 80 &&
                            <Button
                                className="text-black underline"
                                onClick={() => setDetail(!detail)}>
                                {detail ? 'Hide' : 'Show More'}
                            </Button>
                        }
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
                    <p class="text-gray-600 text-xs">
                        <Moment fromNow ago>{createdAt}</Moment>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UserCard