import { User } from '../../types/UserTypes'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'

type Props = {
    users: Array<User>,
    handleCloseContacts: () => void,
    showContacts: boolean
}

export const NewMessage: React.FC<Props> = ({ users, handleCloseContacts, showContacts }) => {


    return (
        <>
            <Offcanvas show={showContacts} onHide={handleCloseContacts}>
                <Offcanvas.Header closeButton closeVariant='white'>
                    <Offcanvas.Title>Select a contact to start a chat with:</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {
                        users.map((user) => {
                            return <p key={user._id}>{user.name}</p>
                        })
                    }
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}