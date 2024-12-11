<<<<<<< HEAD
// Write your solution in this file!
=======
>>>>>>> b84f9d0130dccf0cb068e5613c09bf6b3d9384fd
/*created  employee object first;*/
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
   
  };
  
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value }; 

  }
 // basically returns the original object; 
  console.log("Original employee after non-destructive update:", employee); 


// adding key of position and manager as a value
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "position", "Manager");
  console.log("Non-destructive update:", updatedEmployee); 
  
  
 //Adding a new key with age as value;
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "age", 30);
  console.log("Destructive update:", employee); 
  
  //deletes key and value from the newEmployee object
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  } 
  
  // returns cloned employee;
  const clonedEmployee = deleteFromEmployeeByKey(employee, "age");
  console.log("Non-destructive delete:", clonedEmployee);
  console.log("Original employee after non-destructive delete:", employee);
  
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
  console.log("Destructive delete:", employee);
  
<<<<<<< HEAD

=======
>>>>>>> b84f9d0130dccf0cb068e5613c09bf6b3d9384fd
