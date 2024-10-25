import React from 'react'
import { useAuth } from '../context/authContext'

export const YourNotes = ({selectedUserNotes}) => {
  const {isUserLoggedIn} = useAuth()
  return (
    <>
    <div className='bg-slate-200 p-2 rounded-sm'>
        <div className='text-center'><span>Your Notes {isUserLoggedIn} {selectedUserNotes.length}</span></div>
        {
            (selectedUserNotes.length > 0) ? selectedUserNotes.map(note=>(
                <div key={note.id} className='flex justify-between gap-2'><div>{note.id}</div><div>{note.note}</div> </div>
            )) :<div className='text-center'><span>There's nothing to show</span></div>
        }
    </div>
    </>
  )
}
