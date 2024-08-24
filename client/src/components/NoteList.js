import React from "react";
import "./NoteList.css";

const NoteList = ({ notes, onEditNote, onDeleteNote }) => {
	return (
		<div className="note-list">
			{notes.map((note) => (
				<div className="note-item" key={note._id}>
					<input
						type="text"
						value={note.title}
						className="note-input title-input"
						onChange={(e) =>
							onEditNote(note._id, e.target.value, note.content)
						}
					/>
					<textarea
						value={note.content}
						className="note-input content-input"
						onChange={(e) =>
							onEditNote(note._id, note.title, e.target.value)
						}
					></textarea>
					<div className="note-actions">
						<button
							className="note-button edit-button"
							onClick={() => onEditNote(note._id, note.title, note.content)}
						>
							Edit
						</button>
						<button
							className="note-button delete"
							onClick={() => onDeleteNote(note._id)}
						>
							Delete
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default NoteList;
