'use strict';

/*
    Create Student and Teacher classes
    Student
        learn() -> prints: the student is actually learning
        question(teacher) -> calls the teacher's giveAnswer() method
    Teacher
        teach(student) -> calls the student's learn() method
        giveAnswer() -> prints: the teacher is answering a question
    Instantiate a Student and Teacher object
    Call the student's question() method and the teacher's teach() method

*/

import { Teacher } from './teacher'
let teacher = new Teacher();


class Student {
    private teacher: Teacher[];
    private student: Student[];

    constructor() {
        this.teacher = [];
        this.student = [];
    }

    public learn() : string {
        return 'The student is actually learning.';
    }

    public question(teacher: Teacher) : void{
       console.log(teacher.giveAnswer()) ;
    }

}

export { Student };