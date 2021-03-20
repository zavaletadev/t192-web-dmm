import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyCWQqhdtFprhg_IZcTab6CtVJzOD2kdkO8',
	authDomain: 'dmm-192.firebaseapp.com',
	projectId: 'dmm-192',
	storageBucket: 'dmm-192.appspot.com',
	messagingSenderId: '24860642616',
	appId: '1:24860642616:web:39bd50ba590990218005cd',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const backend = {
	db: firebase.firestore(),
	auth: firebase.auth(),
	storage: firebase.storage(),
};

export default backend;
