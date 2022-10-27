import Moment from "react-moment"

const UserCard = ({ item }) => {
    const { name, email, profilImage } = item
    return (
        <div className="border flex p-4 space-x-4 mb-4 rounded-lg">
            <img
                className="rounded-full border w-12 h-12"
                src={profilImage} alt="user" />
            <div>
                <div className="font-black">{name}</div>
                <div className="text-xs font-light">{email}</div>
            </div>
        </div>
    )
}

export const Profile = ({ item }) => {
    const { name, username, email, phone, profilImage } = item
    return (
        <div className="p-2">
            <img
                className="rounded-full border"
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

export const PostCard = ({ item }) => {
    const { title } = item
    return (
        <div class="flex justify-center">
            <div class="block p-6 rounded-lg shadow-lg bg-white w-full">
                <h5 class="text-gray-900 text-xl leading-tight mb-2">{title}</h5>
                <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">More</button>
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