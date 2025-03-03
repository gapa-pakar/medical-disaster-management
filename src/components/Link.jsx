import React, { useState } from 'react'

export default function Link({ className, href, children, setCountPages }) {

    const onClick = (event) => {
        // prevent full page reload
        // event.preventDefault();

        // update url
        window.history.pushState({}, "", href);

        // communicate to Routes that URL has changed
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);

        // pages count reset
        setCountPages(0);
    }

    return (
        <a className={className} href={href} onClick={onClick}>
            {children}
        </a>
    )
}
