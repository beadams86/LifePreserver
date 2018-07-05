
import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyBb0g-bAXSFzMCwt8bqbdJrhsxXMtkxo1o",
    authDomain: "lifepreserver2018.firebaseapp.com",
    databaseURL: "https://lifepreserver2018.firebaseio.com",
    projectId: "lifepreserver2018",
    storageBucket: "lifepreserver2018.appspot.com",
    messagingSenderId: "363236995538"
};

const base = firebase.initializeApp(config);

export default base;