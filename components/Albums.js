import useFetch from "../hooks/useFetch"
import { AlbumCard } from "./Cards"

const Albums = ({ userId }) => {

    const [albums] = useFetch(`http://localhost:3001/albums?userId=${userId}`)

    const renderAlbums = (item, index) => {
        return (
            <div key={index}>
                <AlbumCard item={item} />
            </div>
        )
    }

    return (
        <>
            {albums?.map(renderAlbums)}
        </>
    )
}

export default Albums