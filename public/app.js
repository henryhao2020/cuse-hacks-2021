

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

var fileInput = document.getElementById("myfile"),

// read the data from the Vaccine Provider
    readFile = function () {
        var reader = new FileReader();
        
        reader.onload = function () {
            document.getElementById('out').innerHTML = reader.result;
            
            // put the output of the csv file and separate them by commas. 
            var listofstrings = reader.result.split(',');
            var dict = {};
            var i = 0;

            // iterate through the list to grab all of the zipcodes
            for (i = 0; i < listofstrings.length; i++) {
              if (! isNaN(listofstrings[i])) {
                //put those zipcodes into a dictionary where each key is the zipcode, and each value is the number of times the zipcode appears
                dict[listofstrings[i]] = 1;
              } 
            }
          // debugging
            console.log(dict)

            


        };
        // start reading the file. When it is done, calls the onload event defined above.
        reader.readAsBinaryString(fileInput.files[0]);
    };

fileInput.addEventListener('change', readFile);


// This event listener will print the zipcode to BMI mappings
submitButton.addEventListener("click", function () {
  console.log("This is a test!")

  db.collection("zipcodes").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().AverageBMI}`);
    });
  });


})


