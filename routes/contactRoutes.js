const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken)
// GET all contacts
router.get('/', getContacts);

// GET a single contact by ID
router.get('/:id', getContact);

// POST a new contact
router.post('/', createContact);

// PUT (update) an existing contact by ID
router.put('/:id', updateContact);

// DELETE a contact by ID
router.delete('/:id', deleteContact);

module.exports = router;
