const employee = {
    name:'Shanice',
    streedt: '1st street',
};

function updateEmployeeWithKeyAndValue(employee, key,value){
    return {
        ...employee,
        [key]: value,
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
        employee[key] = value;
        return employee;
    };
//delete  key value pair from an employee object
function deleteFromEmployeeByKey(employee, key) {
    // Create a new object by copying all key-value pairs from the original employee object
    const newEmployee = Object.assign({}, employee);
  
    // Delete the specified key from the new object
    delete newEmployee[key];
  
    // Return the new object
    return newEmployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
