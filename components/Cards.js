const Item = ({ item }) => {
    const { id, name, username, email, phone } = item
    return (
        <div className="border flex p-4 space-x-4 mb-4">
            <img
                className="rounded-full border w-12 h-12"
                src="https://randomuser.me/api/portraits/men/73.jpg" alt="user" />
            <div>
                <div className="font-black">{name}</div>
                <div className="text-xs font-light">{email}</div>
            </div>
        </div>
    )
}

export default Item