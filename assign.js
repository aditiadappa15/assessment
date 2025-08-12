const students = [
  { id: 1, name: "Amit Sharma", age: 20, course: "Computer Science", marks: 85, feesPaid: true },
  { id: 2, name: "Priya Singh", age: 22, course: "Information Technology", marks: 92, feesPaid: false },
  { id: 3, name: "Ravi Kumar", age: 19, course: "Electronics", marks: 76, feesPaid: true },
  { id: 4, name: "Neha Verma", age: 21, course: "Mechanical", marks: 88, feesPaid: true },
  { id: 5, name: "Sohan Lal", age: 23, course: "Civil Engineering", marks: 65, feesPaid: false },
  { id: 6, name: "Anjali Mehta", age: 20, course: "Computer Science", marks: 95, feesPaid: true },
  { id: 7, name: "Vikas Gupta", age: 22, course: "Information Technology", marks: 58, feesPaid: false },
  { id: 8, name: "Pooja Mishra", age: 19, course: "Mechanical", marks: 80, feesPaid: true },
  { id: 9, name: "Rajesh Khanna", age: 21, course: "Electronics", marks: 70, feesPaid: false },
  { id: 10, name: "Sneha Kapoor", age: 22, course: "Civil Engineering", marks: 90, feesPaid: true }
];

const studentname=students.map(student=>({name:student.name,

}));
console.log(studentname);

const stud = [
  { id: 1, name: "Amit Sharma", age: 20, course: "Computer Science" },
  { id: 2, name: "Priya Singh", age: 22, course: "Information Technology" },
  { id: 3, name: "Ravi Kumar", age: 19, course: "Electronics" },
  { id: 4, name: "Neha Verma", age: 21, course: "Mechanical" },
  { id: 5, name: "Sohan Lal", age: 23, course: "Civil Engineering" },
  { id: 6, name: "Anjali Mehta", age: 20, course: "Computer Science" },
  { id: 7, name: "Vikas Gupta", age: 22, course: "Information Technology"},
  { id: 8, name: "Pooja Mishra", age: 19, course: "Mechanical"  },
  { id: 9, name: "Rajesh Khanna", age: 21, course: "Electronics" },
  { id: 10, name: "Sneha Kapoor", age: 22, course: "Civil Engineering" }
];
console.log(stud);

const studstatus=students.map(student=>({...student,
    status:student.marks>=60?"pass":"fail"}));
console.log(studstatus);

const studstring=students.map(student=>`${student.name}-${student.course}`);
console.log(studstring);

const studincmarks=students.map(student=>({...student,
    marks:student.marks+5}));
    console.log(studincmarks);

    const csstud=students.filter(student=>student.course=="Computer Science");
    console.log(csstud);

    const studabove80marks=students.filter(student=>student.marks>80);
    console.log(studabove80marks);

   const studunpaidfees=students.filter(student=>student.feesPaid==false);
   console.log(studunpaidfees);

   const studageandmarks=students.filter(student=>student.age>20&&student.marks>70);
   console.log(studageandmarks);

   const studmech=students.filter(student=>student.course=="Mechanical"&&student.marks<85);
   console.log(studmech);

   const totalmarks=students.reduce((acc,student)=>acc+student.marks,0);
   console.log(totalmarks);

   const avgmarks=totalmarks/10;
   console.log(avgmarks);

const feespaidcount=students.reduce((count,student)=>(student.feesPaid?count+1:count),0);
console.log(feespaidcount);

const highestmarks=students.reduce((max,student)=>student.marks>max?student.marks:max,0);
console.log(highestmarks);

