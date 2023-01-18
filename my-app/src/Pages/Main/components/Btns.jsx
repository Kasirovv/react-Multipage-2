import React from 'react'

function Btns(props) {
  return (
    <button className='px-8 py-2 bg-[#ff3d00] text-white rounded'>
        {props.title}
    </button>
  )
}

export default Btns
