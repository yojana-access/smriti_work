import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCitRgnQXWRbMaAJHCjtz9fEo2xFoAmk1A",
    authDomain: "yojana-access.firebaseapp.com",
    databaseURL: "https://yojana-access.firebaseio.com",
    projectId: "yojana-access",
    storageBucket: "yojana-access.appspot.com",
    messagingSenderId: "161023397386",
    appId: "1:161023397386:web:003952ab026932ed"
  };
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();
  var submitRegister = function(){
    database.push({
        "Aadhaar Number":$("#aadhaar_number").val(),
        "Phone Number":$("#phone_number").val()
    });
};
  $(window).load(function(){
    $("#registerForm").submit(submitRegister);
  });