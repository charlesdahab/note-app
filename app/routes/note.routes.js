module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    // Retrieve all Notes
    app.get('/notes', notes.findAll);

    // Create a new Note
    app.post('/notes', notes.create);
    
    // Retrieve a single Note with noteId
    app.get('/notes/:noteId', notes.findOne);

    // Update a Note with noteId
    app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete('/notes/:noteId', notes.delete);
}