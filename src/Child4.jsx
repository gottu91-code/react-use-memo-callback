import { memo } from "react";

export const Child4 = memo(() => {
    console.log('Child4です');

    return (
        <p>Child4です</p>
    )
})