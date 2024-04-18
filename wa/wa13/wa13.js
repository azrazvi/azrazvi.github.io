function print(n, obj){
    console.log(`Problem${n}`, JSON.parse(JSON.stringify(obj)))
}

// Problem 1 - Create JSON for each employee
const employees = [
    {
        firstName: "Sam",
        department: "Tech",
        designation: "Manager",
        salary: 40000,
        raiseEligible: true  
    },
    {
        firstName: "Mary",
        department: "Finance",
        designation: "Trainee",
        salary: 18500,
        raiseEligible: true
    },
    {
        firstName: "Bill",
        department: "HR",
        designation: "Executive",
        salary: 21200,
        raiseEligible: false
    },
];

//console.log('Problem 1', employees);
print(1, employees);

// Problem 2 - Create JSON for company
const company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
}
//console.log('Problem 2', company);
print(2, company);
//problem 3 - a new employee has joined
const newEmployee = {
    firstName: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raiseEligible: false
}
company.employees.push(newEmployee);
//console.log('Problem 3', company);
print(3, company);

//Problem 4 - calculate total salary for all company employees
let total = 0;
for (const employee of employees){
    total += employee["salary"];

}

//console.log('Problem 4', total);
print(4, total);

//Problem 5 - Update salary for all eligible employees
for( employee of employees) {
    if (employee["raiseEligible"] == true){
        employee["salary"] *= 1.1;
        employee["raiseEligible"] = false
    }
}
//console.log('Problem 5', employees);
print(5, employees);

//Problem 6 - Update employees working from home
const employeeWFH = ['Anna','Sam'];
for(const employee of employees){
    let flag = false;
    for(const employeeName of employeeWFH){
        if(employee.firstName == employeeName){
            flag = true;
            break;
        }
    }
    employee.WFH = flag;
}
print(6,employees);
