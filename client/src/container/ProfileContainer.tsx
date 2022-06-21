import React, { useState, useCallback } from 'react'

import { Profile } from '../components/Offcanvas/Profile'

import { User } from '../types/UserTypes'

import { deleteUser } from '../services/user'

type Props = {
  user: User,
  logOut: () => void,
  handleCloseProfile: () => void,
  showProfile: boolean
}

export const ProfileContainer: React.FC<Props> = (props) => {

  const [showDelete, setShowDelete] = useState(false)



  const setDeleteReference = useCallback((node) => {
    if (node) {
      node.scrollIntoView({behavior: 'smooth'})
    }else{
      setShowDelete(false)
    }
  },
  [])




  const setShowDeleteAccount = (showDelete: boolean) => {
    setShowDelete(showDelete)
  }



  const deleteAccount = () => {
    async function deleteAsync() {
      try {
        const data = await deleteUser(props.user._id)
        if (!data) return

        const { error, body } = data

        if (error) {
          return
        }
        return body
      } catch (e) {
        console.error(e)
      }
    }

    deleteAsync()
    props.logOut()
  }

  return (
    <>
      <Profile {...props} deleteAccount={deleteAccount} showDeleteAccount={showDelete} setShowDelete={setShowDeleteAccount} reference={setDeleteReference}/>
    </>
  )
}