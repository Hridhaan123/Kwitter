const firebaseConfig = {
      apiKey: "AIzaSyCIvouIe2jrSJmD9g_BjmLHVEPFMUaUcCo",
      authDomain: "quitter-3b5dd.firebaseapp.com",
      projectId: "quitter-3b5dd",
      storageBucket: "quitter-3b5dd.appspot.com",
      messagingSenderId: "734545374736",
      appId: "1:734545374736:web:d98899e19dc6702d38e495"
    };

    const app = initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({ name:user_name, message:msg, like:0 });
      document.getElementById("msg").value = "";
}

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}
      
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id = " + Room_names + "onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
