import React from 'react'
import { forwardRef } from 'react'

const Pinitem = forwardRef(({changehandler,onbackspacehandler},ref) => {

    const handelkeyup=(e)=>{
        if(e.keyCode===8){
            onbackspacehandler(e)
        }
        else{
            changehandler(e)
        }
    }
  return (
    <div>
        <input ref={ref} maxLength={1} onKeyUp={handelkeyup} />
    </div>
  )
})


export default Pinitem