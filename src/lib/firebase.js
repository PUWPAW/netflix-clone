import firebase from "firebase";
import { firebaseConfig } from "../firebase/firebaseConfig";

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const dataBase = firebaseApp.firestore();
export const auth = firebase.auth();

export default firebaseApp;
