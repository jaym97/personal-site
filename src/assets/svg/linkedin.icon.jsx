import React from 'react'

const LinkedInIcon = ({ id, role, title, focusable, clickHandler }) => {
    return (
        <svg
            id={id}
            role={role}
            aria-describedby={title}
            tabIndex={focusable ? 0 : null}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={clickHandler}
        >
            <title>{title}</title>
            <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909C5.763 1.291 4.472 0 2.882 0z"/>
        </svg>
    )
}

export default LinkedInIcon
