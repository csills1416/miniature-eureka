const express = require('express');
const path = require('path');
const  fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

const readNotesFromFile = () => {
    const dbPath = path.join(__dirname, 'db/db.json');
    return JSON.parse(fs.readFileSync(dbPath));
};

const writeNotesToFile = (notes) => {
    const dbPath = path.join(__dirname, 'db/db.json');
    fs.writeFileSync(dbPath, JSON.stringify(notes));
};

app.get('/api/notes', (req, res) => {
    res.json(readNotesFromFile());
});

app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    const notes = readNotesFromFile();
    notes.push(newNote);
    writeNotesToFile(notes);
    res.json(notes);
});
