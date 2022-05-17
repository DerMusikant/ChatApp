import { useContext, useEffect, useState } from 'react'
import { Context } from '../Context'

import Home from '../components/Home/Home'


export const HomeContainer: React.FC = () => {
    
    const context = useContext(Context)

    return (
        <>
            <Home user={context.user} logOut={context.removeAuth} />
        </>
    )
}