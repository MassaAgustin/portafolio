import React from 'react'
import { useLocation } from 'react-router-dom'

export const NotFound = () => {

    const url = useLocation().pathname;

    return (
        <div className="notFound">
            <h3>{url}</h3>
            <h2>Sorry the seccion you want was removed or deleted</h2>
        </div>
    )
}
