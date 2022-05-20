import { User } from '../../types/UserTypes'

import { Contact } from './Contact'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'


type Props = {
    users: Array<User>,
    handleCloseContacts: () => void,
    showContacts: boolean,
    selectChat: (chatInfo: string) => void
}

export const NewMessage: React.FC<Props> = ({ users, handleCloseContacts, showContacts, selectChat }) => {

    const handleClick = (userID: string) => {
        console.log(userID)
    }


    return (
        <>
            <Offcanvas show={showContacts} onHide={handleCloseContacts}>
                <Offcanvas.Header closeButton closeVariant='white'>
                    <Offcanvas.Title>Select a contact to start a chat with:</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='contactsList'>
                    {
                        users.map((user) => {
                            return (
                                <Contact key={user._id} user={user} handleCloseContacts={handleCloseContacts} selectChat={selectChat}/>
                            )
                        })
                    }
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}