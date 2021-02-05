import { useRef, useEffect, useCallback } from 'react';

const useScrollCount = (
    end = 0,
    start = 0,
    duration = 3000,
    delay = 0,
) => {
    const element = useRef<HTMLDivElement | any>();
    const observer: any = useRef<IntersectionObserver | null>(null);
    const stepTime = Math.abs(Math.floor(duration / (end - start)));

    const onScroll = useCallback(([entry]) => {
        const { current } = element;
        if (current && entry.isIntersecting) {
            let currentNumber = start;
            const counter = setInterval(() => {
                currentNumber += 1;
                current.innerHTML = currentNumber.toString();
                if (currentNumber === end) {
                    clearInterval(counter);
                    observer.current.disconnect(element.current)
                }
            }, stepTime)
        }
    }, [end, start, stepTime, element],
    )

    useEffect(() => {
        if (element.current) {
            observer.current = new IntersectionObserver(
                onScroll, { threshold: 0.7 });
            observer.current.observe(element.current);
        }
        if (observer && observer.disconnect) {
            return () => observer.disconnect();
        }
        return () => null;
    }, [onScroll])

    return {
        ref: element
    }
}

export default useScrollCount