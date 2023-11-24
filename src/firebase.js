import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA-YYwNUCpRZknFu6BCPfxf1veVovgpZeM",
  authDomain: "lettucechat-8d26f.firebaseapp.com",
  projectId: "lettucechat-8d26f",
  storageBucket: "lettucechat-8d26f.appspot.com",
  messagingSenderId: "845049324116",
  appId: "1:845049324116:web:4990a778dc60a83fd183c1"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();