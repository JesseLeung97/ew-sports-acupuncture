import { createContext, FunctionalComponent } from "preact";
import { useContext, useState } from "preact/hooks";
import { useInitialize } from "../hooks";

const SpCheckContext = createContext<boolean>(false);

const useSpCheck = () => {
    return useContext(SpCheckContext);
}

const SpCheck: FunctionalComponent = ({ children }) => {
    const _spCheckWidth = 600;
    const [isSp, setIsSp] = useState<boolean>(typeof window !== "undefined" ? window.innerWidth <= _spCheckWidth : false);

    const updateSpCheck = () => {
        if(typeof window !== "undefined") {
            setIsSp(window.innerWidth <= _spCheckWidth);
        }
    }

    useInitialize(() => {
        if(typeof window !== "undefined") {
            window.addEventListener("resize", updateSpCheck);
        }
        return () => {
            if(typeof window !== undefined) {
                window.removeEventListener("resize", updateSpCheck);
            }
        }
    });

    return (
        <SpCheckContext.Provider value={isSp}>
            {children}
        </SpCheckContext.Provider>
    );
}

export {
    SpCheck,
    useSpCheck
}
