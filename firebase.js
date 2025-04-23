import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
import { getFirestore, doc, setDoc, getDoc, updateDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDb-uiVbZ1ISY7CyDvea3gN_j-Q00f28QQ",
  authDomain: "mywatchlist-ebf59.firebaseapp.com",
  projectId: "mywatchlist-ebf59",
  storageBucket: "mywatchlist-ebf59.firebasestorage.app",
  messagingSenderId: "44719633170",
  appId: "1:44719633170:web:20c204292289b77a9d39cb"
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

//Register user and store in Firestore
export async function registerUser(email, password, username) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password)
  const user = userCredential.user
  await setDoc(doc(db, "users", user.uid), {email, username, watchlist: []})
}

//Login user
export async function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
}

//Logout user
export async function logoutUser() {
  return signOut(auth)
}

//Listen for auth state changes
export async function checkUserAuth(callback) {
  onAuthStateChanged(auth, (user) => callback(user))
}

//Fetch user watchlist
export async function getWatchlist(uid) {
  const userRef = doc(db, "users", uid)
  const docSnap = await getDoc(userRef)
  return docSnap.exists() ? docSnap.data().watchlist : []
}

//Update user watchlist
export async function updateWatchlist(uid, watchlist) {
  const userRef = doc(db, "users", uid)
  await updateDoc(userRef, {watchlist})
}




/* TMDB API call
  
  const API_KEY = "f48522d8c5c4d0987c2662fcd0672207"; //TMDB key
  
  async function searchMovies() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${inputValue}`
      );
      const data = await res.json();
      if (data.results.length > 0) {
        setMovies(data.results);
        setError("");
      } else {
        setMovies([]);
        setError("No movies found. Try a different title");
      }
    } catch (err) {
      setError(`Something went wrong. ${err}`);
      setMovies([]);
    }
  }
  */
