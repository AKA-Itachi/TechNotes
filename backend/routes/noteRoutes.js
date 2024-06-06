const express = require("express");
const router = express.Router();
const notesController = require("../controllers/notesController");

router
    .route("/")
    .get(notesController.getAllNotes)
    .post(notesController.createNewNote)
    .patch(notesController.updatedNote)
    .delete(notesController.deleteNote);

module.exports = router;
