import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCsz6O2rZugmsiSQf48LxYUQLVk16gh8ek",
  authDomain: "disneyplus-yt-61cb1.firebaseapp.com",
  projectId: "disneyplus-yt-61cb1",
  storageBucket: "disneyplus-yt-61cb1.appspot.com",
  messagingSenderId: "1062727212492",
  appId: "1:1062727212492:web:3f78282366bbd4f10b5169",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth =firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;