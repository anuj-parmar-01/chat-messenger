import React from "react"

type Proptype = {
    message : string,
    owner : boolean
}

export default function Message( {message , owner} : Proptype) {
    return (
    <div className={`inline-block max-w-1/2 bg-white text-gray-500 p-2 self-start
    whitespace-pre-line rounded-md ${owner ?  "self-end" : ""}`}
        >
            {`${message}`}
        </div>
    )
}