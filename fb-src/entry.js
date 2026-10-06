import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from 'firebase/auth';
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager, doc, collection, setDoc, deleteDoc, onSnapshot, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDWSjTKSddpftnM42BgH8RPOY8Pp9SVsuM',
  authDomain: 'flux-joerg.firebaseapp.com',
  projectId: 'flux-joerg',
  storageBucket: 'flux-joerg.firebasestorage.app',
  messagingSenderId: '503818825793',
  appId: '1:503818825793:web:7ef6c4acc7f2f00d69d6c0'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
let db;
try { db = initializeFirestore(app, { localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() }) }); }
catch (e) { db = initializeFirestore(app, {}); }

window.FBX = {
  onUser: cb => onAuthStateChanged(auth, cb),
  google: () => signInWithPopup(auth, new GoogleAuthProvider()),
  login: (m, p) => signInWithEmailAndPassword(auth, m, p),
  register: (m, p) => createUserWithEmailAndPassword(auth, m, p),
  reset: m => sendPasswordResetEmail(auth, m),
  logout: () => signOut(auth),
  watchMain: (uid, next, err) => onSnapshot(doc(db, 'users', uid, 'data', 'main'), s => next(s.exists() ? s.data() : null, s.metadata), err),
  putMain: (uid, data) => setDoc(doc(db, 'users', uid, 'data', 'main'), data),
  watchImg: (uid, next, err) => onSnapshot(collection(db, 'users', uid, 'img'), s => next(s.docs.map(d => ({ id: d.id, d: d.data().d })), s.metadata), err),
  putImg: (uid, id, d) => setDoc(doc(db, 'users', uid, 'img', id), { d }),
  delImg: (uid, id) => deleteDoc(doc(db, 'users', uid, 'img', id)),
  createGroup: (gid, data) => setDoc(doc(db, 'groups', gid), data),
  putGroup: (gid, data) => setDoc(doc(db, 'groups', gid), data, { merge: true }),
  joinGroup: (gid, uid) => updateDoc(doc(db, 'groups', gid), { members: arrayUnion(uid) }),
  leaveGroup: (gid, uid) => updateDoc(doc(db, 'groups', gid), { members: arrayRemove(uid) }),
  watchGroup: (gid, next, err) => onSnapshot(doc(db, 'groups', gid), s => next(s.exists() ? s.data() : null, s.metadata), err),
  watchItems: (gid, next, err) => onSnapshot(collection(db, 'groups', gid, 'items'), s => next(s.docChanges().map(c => ({ type: c.type, id: c.doc.id, data: c.doc.data() })), s.metadata), err),
  putItem: (gid, id, d) => setDoc(doc(db, 'groups', gid, 'items', id), d),
  delItem: (gid, id) => deleteDoc(doc(db, 'groups', gid, 'items', id))
};
window.dispatchEvent(new Event('fbx-ready'));
