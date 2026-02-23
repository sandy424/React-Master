import { useEffect, useState } from "react"

function Timer() {
    const [time, setTime] = useState<number>(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);

        return() => {
            clearInterval(timer);
        };
    }, []);

    return <div>카운트: {time}</div>
}

export default function TimeAttack() {
    return(
        <div>
            <h2>타임어택</h2>
            <Timer />
        </div>
    )
}