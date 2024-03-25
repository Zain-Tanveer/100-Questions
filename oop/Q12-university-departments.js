class University {
  constructor(name, departments = []) {
    this.name = name;
    this.departments = departments;
  }

  addDepartment(department) {
    if (this.departments.includes(department)) {
      throw new Error(`${department} is already in the list of departments.`);
    }
    if (department.length === 0) {
      throw new Error(`Please provide a department.`);
    }

    this.departments.push(department);
    console.log(`${department} added.`);
  }

  removeDepartment(department) {
    if (!this.departments.includes(department)) {
      throw new Error(`${department} not in list of departments.`);
    }

    this.departments = this.departments.filter((val) => val !== department);
    console.log(`${department} removed.`);
  }

  displayDepartments() {
    if (this.departments.length === 0) {
      throw new Error("You have no departments added!");
    }

    console.log("Departments :", this.departments.join(", "));
  }
}

const uol = new University("University of Lahore", [
  "Computer Science",
  "Medical",
  "Electrical",
]);

try {
  uol.displayDepartments();

  uol.addDepartment("Office Of Student Affairs");
  uol.displayDepartments();

  uol.removeDepartment("Medical");
  uol.displayDepartments();
} catch (error) {
  console.log(error.message);
}

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
