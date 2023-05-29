const inquirer = require('inquirer');
const mysql = require('mysql2');




const db = mysql.createConnection(
    {
      host: '127.0.0.1',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: '',
      database: 'employee_db'
    },
    console.log(`Connected to the classlist_db database.`)
  );

//  db.query('SELECT * FROM department', function (err, results) {
//     console.table(results);
//   });
  
  function  menu () {
    inquirer
    .prompt([
      {
        type: 'list',
        message: 'Whatt would you like to do?',
        name: 'option',
        choices:['view all departments','view all roles','view all employees',
        'add a department','add a role','add an employee','update an employee role']
      },
]).then((response) => {

if(response.option === 'view all departments'){
    viewDepartments();
    
     
} else if (response.option === 'view all roles') {
 viewRoles();
 
  
}else  if (response.option === 'view all employees'){
viewEmployees();

  
}else if (response.option === 'add a department'){
addADepartment();



}else if (response.option === 'add a role'){
  addARole();
  
 
}else if(response.option === 'add an employee'){
    addAEmployee();
    
    
}else if(response.option === 'update an employee role'){

}
})

  }


  function viewDepartments( ) {
    db.query('SELECT * FROM department', function (err, results) {
            console.table(results);
            menu();
          });
  }
 
  function viewRoles( ) {
    db.query('SELECT * FROM roles', function (err, results) {
            console.table(results);
            menu();
          });
  }
  function viewEmployees() {
    db.query('SELECT * FROM employee', function (err, results) {
            console.table(results);
            menu();
          });
  }
 
  function addADepartment(){
    db.query('SELECT * FROM department', function (err, results) {
        
        
    
    
    
        inquirer
    .prompt([ {
        type: 'input',
        message: 'What is the name of this department?',
        name: 'name',
    },
    ]).then((data) => {
        db.query('INSERT INTO department SET ?', {
            name: data.name,
            
        } )
        // const obj = {name: data.name, }
        // results.push(obj);
        // console.table(results)
         menu();
         
    })
})
    }

  function addARole(){
    db.query('SELECT * FROM role', function (err, results) {
        
    
    
    
        inquirer
    .prompt([ {
        type: 'input',
        message: 'What is thier title?',
        name: 'jobTitle',
    },
    {
        type: 'input',
        message: 'What is their salary?',
        name: 'salary',
    },
    {type: 'input',
    message: 'What is the the department id?',
    name: 'department_id',
    },
    ]).then((data) => {
        db.query('INSERT INTO roles SET ?', {
            title: data.jobTitle,
            salary:  data.salary,
            department_id:  data.department_id
        } )
        //const obj = {title: data.jobTitle, salary: data.salary , department_id: data.department_id}
       // results.push(obj);
        //console.table(results)
        menu();
    })
})
    }

    
  function addAEmployee(){
    db.query('SELECT * FROM employee', function (err, results) {
        console.table(results);
    
    
    
        inquirer
    .prompt([ {
        type: 'input',
        message: 'What is thier first name?',
        name: 'first_name',
    },
    {
        type: 'input',
        message: 'What is their last name?',
        name: 'last_name',
    },
    {
        type: 'input',
    message: 'What is their role id?',
    name: 'role_id',
    },
    {
        type: 'input',
    message: 'What is their manager id?',
    name: 'manager_id',
    },
    ]).then((data) => {
        db.query('INSERT INTO employee SET ?', {
            first_name: data.first_name,
            last_name:  data.last_name,
            role_id:  data.role_id,
            manager_id: data.manager_id

    
        } )
        //const obj = {first_name: data.first_name, last_name: data.last_name , role_id: data.role_id , manager_id: data.manager_id}
        //results.push(obj);
       // console.table(results)
        menu();
    })
    })

  }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  menu()

  //Query before prompt put in array add a role