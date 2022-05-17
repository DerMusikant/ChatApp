import React from "react"

export const LeftSide: React.FC<{children: React.ReactNode}> = ( {children} ) => (
        <>
            <div className='home--left-side'>
                {children}
            </div>
        </>
  )
