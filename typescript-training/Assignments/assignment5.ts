/*
Assignment (Conditional Statements & Loops)

Employee Table
S.No Name Base Salary Experience (Years) Year-End Rating (Out of 5)

1 Alice Johnson 75000.0 5.1 4.2
2 Bob Smith 68000.0 3.2 3.8
3 Carol Davis 82000.0 7.1 4.5
4 David Brown 90000.0 10.2 2.5
5 Eva Green 60000.0 2.4 3.5

Hike 
Rating - % of base Salary as variable pay - Bonus
> =4.0 1    5.0     1500
 >=3 && < 4 10.0    1200
 < 3.0      3.0     300

Extra Perks
Employees with Experience >= 5 Years get extra Reward of 5000;

There are 5 Employee records. Now Calculate the Hike percentage of each Employee and store the
Values in Map with EmployeeName and HikePercentagevalue and Print them.

Hike = ( Base Salary * variable pay % ) + Bonus + Reward ;
Hike % = Hike / Base Salary .
*/

interface Employee {
    name: string;
    baseSalary: number;
    experience: number;
    yearEndRating: number;
}

const employees: Employee[] = [
    { name: "Alice Johnson", baseSalary: 75000.0, experience: 5.1, yearEndRating: 4.2 },
    { name: "Bob Smith", baseSalary: 68000.0, experience: 3.2, yearEndRating: 3.8 },    
    { name: "Carol Davis", baseSalary: 82000.0, experience: 7.1, yearEndRating: 4.5 },
    { name: "David Brown", baseSalary: 90000.0, experience: 10.2, yearEndRating: 2.5 },
    { name: "Eva Green", baseSalary: 60000.0, experience: 2.4, yearEndRating: 3.5 }
];  

const hikeMap: Map<string, number> = new Map();

employees.forEach(employee => {

    let variablePayPercentage: number;
    let bonus: number;
    let reward: number = 0;

    if (employee.yearEndRating >= 4.0) {
        variablePayPercentage = 15.0;
        bonus = 1500;
    }
    else if (employee.yearEndRating >= 3 && employee.yearEndRating < 4) {
        variablePayPercentage = 10.0;
        bonus = 1200;
    }           
    else {
        variablePayPercentage = 3.0;
        bonus = 300;
    }

    if (employee.experience >= 5) {
        reward = 5000;
    }       
    const hike = (employee.baseSalary * (variablePayPercentage / 100)) + bonus + reward;
    const hikePercentage = (hike / employee.baseSalary) * 100;
    hikeMap.set(employee.name, hikePercentage);
});

hikeMap.forEach((hikePercentage, employeeName) => {
    console.log(`${employeeName}: Hike Percentage = ${hikePercentage.toFixed(2)}%`);
});