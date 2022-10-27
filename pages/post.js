import { useRouter } from "next/router";
import { useState } from "react";
import Button from "../components/Common"
import Layout from "../components/Layout";
import useFetch from "../hooks/useFetch";

const CreatePost = () => {

    const router = useRouter()

    const [posts] = useFetch(`http://localhost:3001/posts`)
    const userId = 1
    const id = posts?.length + 1
    const [title, setTitle] = useState()

    const handleCreate = () => {
        const data = { userId, id, title }
        const url = "http://localhost:3001/posts"
        const options = {
            method: "POST",
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
                <div class="">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label inline-block mb-2 text-gray-700"
                        >Create your post</label>
                        <textarea
                            type="text"
                            class="block form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Yout post here..." onChange={event => setTitle(event.target.value)}
                        />
                    </div>
                </div>
                <Button onClick={handleCreate}>Create</Button>
            </div>
        </Layout>
    )
}

export default CreatePost