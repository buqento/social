import Item from "../components/Cards"
import useGetdata from "../hooks/useFetch"

const Users = () => {

    const [users] = useGetdata(`http://localhost:3001/users`)

    const handleRender = (item, index) => (
        <div key={index} className="w-full divide-y">
            <Item item={item} />
        </div>
    )

    return (
        <>
            {
                users?.map(handleRender)
            }
        </>
    )
}

export default Users