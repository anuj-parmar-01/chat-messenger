import React from "react"

type Proptype = {
    message : string
}

export default function Message( {message} : Proptype) {
    return (
        <div className="inline-block max-w-1/2 bg-white text-gray-500 p-3">
            {message}
        </div>
    )
}