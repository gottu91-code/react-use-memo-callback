import { useState, memo } from "react"
import { Child1 } from "./Child1";
import { Child4 } from "./Child4";

export const Parent = memo(() => {
    console.log('Parentです---------------------------');

    const [count, setCount] = useState(0);

    return (
        <>
            <p>Parentです</p>
            <p>{count} <button onClick={() => {setCount(prev => prev + 1)}}>カウントアップ</button></p>
            <Child1 />
            <Child4 />
        </>
    )
})