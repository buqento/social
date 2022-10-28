import { useState, useCallback } from "react"
import useFetch from "../hooks/useFetch"
import { AlbumCard } from "./Cards"
import ImageViewer from 'react-simple-image-viewer';

const Albums = ({ userId }) => {

    const baseUrl = `http://localhost:3001`

    const [albums] = useFetch(`${baseUrl}/albums?userId=${userId}`)

    const [photos, setPhotos] = useState()

    const [images, setImages] = useState()

    const [currentImage, setCurrentImage] = useState(0);

    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    const pushImages = (items) => {
        let images = []
        items.map((item) => {
            images.push(item.thumbnailUrl)
        })
        setImages(images)
    }

    const getDetail = album => {
        fetch(`${baseUrl}/photos?albumId=${album.id}`)
            .then(response => response.json())
            .then(data => {
                setPhotos(data)
                pushImages(data)
            })
    }

    const renderAlbums = (item, index) => {
        return (
            <div key={index} className="space-y-6">
                <AlbumCard item={item} getDetail={getDetail} />
                {
                    photos &&

                    <div>
                        {photos.map((src, index) => (
                            <img
                                src={src.thumbnailUrl}
                                onClick={() => openImageViewer(index)}
                                width="300"
                                key={index}
                                style={{ margin: '2px' }}
                                alt=""
                            />
                        ))}

                        {isViewerOpen && (
                            <ImageViewer
                                src={images}
                                currentIndex={currentImage}
                                disableScroll={false}
                                closeOnClickOutside={true}
                                onClose={closeImageViewer}
                            />
                        )}
                    </div>
                }
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