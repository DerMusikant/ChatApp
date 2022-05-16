import {useContext} from 'react'
import { Context } from '../../Context'

import { Header } from './Header'


export const HomeContainer: React.FC = () => {

    const context = useContext(Context)

    return (
        <>
            <div style={{width: '30%'}}>
                <Header user={context.user} logOut={context.removeAuth} />
            </div>
            
        </>
    )
}