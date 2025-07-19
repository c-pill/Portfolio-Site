import { useEffect } from "react";

export function useHoriScroll(enable: boolean) {
    useEffect(() => {
        if (!enable) return;

        const content = document.getElementById('content');
        const handleHoriScroll = (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                content.scrollLeft += e.deltaY * 5;
            }
        }

        content.addEventListener('wheel', handleHoriScroll);

        return () => content.removeEventListener('wheel', handleHoriScroll);
    });
}