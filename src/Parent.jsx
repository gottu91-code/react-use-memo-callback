import { useState, memo, useCallback, createContext } from "react"
import { Child1 } from "./Child1";
import { Child4 } from "./Child4";

export const IsAdminContext = createContext(false); // valueが渡されなかったら引数の値になる

export const Parent = memo(() => {
    console.log('Parentです---------------------------');

    const [count, setCount] = useState(0);
    const [isAdmin, setIsAdmin] = useState(true);

    const reset = useCallback(() => {
        setCount(0);
    }, []);

    const countUpDouble = useCallback(() => {
        setCount(prevCount => prevCount * 2);
    }, []);

    return (
        <>
            <IsAdminContext.Provider value={isAdmin}>
                <p>Parentです</p>
                <p>{count} <button onClick={() => {setCount(prev => prev + 1)}}>カウントアップ</button></p>
                <Child1 reset={reset} countUpDouble={countUpDouble} />
                <Child4 />
            </IsAdminContext.Provider>
        </>
    )
})