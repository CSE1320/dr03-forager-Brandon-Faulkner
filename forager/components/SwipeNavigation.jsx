'use client'
import { useSwipeable } from 'react-swipeable';
import { useRouter } from 'next/navigation';

export default function SwipeNavigation({ children }) {
    const router = useRouter();
    
    const routes = ['/comparison', '/mushroom', '/dashboard', '/photosearch'];
    
    const handlers = useSwipeable({
        onSwipedLeft: () => {
            const currentPath = window.location.pathname;
            const currentIndex = routes.indexOf(currentPath);
            if (currentIndex < routes.length - 1) {
                router.push(routes[currentIndex + 1]);
            }
        },
        onSwipedRight: () => {
            const currentPath = window.location.pathname;
            const currentIndex = routes.indexOf(currentPath);
            if (currentIndex > 0) {
                router.push(routes[currentIndex - 1]);
            }
        },
        preventDefaultTouchmoveEvent: true,
        trackMouse: false,
        delta: 50,
        swipeDuration: 500
    });

    return (
        <div {...handlers} className="h-screen w-full">
            {children}
        </div>
    );
}