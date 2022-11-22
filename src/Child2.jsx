import { memo } from "react";

export const Child2 = memo(() => {
    console.log('Child2です');

    return (
        <p>Child2です</p>
    )
})