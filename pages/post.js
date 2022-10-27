import { useState } from "react";
import Button from "../components/Common"
import Layout from "../components/Layout";
import useFetch from "../hooks/useFetch";

const CreatePost = () => {

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
            .then(data => { console.log(data); })
    }

    return (
        <Layout>
            <input
                type={`text`}
                placeholder={`Title`}
                onChange={event => setTitle(event.target.value)} />
            <Button onClick={handleCreate}>Create</Button>
        </Layout>
    )
}

export default CreatePost