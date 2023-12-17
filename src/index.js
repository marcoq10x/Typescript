"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const noteService_1 = require("./service/noteService");
const noteService = new noteService_1.NoteService();
// Creating notes
const note1 = noteService.createNote("First Note", "This is the content of the first note.");
const note2 = noteService.createNote("Second Note", "Content of the second note.");
console.log("Created Notes:", note1, note2);
// Editing a note
noteService.editNote(note1.id, "Updated First Note", "Updated content of the first note.");
console.log("Edited Note:", note1);
// Deleting a note
noteService.deleteNote(note2.id);
console.log("Note Deleted, ID:", note2.id);
// Listing all notes
console.log("All Notes:", noteService.listNotes());
// Finding a note by title
const foundNote = noteService.findNoteByTitle("Updated First Note");
console.log("Found Note:", foundNote);
// Fetching notes asynchronously
noteService.fetchNotes().then(fetchedNotes => {
    console.log("Fetched Notes:", fetchedNotes);
}).catch(error => {
    console.error("Error fetching notes:", error);
});
