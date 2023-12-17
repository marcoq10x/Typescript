import { NoteService } from "./service/noteService";
import { Note } from "../model/note";  // Import statement for Note
import * as readline from "readline";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const noteService = new NoteService();

function mainMenu() {
    rl.question("Choose an option (create/list/find/edit/delete/exit): ", function(option) {
        switch (option) {
            case "create":
                createNote();
                break;
            case "list":
                listNotes();
                break;
            case "find":
                findNote();
                break;
            case "edit":
                editNote();
                break;
            case "delete":
                deleteNote();
                break;
            case "exit":
                rl.close();
                break;
            default:
                console.log("Invalid option");
                mainMenu();
        }
    });
}

function createNote() {
    rl.question("Enter note title: ", function(title) {
        rl.question("Enter note content: ", function(content) {
            rl.question("Enter note category: ", function(category) {
                const note = noteService.createNote(title, content, category);
                console.log("Note created:", note);
                mainMenu();
            });
        });
    });
}

function listNotes() {
    const notes = noteService.listNotes();
    if (notes.length === 0) {
        console.log("No notes available.");
    } else {
        console.log("Notes List:");
        notes.forEach((note: Note) => console.log(`ID: ${note.id}, Title: ${note.title}, Category: ${note.category}`));

    }
    mainMenu();
}

function findNote() {
    rl.question("Enter note title to find: ", function(title) {
        const note = noteService.findNoteByTitle(title);
        if (note) {
            console.log("Found Note:", note);
        } else {
            console.log("Note not found.");
        }
        mainMenu();
    });
}

function editNote() {
    rl.question("Enter the ID of the note to edit: ", function(idStr) {
        const id = parseInt(idStr);
        if (isNaN(id)) {
            console.log("Invalid ID");
            mainMenu();
            return;
        }

        rl.question("Enter new title (leave blank for no change): ", function(newTitle) {
            rl.question("Enter new content (leave blank for no change): ", function(newContent) {
                try {
                    const updatedNote = noteService.editNote(id, newTitle || undefined, newContent || undefined);
                    console.log("Updated Note:", updatedNote);
                } catch (error) {
                    if (error instanceof Error) {
                        console.error(error.message);
                    } else {
                        console.error("An unknown error occurred");
                    }
                }
                mainMenu();
            });
        });
    });
}


function deleteNote() {
    rl.question("Enter the ID of the note to delete: ", function(idStr) {
        const id = parseInt(idStr);
        if (isNaN(id)) {
            console.log("Invalid ID");
            mainMenu();
            return;
        }

        try {
            noteService.deleteNote(id);
            console.log(`Note with ID ${id} deleted.`);
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            } else {
                console.error("An unknown error occurred");
            }
        }
        mainMenu();
    });
}


rl.on("close", function() {
    console.log("Exiting note application");
    process.exit(0);
});

mainMenu();
