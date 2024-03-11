// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuratio
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDrhAfdS4LDfyE3NiuedAmqfv5oEZiKi_Y',
	authDomain: 'microproyecto-2-802c7.firebaseapp.com',
	projectId: 'microproyecto-2-802c7',
	storageBucket: 'microproyecto-2-802c7.appspot.com',
	messagingSenderId: '502974475238',
	appId: '1:502974475238:web:f4b41bd06d8f6b1ec8c427',
	measurementId: 'G-TSMMZTE52M',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const usuarios = collection(db, 'usuarios');
const clubs = collection(db, 'clubs');
const juegos = collection(db, 'juegos');
localStorage.clear();
localStorage.setItem('usuarios', JSON.stringify(usuarios));
localStorage.setItem('clubs', JSON.stringify(clubs));
localStorage.setItem('juegos', JSON.stringify(juegos));
