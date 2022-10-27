import { useState } from "react"
import Item, { Profile } from "../components/Cards"
import Layout from "../components/Layout"
import Posts from "../components/Posts"
import useFetch from "../hooks/useFetch"

const Users = () => {

    const [users] = useFetch(`http://localhost:3001/users`)

    const [selected, setSelected] = useState()

    const handleRender = (item, index) => (
        <div
            key={index}
            onClick={() => setSelected(item)}
            className="w-full divide-y">
            <Item item={item} />
        </div>
    )

    return (
        <Layout>
            <div className="grid grid-cols-2 gap-4">
                <div className="border">
                    {users?.map(handleRender)}
                </div>
                <div className="border mx-auto">
                    {
                        selected &&
                        <Profile item={selected} />
                    }

                    {
                        selected &&
                        <Posts userId={selected.id} />
                    }
                </div>
            </div>
        </Layout>
    )
}

export default Users