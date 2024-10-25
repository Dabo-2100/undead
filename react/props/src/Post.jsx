import React from 'react'

export default function Post(props) {
    console.log(props);
    return (
        <div className={`col-12 ${props.postColor}`}>
            <h1>{props.postContent}</h1>
        </div>
    )
}
