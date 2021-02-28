

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyA5SxtBmmo6X49p4iFKf2m3feovfs0CtMA",
  authDomain: "test-b1c5f.firebaseapp.com",
  projectId: "test-b1c5f",
  storageBucket: "test-b1c5f.appspot.com",
  messagingSenderId: "57091098134",
  appId: "1:57091098134:web:71e02740a71872022b5737",
  measurementId: "G-15VE444L3F"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


const db = firebase.firestore()

const submitButton = document.getElementById("submitButton");


// This event listener will print the zipcode to BMI mappings
submitButton.addEventListener("click", function () {
  console.log("This is a test!")

  db.collection("zipcodes").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().AverageBMI}`);
    });
  });


})