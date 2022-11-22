import { memo } from "react";

export const Child3 = memo(() => {
    console.log('Child3です');

    return (
        <p>Child3です</p>
    )
})