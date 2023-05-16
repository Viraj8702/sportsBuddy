// database config
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
  
  const database = firebase.database();
  const ref = database.ref("addevent");
  
  // *************************************************************************
  // to retrieve the data from database
  
  var output = document.getElementById("output");
  output.innerHTML += "<h2>" + "Below are the Event name and date which are organized." + "</h2><br>"
  database.ref("addevent").on("child_added", function(snapshot) {
      var eventname = snapshot.val().eventname;
      var evtdate=snapshot.val().evtdate;
    
    
      // // Display the data on the page
       output.innerHTML += "<li>Event Name : " + eventname + "</li>";
       output.innerHTML += "<p>Date : " + evtdate + "</p>";

       var location = snapshot.val().location;
       var area = snapshot.val().area;
       output.innerHTML += "<p>Location : " + location + "</p>";
       output.innerHTML += "<p>Area : " + area + "</p><br>";
  });
  
  // ***************************************************************************
  // event listener for form submission
  function update() {
    var location = document.getElementById('location').value
    var area = document.getElementById('area').value
    var eventname=document.getElementById("eventname").value

    var updates = {
        location : location,
        area : area
    }
  
    database.ref('addevent/' + eventname).update(updates)
  
    alert('updated')
  }
  
  // **********************************************************************
  // function to remove event from database
//   function remove(){
//       var removeelement=document.getElementById("eventname").value;
//       database.ref("/addevent/"+removeelement).remove();
//       const newDataRef = ref.push();
  
//     const newID = newDataRef.key;
//     console.log(newID);  
//       console.log(removeelement);
//   }
  