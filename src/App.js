import React, {useEffect, useMemo, useState} from 'react'

export const App = () => {
  const [count01, setCount01] = useState(0)
  const [count02, setCount02] = useState(4)

  const result01 = () => setCount01(count01 + 1)
  const result02 = () => setCount02(count02 + 1)

  useEffect(() => {
    console.log('useEffectだよ,レンダリングが終わった後に実行しているよ')
  }, [count02]);

  const square = useMemo(() => {
    // 重い処理
    let i = 0
    while (i < 800000000) i++
    console.log('useMemoだよ')
    return count02 * count02
  }, [count02]);

  console.log('return文の直前だよ');

  return (
    <>
      <div>result01: {count01}</div>
      <div>result02: {count02}</div>
      {/* useMemoを使用しない場合 */}
      {/* <div>square: {square()}</div> */}
      {/* useMemoを使用する場合 */}
      <div>square: {square}</div>
      <button onClick={result01}>increment</button>
      <button onClick={result02}>increment</button>
    </>
  )
}
