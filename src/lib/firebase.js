import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { firebaseConfig } from "../firebase/firebaseConfig";

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const dataBase = firebaseApp.firestore();
export const auth = firebase.auth();

export { firebaseApp };
