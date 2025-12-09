import { initializeApp } from 
"https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";

import {
  getFirestore, collection, addDoc,
  getDocs, deleteDoc, doc, updateDoc, onSnapshot
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

/* 🔥 PASTE FIREBASE CONFIG HERE 🔥 */
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const booksRef = collection(db, "books");

// ✅ Add Book
document.getElementById("addBookForm").addEventListener("submit", async(e)=>{
  e.preventDefault();
  await addDoc(booksRef,{
    title:title.value,
    author:author.value,
    price:+price.value,
    coverImageURL:imageUrl.value
  });
  e.target.reset();
});

// ✅ Realtime Fetch
onSnapshot(booksRef,(snapshot)=>{
  booksGrid.innerHTML="";
  snapshot.forEach(docSnap=>{
    let book = docSnap.data();
    booksGrid.innerHTML+=`
      <div class="card">
        <img src="${book.coverImageURL}" width="100%">
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <button onclick="deleteBook('${docSnap.id}')">Delete</button>
        <button onclick="updateBook('${docSnap.id}')">Update Author</button>
      </div>`;
  });
});

// ✅ Delete
window.deleteBook = async(id)=>{
  await deleteDoc(doc(db,"books",id));
};

// ✅ Update
window.updateBook = async(id)=>{
  let newAuthor = prompt("New Author Name");
  await updateDoc(doc(db,"books",id),{author:newAuthor});
};
