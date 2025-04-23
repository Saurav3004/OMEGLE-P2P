import { useState } from "react"
import { Link } from "react-router-dom"

export default function Landing(){

    const [name,setName] = useState("")
    return <div>
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <Link to={`/room?name=${name}`}>Join room</Link>
        </div>
    </div>
}