const inputform=document.getElementById("inputform");
const alert = document.querySelector(".alert");

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
const auth = firebase.auth();
const database=firebase.database();

var welcome = document.getElementById("welcome");
  database.ref("users").on("child_added", function(snapshot) {
      var fullname = snapshot.val().full_name;

    
      // // Display the data on the page
      welcome.innerHTML += "<i>Welcome " + fullname + "</i>";
  });

const logout=document.querySelector("#logout");
logout.addEventListener("click",(e)=>{
    e.preventDefault();
    auth.signOut().then(()=>{
        console.log("signout");
        location.href = "/index.html";
    })
});