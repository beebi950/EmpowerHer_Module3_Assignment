import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore";

export const getTodos = (uid) =>
  getDocs(collection(db, "users", uid, "todos"));

export const addTodo = (uid, todo) =>
  addDoc(collection(db, "users", uid, "todos"), todo);

export const updateTodo = (uid, id, data) =>
  updateDoc(doc(db, "users", uid, "todos", id), data);

export const deleteTodo = (uid, id) =>
  deleteDoc(doc(db, "users", uid, "todos", id));
