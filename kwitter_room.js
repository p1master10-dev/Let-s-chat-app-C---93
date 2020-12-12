// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCXyRVm2pycZMe2Vj9BxvQAZ4x2VZZm6-Q",
    authDomain: "kwitter-2-90f83.firebaseapp.com",
    databaseURL: "https://kwitter-2-90f83-default-rtdb.firebaseio.com",
    projectId: "kwitter-2-90f83",
    storageBucket: "kwitter-2-90f83.appspot.com",
    messagingSenderId: "664465782957",
    appId: "1:664465782957:web:72e22e3f38159764732e24"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);




user_name = localStorage.getItem("user_name");

  function createRoom(){
      room_name = document.getElementById("room_name").value;

      teacher_check = document.getElementById("teacher_check");

      if(teacher_check.checked == true){
          firebase.database().ref("/").child(room_name).update({
              purpose: "Adding Room Of A Teacher"
          });
      }else{
          firebase.database().ref("/").child(room_name).update({
              purpose: "Adding Room Of A Student"
          });
      }
  }