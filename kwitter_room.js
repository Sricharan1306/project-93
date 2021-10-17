
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPPLAvant4jWESyei_zgBEKse1Xg-XFkg",
    authDomain: "class-93-1be91.firebaseapp.com",
    projectId: "class-93-1be91",
    storageBucket: "class-93-1be91.appspot.com",
    messagingSenderId: "246529976374",
    appId: "1:246529976374:web:a272c9ad6a6e14d77b1097"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
   
    //End code
    });});}
getData();