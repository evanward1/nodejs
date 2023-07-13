const express = require("express");
const  {getStudents, createStudent, getspecStudent} = require("../controllers/students");
const router = express.Router();

router.get('/', getStudents);
router.get('/:roll', getspecStudent);
router.post('/', createStudent);
// router.patch('/:roll', student_Act.updatestudent);
// router.delete('/:roll', student_Act.deletestudent);
module.exports=router;