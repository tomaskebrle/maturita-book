import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {

  apiKey: "AIzaSyCPxk3hMq1vAMWjlUnYx9kdkO5J_pH6uyU",

  authDomain: "maturitabooks.firebaseapp.com",

  projectId: "maturitabooks",

  storageBucket: "maturitabooks.appspot.com",

  messagingSenderId: "257698190798",

  appId: "1:257698190798:web:bdd8e7188a1def5be3c79f",

  measurementId: "G-HHJYFVF7N6"

};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// LoginPage
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export async function getBooksFromCategory(bookCategory) {
  const bookCategoryRef = firestore.collection('books');
  const query = bookCategoryRef.where('category_id', "==", bookCategory);
  const booksDocs = await query.get();
  console.log("getBooksFromCategory" + booksDocs)
  return booksDocs;
}

export async function getBookFromBookId(bookid) {
  const bookRef = firestore.collection('books');
  const query = bookRef.where('name_id', "==", bookid).limit(1);
  const bookDoc = (await query.get()).docs[0];
  return bookDoc;
}

export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data
  }
}