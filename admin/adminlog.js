const firebaseConfig = {
  apiKey: "AIzaSyCYvR-c7RYzPZhZoluEbLQWTE-X7ySSKkA",
  authDomain: "userregister-ce80d.firebaseapp.com",
  projectId: "userregister-ce80d",
  storageBucket: "userregister-ce80d.appspot.com",
  messagingSenderId: "612185710360",
  appId: "1:612185710360:web:96f3fa3c2c30e16510c86d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const database = firebase.database()

// Set up our register function
function register () {
// Get all our input fields
email = document.getElementById('email').value
password = document.getElementById('password').value
full_name = document.getElementById('full_name').value
age = document.getElementById('age').value


  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is out of bound')
      return
      // Don't continue running the code
    }
    if (validate_field(full_name) == false || validate_field(age) == false) {
      alert('One or More Extra Fields empty')
      return
    }
     // Move on with Auth
auth.createUserWithEmailAndPassword(email, password)
.then(function() {
  // Declare user variable
  var user = auth.currentUser

  // Add this user to Firebase Database
  var database_ref = database.ref()

  // Create User data
  var user_data = {
    email : email,
    full_name : full_name,
    age : age,
  
    last_login : Date.now()
  }
   // Push to Firebase Database
   database_ref.child('admin/' + user.uid).set(user_data)

   // DOne
   alert('User Created!!')
 })
 .catch(function(error) {
   // Firebase will use this to alert of its errors
   var error_code = error.code
   var error_message = error.message

   alert(error_message)
 })
}


// ******************************************************
// Set up our login function
function login () {
  // Get all our input fields
  email = document.getElementById('email').value
  password = document.getElementById('password').value

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Outta Line!!')
    return
    // Don't continue running the code
  }

  auth.signInWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref()

    // Create User data
    var user_data = {
      last_login : Date.now()
    }

    // Push to Firebase Database
    database_ref.child('admin/' + user.uid).update(user_data)

    // DOne
    alert('Welcome Admin!')
    location.href = "/admin/adminMainpg.html";

  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}


// ******************************************************

// Validate Functions
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    // Email is good
    return true
  } else {
    // Email is not good
    return false
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false
  } else {
    return true
  }
}

function validate_field(field) {
  if (field == null) {
    return false
  }

  if (field.length <= 0) {
    return false
  } else {
    return true
  }
}
  