import { useState } from "react"
import Button from "../Common"

const AddComment = ({ getPosts, postId }) => {

    const createdAt = Date.now()
    const name = "Bambang"
    const [body, setBody] = useState()
    const baseUrl = "http://localhost:3001"

    const handleCreate = () => {
        const data = {
            postId,
            id: createdAt,
            name,
            body,
            createdAt
        }

        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }

        fetch(`${baseUrl}/comments`, options)
            .then(response => response.json())
            .then(() => {
                setBody("")
                getPosts()
            })
    }

    return (
        <div className="space-x-2 flex">
            <input
                value={body}
                type="text"
                class="block form-control block w-full px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Comment this post..."
                onChange={event => setBody(event.target.value)}
            />
            <Button
                className="bg-blue-600"
                onClick={handleCreate}>
                Comment
            </Button>
        </div>
    )
}

export default AddComment