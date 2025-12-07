// 🔹 STEP 1: Firebase Config (replace with YOUR config)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
};

// 🔹 STEP 2: Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const booksRef = db.collection("books");

// DOM
const form = document.getElementById("bookForm");
const booksDiv = document.getElementById("books");


// 🔹 CREATE (Add Book)
form.addEventListener("submit", (e) => {
  e.preventDefault();

  booksRef.add({
    title: title.value,
    author: author.value,
    price: price.value,
    image: image.value
  });

  form.reset();
});


// 🔹 READ (Realtime Fetch)
booksRef.onSnapshot((snapshot) => {
  booksDiv.innerHTML = "";

  snapshot.forEach((doc) => {
    const book = doc.data();

    booksDiv.innerHTML += `
      <div class="card">
        <img src="${book.image}">
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Price: ₹${book.price}</p>

        <button onclick="updateBook('${doc.id}')">Update Author</button>
        <button onclick="deleteBook('${doc.id}')">Delete</button>
      </div>
    `;
  });
});


// 🔹 UPDATE
function updateBook(id) {
  const newAuthor = prompt("Enter new author name");

  if (newAuthor) {
    booksRef.doc(id).update({
      author: newAuthor
    });
  }
}


// 🔹 DELETE
function deleteBook(id) {
  if (confirm("Are you sure?")) {
    booksRef.doc(id).delete();
  }
}
