"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteService = void 0;
const note_1 = require("../model/note");
class NoteService {
    constructor() {
        this.notes = [];
        this.nextId = 1;
    }
    createNote(title, content, category) {
        const newNote = new note_1.Note(this.nextId++, title, content, category);
        this.notes.push(newNote);
        return newNote;
    }
    editNote(id, title, content) {
        const note = this.notes.find(n => n.id === id);
        if (!note) {
            throw new Error("Note not found");
        }
        note.title = title !== null && title !== void 0 ? title : note.title;
        note.content = content !== null && content !== void 0 ? content : note.content;
        return note;
    }
    deleteNote(id) {
        const noteIndex = this.notes.findIndex(n => n.id === id);
        if (noteIndex === -1) {
            throw new Error("Note not found");
        }
        this.notes.splice(noteIndex, 1);
    }
    // Add a method to list notes by category
    listNotesByCategory(category) {
        return this.notes.filter(note => note.category === category);
    }
    listNotes() {
        return this.notes;
    }
    findNoteById(id) {
        const note = this.notes.find(n => n.id === id);
        if (!note) {
            throw new Error(`Note with ID ${id} not found`);
        }
        return note;
    }
    findNoteByTitle(title) {
        return this.notes.find(n => n.title === title);
    }
    // Asynchronous method to simulate fetching notes
    fetchNotes() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                setTimeout(() => resolve(this.notes), 1000); // Simulating async operation
            });
        });
    }
}
exports.NoteService = NoteService;
