import Button from "./Common"

const Item = ({ item }) => {
    const { id, name, username, email, phone, profilImage } = item
    return (
        <div className="border flex p-4 space-x-4 mb-4">
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
    const { id, name, username, email, phone, profilImage } = item
    return (
        <div className="p-2">
            <img
                className="rounded-full border"
                src={profilImage}
                alt="user" />
            <div>
                <div className="font-black">{name}</div>
                <div className="text-xs font-light">{email}</div>
            </div>
        </div>
    )
}

export default Item