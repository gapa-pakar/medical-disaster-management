import React, { useState } from 'react'

export default function Link({ className, href, children, setCountPages }) {

    const onClick = (event) => {
        // prevent full page reload
        if (href !== '/') {
            event.preventDefault();
        }

        // update url
        window.history.pushState({}, "", href);

        // communicate to Routes that URL has changed
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);

        if(setCountPages) {
            setCountPages(0)
        }
    }

    return (
        <a className={className} href={href} onClick={onClick}>
            {children}
        </a>
    )
}
