import { useState, useEffect } from 'react'

import { User } from '../types/UserTypes'
import { getUsers } from '../services/user'

import { NewMessage } from '../components/Offcanvas'

type Props = {
    user: User,
    handleCloseContacts: () => void,
    showContacts: boolean
}

export const NewMessageContainer: React.FC<Props> = ({ user, handleCloseContacts, showContacts }) => {

    const [users, setUsers] = useState<User[]>([])
    const [error, setError] = useState('')

    useEffect(() => {

        // Calls fetching user function and sets its value on 'users', if not user, sets loading/error
        async function getUsersAsync() {
            try {
                const data = await getUsers()
                if (!data) return

                const { error, body } = data

                if (error) {
                    setError(error)
                    return
                }
                const filtered = body.filter((element) => {
                    return element._id != user._id
                })

                setUsers(filtered)
            } catch (e) {
                setError('Error fetching users')
            }
        }

        getUsersAsync()
    }, []);



    return (
        <>
            <NewMessage users={users} handleCloseContacts={handleCloseContacts} showContacts={showContacts} />
        </>
    )
}