'use strict';

import { stringify } from 'querystring';
import { Student } from './student';


class Teacher {
    private student: Student[];
    //private teacher: Teacher[];

    constructor() {
        this.student = [];
        //this.teacher = [];
    }

    public teach(student: Student) : void {
        console.log(student.learn());
    }

    public giveAnswer() : string{
        return 'The teacher is answering';
    }

}

//let student = new Student();
//console.log(student);

export { Teacher };