import {User} from '../../types/UserTypes'

import { HeaderContainer as Header } from '../../container/HeaderContainer'
import { LeftSide } from './LeftSide'


const Home: React.FC<{user: User, logOut: () => void}> = ({user, logOut}) => {

    return (
        <>
            <LeftSide>
                <Header user={user} logOut={logOut} />
            </LeftSide>

        </>
    )
}

export default Home