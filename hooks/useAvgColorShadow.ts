import { FastAverageColor, FastAverageColorResource, FastAverageColorResult } from "fast-average-color";
import { useEffect } from "react";

export async function useAvgColorShadow(sourceClassName: string, recipientClassName: string) {
    useEffect(() => {
        const sources = Array.from(document.body.getElementsByClassName(sourceClassName)) as HTMLElement[];
        const recipients = Array.from(document.body.getElementsByClassName(recipientClassName)) as HTMLElement[];
        const fac = new FastAverageColor();
        sources.forEach(async (image, index) => {
            await fac.getColorAsync(image as FastAverageColorResource)
                .then((color: FastAverageColorResult) => {
                    recipients[index].style.boxShadow = `0px 0px 10px 6px ${color.rgba}`;
                });
        });
    }), [];
};
