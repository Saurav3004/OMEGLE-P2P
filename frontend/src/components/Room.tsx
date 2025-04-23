import {  useSearchParams } from "react-router-dom"

export default function Room(){
    const [getUrl] = useSearchParams()
    const name = getUrl.get("name")
    return <div>
        hi {name}
    </div>
}