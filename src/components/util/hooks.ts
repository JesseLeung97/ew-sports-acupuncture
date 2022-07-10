import { useEffect, useState, useRef, StateUpdater } from "preact/hooks";
import { MutableRef,  } from "preact/hooks";

const useInitialize = (initializeFunction: () => any) => useEffect(initializeFunction, []);

const useReferredState = <T>(initialValue: T): [MutableRef<T>, (value: T) => void] => {
    const [state, setState] = useState<T>(initialValue);
    const reference = useRef<T>(state);

    const setReferredState = (value: T) => {
        reference.current = value;
        setState(value);
    }

    return [reference, setReferredState];
}

export {
    useInitialize,
    useReferredState
}