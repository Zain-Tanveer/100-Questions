class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  calculateAnnualSalary() {
    return this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);

    this.department = department;
  }

  calculateAnnualSalary(bonus = 0) {
    return super.calculateAnnualSalary() + bonus;
  }
}

const employee = new Employee("John", 1000);
const employeeAnnualS = employee.calculateAnnualSalary();
console.log(`${employee.name}'s annual salary is :`, employeeAnnualS);

const manager = new Manager("Peter", 5000);
const managerAnnualS = manager.calculateAnnualSalary(1000);
console.log(`${manager.name}'s annual salary is :`, managerAnnualS);

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
