import { useEffect, useState } from "react"

const useFetch = (url) => {
    try {
        const [data, setData] = useState(null)
        useEffect(() => {
            fetch(url)
                .then((res) => res.json())
                .then((data) => setData(data))
        }, [url])
        return [data]
    } catch (error) {
        console.warn(error);
    }
}

export default useFetch