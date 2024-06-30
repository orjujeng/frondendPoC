import React,{Fragment} from 'react'

export default function FunComp() {

    function add(){
        setCount(count+1)
    }
    const [count,setCount] = React.useState(0)

    React.useEffect(()=>{
       let ts = setInterval(()=>{
            setCount(count=>count+1)
        },1000)

        return ()=>{
            //willdestory
            clearInterval(ts);
        }
    },[])//didupdate。didmount

    const myRef = React.useRef()
  return (
    <Fragment>
      <h1>{count} useState hook</h1>
      <button onClick={add}>add 1</button>
      {/* <input type="text" ref={myRef}/> */}
      {/* <div>{myRef.current.value} </div> */}
    </Fragment>
  )
}
