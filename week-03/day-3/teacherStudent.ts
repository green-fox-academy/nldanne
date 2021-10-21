'use strict';
import { Student } from './student';
import { Teacher } from './teacher'

let student = new Student();
let teacher = new Teacher();

student.question(teacher);
teacher.teach(student);
