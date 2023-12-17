export class Note {
    constructor(
        public id: number,
        public title: string,
        public content: string,
        public category: string, // Ensure this line is present
        public createdAt: Date = new Date()
    ) {}
}
