import { useState, useEffect } from 'react';

export const useDetectOutsideClick = (el, initialState) => {
    const [isActive, setIsActive] = useState(initialState);

    useEffect(() => {
        const pageClickEvent = (e) => {
        // If the active element exists and is clicked outside of
        if (el.current !== null && !el.current.contains(e.target)) {
            setIsActive(!isActive);
        }
        };

        // If the item is active (ie open) then listen for clicks
        if (isActive) {
        window.addEventListener('click', pageClickEvent);
        }

        return [isActive, setIsActive];

    }, [isActive, el]);
}