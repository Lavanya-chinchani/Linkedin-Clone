import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyC_dY31lr9qwG5bv4unRFQTP301DPppG3Q",
    authDomain: "linkedin-clone-53043.firebaseapp.com",
    projectId: "linkedin-clone-53043",
    storageBucket: "linkedin-clone-53043.appspot.com",
    messagingSenderId: "887177189190",
    appId: "1:887177189190:web:c13d3be23a045386c4f747",
    measurementId: "G-3D5XKJ1QJB"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  const auth= firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage();

  export{auth,provider,storage};
  export default db;
