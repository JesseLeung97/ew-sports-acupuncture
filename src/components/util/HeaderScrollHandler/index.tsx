import { useInitialize, useReferredState } from "../hooks";
import { FunctionalComponent } from "preact";
import { useEffect } from "preact/hooks";

export type TScrollDirection = "up" | "down";

interface HeaderScrollHandlerProps {
    initial: TScrollDirection,
    toggleDirection: () => void
}

const HeaderScrollHandler: FunctionalComponent<HeaderScrollHandlerProps> = ({ initial, toggleDirection, children}) => {
    const [direction, setDirection] = useReferredState<TScrollDirection>(initial);
    const [prevScrollY, setPrevScrollY] = useReferredState<number>(typeof window !== "undefined" ? window.scrollY : 0);

    function updateDirection(newDirection: TScrollDirection) {
        if(newDirection === direction.current) return;
        
        setDirection(newDirection);
        toggleDirection();
    }

    function checkDirection() {
        const scrollY = window.scrollY;
        console.log(prevScrollY.current, scrollY);
        if(scrollY < prevScrollY.current) {
            updateDirection("up");
        }
        if(scrollY > prevScrollY.current) {
            updateDirection("down");
        }
        setPrevScrollY(scrollY);
    }

    useInitialize(() => {
        setPrevScrollY(typeof window !== "undefined" ? window.scrollY : 0);
        window.removeEventListener("scroll", checkDirection);
        window.addEventListener("scroll", checkDirection, { passive: true });
        return () => window.removeEventListener("scroll", checkDirection);
    });

    return (
        <>{ children }</>
    );
}

export {
    HeaderScrollHandler
}