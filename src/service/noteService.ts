import { Note } from "../model/note";

export class NoteService {
    private notes: Note[] = [];
    private nextId: number = 1;

    createNote(title: string, content: string, category: string): Note {
        const newNote = new Note(this.nextId++, title, content, category);
        this.notes.push(newNote);
        return newNote;
    }

    editNote(id: number, title?: string, content?: string): Note {
        const note = this.notes.find(n => n.id === id);
        if (!note) {
            throw new Error("Note not found");
        }
        note.title = title ?? note.title;
        note.content = content ?? note.content;
        return note;
    }

    deleteNote(id: number): void {
        const noteIndex = this.notes.findIndex(n => n.id === id);
        if (noteIndex === -1) {
            throw new Error("Note not found");
        }
        this.notes.splice(noteIndex, 1);
    }

    // Add a method to list notes by category
listNotesByCategory(category: string): Note[] {
    return this.notes.filter(note => note.category === category);
}

listNotes(): Note[] {
    return this.notes;
}


findNoteById(id: number): Note | undefined {
    const note = this.notes.find(n => n.id === id);
    if (!note) {
        throw new Error(`Note with ID ${id} not found`);
    }
    return note;
}

findNoteByTitle(title: string): Note | undefined {
    return this.notes.find(n => n.title === title);
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

    // Asynchronous method to simulate fetching notes
    async fetchNotes(): Promise<Note[]> {
        return new Promise((resolve) => {
            setTimeout(() => resolve(this.notes), 1000); // Simulating async operation
        });
    }
}
