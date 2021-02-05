import { useRef, useEffect, useCallback } from 'react'

const useScrollFadeIn = (
    direction = 'up',
    duration = 1,
    delay = 0
) => {
    const element = useRef<HTMLDivElement | null | undefined | any>();

    const handleDirection = (direction: string) => {
        switch (direction) {
            case 'up':
                return 'translate3d(0, 50%, 0)';
            case 'down':
                return 'translate3d(0, -50%, 0)';
            case 'left':
                return 'translate3d(50%, 0, 0)';
            case 'right':
                return 'translate3d(-50%, 0, 0)';
            default:
                return;
        }
    }

    const onScroll = useCallback(([entry]) => {
        const { current } = element;
        if (entry.isIntersection && current) {
            current.style.transitionProperty = 'all';
            current.style.transitionDuration = `${duration}s`;
            current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
            current.style.transitionDelay = `${delay}s`;
            current.style.opacity = '1';
            current.style.transform = 'translate3d(0, 0, 0)';
        }
    }, [delay, duration])

    useEffect(() => {
        let observer: any;

        if (element.current) {
            observer = new IntersectionObserver(onScroll, {
                threshold: 0.7
            });
            observer.observe(element.current);
        }
        if (observer && observer.disconnect) {
            return () => observer.disconnect();
        }
        return () => null
        // return () => observer && observer.disconnect()
    }, [onScroll])

    return {
        ref: element,
        style: { opacity: '1', transfrom: handleDirection(direction) }
    }
}

export default useScrollFadeIn