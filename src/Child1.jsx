import { memo } from "react";

import { Child2 } from "./Child2";
import { Child3 } from "./Child3";

export const Child1 = memo(() => {
    console.log('Child1です');

    return (
        <>
            <p>Child1です</p>
            <Child2 />
            <Child3 />
        </>
    )
})