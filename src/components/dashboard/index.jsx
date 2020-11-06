import React from 'react'

export default function Dashboard({match}) {
    return (
        <div>
            <h1>Welcome, {match.params.username}</h1>
            {console.log(match)}
        </div>
    )
}
