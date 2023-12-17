"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
class Note {
    constructor(id, title, content, category, // Ensure this line is present
    createdAt = new Date()) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.category = category;
        this.createdAt = createdAt;
    }
}
exports.Note = Note;
