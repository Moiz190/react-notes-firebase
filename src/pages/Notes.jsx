import React, { useState } from 'react'
import { AddNotes } from './AddNotes'
import { YourNotes } from './YourNotes'
export const Notes = () => {
    const [userNotes,setUserNotes] = useState([])
    const handleAddNote = (newNote)=>{
        setUserNotes(prevVal=>([...prevVal,newNote]))
        setTimeout(()=>console.log(userNotes),3000)
    }
    return (
        <div className='h-full flex flex-col items-center justify-center'>
            <div className='bg-slate-300 border rounded-md min-w-[800px] max-w-[800px] p-2'>
                <div className='text-center mb-4'><span>Add Notes
                </span></div>
                <div className='mb-2'>
                <AddNotes handleAdd={handleAddNote} />
                </div>
                <div>
                    <YourNotes selectedUserNotes={userNotes} />
                </div>
            </div>
        </div>
    )
}
