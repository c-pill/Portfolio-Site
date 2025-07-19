import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const media = window.matchMedia(query);
        const mediaHandler = (e) => setMatches(e.matches);
        
        media.addEventListener('change', mediaHandler);
        media.addEventListener('resize', mediaHandler);

        setMatches(window.matchMedia(query).matches);

        return () => {
            media.removeEventListener('change', mediaHandler);
            media.removeEventListener('resize', mediaHandler);
        };

    }, [matches]);

    return matches;
};
