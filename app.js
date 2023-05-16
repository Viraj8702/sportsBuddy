// const input = document.getElementById('eventname');
// const output = document.getElementById('output');

// function printInput(){
//   output.innerHTML = input.value;
// }

// input.addEventListener("keyup", function(event) {
//   // Number 13 is the "Enter" key on the keyboard
//   if (event.keyCode === 13) {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     document.getElementById("button").click();
//   }
// });
// ****************************************************

// function printInput() {
//     var name = document.getElementById("eventname").value;
   
//     document.getElementById("output").innerHTML = name;
    
//     document.getElementById("button").addEventListener("click", function(event){
//     event.preventDefault()
//     });
// }

// ****************************************************
// database config
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

 const database=firebase.database()
 const ref=database.ref("addevent")

//  const newDataRef = ref.push();

//  const newID = newDataRef.key;
// console.log(newID);
 
// ****************************************************


inputform.addEventListener("submit",(e)=>{
    
    e.preventDefault();
    
    const eventname = document.getElementById('eventname').value;
    const evtdate=document.getElementById("evtdate").value


    
    database.ref('addevent/' + eventname).set({
        eventname:eventname,
        evtdate:evtdate,
      })
    // newDataRef.set(newData);

    alert.style.display="block"

    setTimeout(()=>{
        alert.style.display="none"
    },2000)


    inputform.reset()

})

// *************************************************************************
// to retrieve the data from database

var output = document.getElementById("output");
output.innerHTML += "<h2>" + "Below are the Event name and date which are organized." + "</h2><br>"
database.ref("addevent").on("child_added", function(snapshot) {
    var eventname = snapshot.val().eventname;
    var evtdate=snapshot.val().evtdate;

 
    
    // // Display the data on the page
     output.innerHTML += "<li>" + eventname + "</li>";
     output.innerHTML += "<p>" + evtdate + "</p><br>";

});

// **********************************************************************

