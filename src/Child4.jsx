import { memo, useContext } from "react";
import { IsAdminContext } from "./Parent";

export const Child4 = memo(() => {
    console.log('Child4です');

    const isAdmin = useContext(IsAdminContext);

    return (
        <>
            <p>Child4です</p>
            <p>
                {isAdmin ? '管理者です' : 'ユーザーです'}
            </p>
        </>
    )
})