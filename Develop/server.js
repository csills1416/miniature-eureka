const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


const readNotesFromFile = () => {
  const dbPath = path.join(__dirname, 'db', 'db.json');
  return JSON.parse(fs.readFileSync(dbPath, 'utf8'));
};


const writeNotesToFile = (notes) => {
  const dbPath = path.join(__dirname, 'db', 'db.json');
  fs.writeFileSync(dbPath, JSON.stringify(notes, null, 2));
};

app.get('/api/notes', (req, res) => {
  const notes = readNotesFromFile();
  res.json(notes);
});


app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  const notes = readNotesFromFile();
  newNote.id = Date.now().toString();
  notes.push(newNote);
  writeNotesToFile(notes);
  res.json(newNote);
});

app.delete('/api/notes/:id', (req, res) => {
  const noteId = req.params.id;
  let notes = readNotesFromFile();
  notes = notes.filter((note) => note.id !== noteId);
  writeNotesToFile(notes);
  res.json({ message: 'Note deleted successfully.' });
});

// Route to serve notes.html
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});