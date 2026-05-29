/*Assignment -3 (Arrays/Datatypes/Operators)

1. Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and
marks [75, 80, 82] Add 10 marks to each students using assignment operators and
store it into another array, after adding 10 marks identify the average marks of all
students

Expected Output:
Updated Marks:
Suresh: 85
Mahesh: 90
Naresh: 92
Average Marks: 89.0
*/

const studentNames: string[] = ["Suresh", "Mahesh", "Naresh"];
const marks: number[] = [75, 80, 82];
const addMarks: number[] = [];

console.log("studentNames:", studentNames);
console.log("marks:", marks);

for (let i = 0; i < marks.length; i++) {
    let newMark: number = marks[i];
    newMark += 10; // Add 10 marks using assignment operator
    addMarks.push(newMark);
}

let totalMarks: number = 0;
for(let i = 0; i < addMarks.length; i++) {
    totalMarks += addMarks[i]; // Calculate total marks
}       
const averageMarks: number = totalMarks / addMarks.length;      

console.log("Added Marks:");
for (let i = 0; i < studentNames.length; i++) {
    console.log(`${studentNames[i]}: ${addMarks[i]}`);
}   
console.log(`Average Marks: ${averageMarks}`);   
