import React from "react";
import "./AddNote.css";

const AddNote = ({ title, setTitle, content, setContent, onAddNote }) => {
	return (
		<div className="add-note-container">
			<input
				type="text"
				placeholder="Title"
				className="note-input title-input"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<textarea
				placeholder="Content"
				className="note-input content-input"
				value={content}
				onChange={(e) => setContent(e.target.value)}
			></textarea>
			<button className="note-button add-button" onClick={onAddNote}>
				Add Note
			</button>
		</div>
	);
};

export default AddNote;
