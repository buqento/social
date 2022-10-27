import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "../components/Common"
import Layout from "../components/Layout";

const CreatePost = () => {

    const router = useRouter()

    const { id } = router.query

    const pId = parseInt(id)

    const [title, setTitle] = useState()

    useEffect(() => {
        fetch(`http://localhost:3001/posts/${pId}`)
            .then((response) => response.json())
            .then(data => setTitle(data.title))
    }, [])

    const handleUpdate = () => {
        const data = { userId: 1, id: pId, title }
        const url = `http://localhost:3001/posts/${pId}`
        const options = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }
        fetch(url, options)
            .then(response => response.json())
            .then(() => router.push("/"))
    }

    return (
        <Layout>
            <div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label inline-block mb-2 text-gray-700"
                    >Update your post</label>
                    <textarea
                        value={title}
                        type="text"
                        className="block form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Yout post here..." onChange={event => setTitle(event.target.value)}
                    />
                </div>
                <Button onClick={handleUpdate}>
                    Update
                </Button>
            </div>
        </Layout>
    )
}

export default CreatePost