import { arrayUnion, doc, getDoc, setDoc, updateDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase/firebase'

interface chats {
    message: string,
    userid: number,
    profilePic?: string
}
export interface userList {
    name: string,
    id: string
}

export interface user {
    name: string,
    id: string,
    photo?: string
}
// Add a new document in collection "cities"
export async function addDoctoDb(ref : string) {
   
    const docRef = doc(db, "chats", ref);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        // docSnap.data() will be undefined in this case
        await setDoc(doc(db, "chats", ref), {
            chats: []
        });
    }
}

export async function updateDocinDb(ref: string ,data : {message:string, id: string}): Promise<void> {
    const docRef = doc(db, "chats", ref);
    await updateDoc(docRef,
        { chats: arrayUnion(data) }
    );

}

export async function getUsers(id: string) {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
}

export async function addUser(user: user) {
    const q = await setDoc(doc(db, "users", user.id), user);
}

export async function getAllChats(docRef : string) {
    const q = doc(db, "chats", docRef );
    const docSnap = await getDoc(q);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
}