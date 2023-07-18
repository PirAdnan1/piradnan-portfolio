import React from 'react'

function Container({children}) {
  return (
    <div className='max-w-[1400px] mx-auto h-full'>{children}</div>
  )
}

export default Container