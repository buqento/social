import { useState } from "react"
import Button from "../Common"

const AddPost = ({ getPost, selected }) => {

    const userId = 1
    const createdAt = Date.now()
    const [title, setTitle] = useState()
    const url = "http://localhost:3001/posts"

    const handleCreate = () => {
        const data = {
            userId,
            id: createdAt,
            title,
            createdAt
        }
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }
        fetch(url, options)
            .then(response => response.json())
            .then(() => {
                getPost()
                setTitle("")
            })
    }

    const handleUpdate = () => {
        const data = {
            userId: 1,
            id: selected.id,
            title,
            createdAt
        }
        const options = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }
        fetch(`${url}/${selected.id}`, options)
            .then(response => response.json())
            .then(() => {
                getPost()
                setTitle("")
            })
    }

    return (
        <div className="space-y-2">
            <textarea
                value={title || selected?.title}
                type="text"
                className="block form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="What do you think..."
                onChange={event => setTitle(event.target.value)}
            />
            <Button
                className="px-6 py-4 text-lg bg-blue-600"
                onClick={selected ? handleUpdate : handleCreate}>
                {selected ? 'Update' : 'Send'}
            </Button>
        </div>
    )
}

export default AddPost