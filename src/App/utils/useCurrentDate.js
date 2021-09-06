import { useEffect, useState } from "react";

export const useCurrentDate = () => {

    const [appDate, setAppDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setAppDate(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return appDate;
}