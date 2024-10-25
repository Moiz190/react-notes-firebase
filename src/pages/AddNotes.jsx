import React, { useState } from "react";
export const AddNotes = ({ handleAdd }) => {
  const [note, setNote] = useState("");
  const [idCounter, setIdCounter] = useState(0);
  const handleAddNote = () => {
    setIdCounter((prev) => prev + 1);
    handleAdd({ id: idCounter, note });
  };
  return (
    <>
      <div className="bg-slate-200 p-2 rounded-sm">
        <div className="flex flex-col gap-2 mb-2">
          <label htmlFor="note">Add Note</label>{" "}
          <input
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="p-2 rounded-md"
            id="note"
            type="text"
            placeholder="Add your note"
          />
        </div>
        <div className="text-center">
          <button
            className="py-1 px-2 bg-white rounded-md"
            onClick={handleAddNote}
          >
            Add Note
          </button>
        </div>
      </div>
    </>
  );
};
