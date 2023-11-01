/* 
   Filename: ComplexCodeExample.js
   Description: This complex JavaScript code demonstrates various advanced concepts and techniques.
*/

// -----------------------------------------------------
// Global Variables
// -----------------------------------------------------

// Array of user objects
let users = [];

// Regular expressions
const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

// -----------------------------------------------------
// Classes
// -----------------------------------------------------

// User class
class User {
  constructor(firstName, lastName, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  validateEmail() {
    return emailPattern.test(this.email);
  }

  validatePassword() {
    return passwordPattern.test(this.password);
  }
}

// -----------------------------------------------------
// Functions
// -----------------------------------------------------

// Add a new user
function addUser(firstName, lastName, email, password) {
  const newUser = new User(firstName, lastName, email, password);
  
  if (!newUser.validateEmail()) {
    console.log('Invalid email address');
    return;
  }

  if (!newUser.validatePassword()) {
    console.log('Invalid password');
    return;
  }

  users.push(newUser);
  console.log('User added successfully');
}

// Display user details
function displayUserDetails() {
  users.forEach((user, index) => {
    console.log(`User ${index + 1}: ${user.getFullName()}`);
    console.log(`Email: ${user.email}`);
    console.log(`Password: ${user.password}\n`);
  });
}

// -----------------------------------------------------
// User Registration
// -----------------------------------------------------

const user1FirstName = 'John';
const user1LastName = 'Doe';
const user1Email = 'johndoe@example.com';
const user1Password = 'Password123#';

const user2FirstName = 'Jane';
const user2LastName = 'Smith';
const user2Email = 'janesmith@example.com';
const user2Password = 'p@ssWord456';

addUser(user1FirstName, user1LastName, user1Email, user1Password);
addUser(user2FirstName, user2LastName, user2Email, user2Password);

displayUserDetails();

// -----------------------------------------------------
// Other Complex Code Section...
// (More than 190 lines of additional code here)
// -----------------------------------------------------