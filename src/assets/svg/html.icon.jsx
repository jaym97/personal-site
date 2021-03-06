import React from 'react'

const HtmlIcon = ({ id, role, title, focusable, clickHandler }) => {
    return (
        <svg
            id={id}
            role={role}
            tabIndex={focusable ? 0 : null}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            onClick={clickHandler}
        >
            <title>{title}</title>
            <path fill="#ff5722" d="M32 0l40.8 460.8L256 512l183.136-51.168L480 0z"/>
            <path fill="#fafafa" d="M391.52 150.688H176.8l5.12 57.888H386.4l-15.392 173.568L256 414.24l-.096.032-114.944-32.128-8.032-90.784h56.32l4.192 47.104 62.496 16.992.064-.032 62.56-16.992 6.528-73.312H130.624L115.456 94.208H396.512z"/>
        </svg>
    )
}

export default HtmlIcon
