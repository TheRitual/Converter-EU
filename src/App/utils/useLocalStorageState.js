import { useEffect, useState } from "react";

export const useLocalStorageState = (keyName, initialValue) => {
    const getInitialState = () => {
        const localStorageState = localStorage.getItem(keyName);
        if (localStorageState === null) {
            return initialValue;
        }
        return JSON.parse(localStorageState);
    }

    const [state, setState] = useState(getInitialState);

    useEffect(() => {
        localStorage.setItem(keyName, JSON.stringify(state));
        // eslint-disable-next-line
    }, [state]);
    return [state, setState];
}