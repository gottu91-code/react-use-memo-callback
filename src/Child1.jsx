import { memo } from "react";

import { Child2 } from "./Child2";
import { Child3 } from "./Child3";

export const Child1 = memo((props) => {
    console.log('Child1です');

    const { reset, countUpDouble } = props;

    return (
        <>
            <p>Child1です</p>
            <button onClick={reset}>リセット</button>
            <button onClick={countUpDouble}>2倍にする</button>
            <Child2 />
            <Child3 />
        </>
    )
})