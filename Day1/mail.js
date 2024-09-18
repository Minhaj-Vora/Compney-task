const firebaseConfig = {
  apiKey: "AIzaSyCfoG2-bE8acoYawOzVncgGJwzHaHCIpGw",
  authDomain: "contactform-323d2.firebaseapp.com",
  databaseURL: "https://contactform-323d2-default-rtdb.firebaseio.com",
  projectId: "contactform-323d2",
  storageBucket: "contactform-323d2.appspot.com",
  messagingSenderId: "266903362647",
  appId: "1:266903362647:web:5d7affc6b9356dee411712"
};
  //initialize the firebase
  firebase.initializeApp(firebaseConfig);
  //initialize the database
  const contactFormDB =firebase.database().ref('contactForm');

  document.getElementById('contactForm').addEventListener('submit',submitForm);

  function submitForm(e){
    e.preventDefault();

    var fname=getElementVal('fname');
    var lname=getElementVal('lname');
    var email=getElementVal('email');
    var pass=getElementVal('pass');
    var age=getElementVal('age');
    var bio=getElementVal('bio');

    saveMessages(fname,lname,email,pass,age,bio);
    console.log(fname,lname,email,pass,age,bio);

  }

  const saveMessages = (fname,lname,email,pass,age,bio) => {
    var newContactForm = contactFormDB.push();

    console.log('newContact---->', newContactForm);

    newContactForm.set({
      fname : fname,
      lname : lname,
      email : email,
      pass : pass,
      age : age,
      bio : bio,
    })
  }
  const getElementVal=(id)=>{
    return document.getElementById(id).value;
  }