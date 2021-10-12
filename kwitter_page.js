const firebaseConfig = {
      apiKey: "AIzaSyCIvouIe2jrSJmD9g_BjmLHVEPFMUaUcCo",
      authDomain: "quitter-3b5dd.firebaseapp.com",
      databaseURL: "https://quitter-3b5dd-default-rtdb.firebaseio.com",
      projectId: "quitter-3b5dd",
      storageBucket: "quitter-3b5dd.appspot.com",
      messagingSenderId: "734545374736",
      appId: "1:734545374736:web:d98899e19dc6702d38e495"
    };
    const app = initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      childData = childSnapshot.val();
      if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
name = message_data["name"];
message = message_data["message"];
like = message_data["message"];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML = row;

} });  }); }
getData();
function updateLike(message.id) {
      console.log("click on the like button" + message_id);
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({ like : updated_likes });
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
}