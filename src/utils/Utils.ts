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
   name : string,
   id : string,
   photo? : string
}
// Add a new document in collection "cities"
export async function addDoctoDb() {

    await setDoc(doc(db, "chats", "LA"),
        { region: [] }
    )
}

export async function updateDocinDb(message: string, sender : user): Promise<void> {
    const docRef = doc(db, "chats", "LA");
    await updateDoc(docRef,
        { chats: arrayUnion({ message , name : sender.name}) }
    );

}

export async function getUsers() {
    const q = query(collection(db, "users"), where("name", "==", "hello"));
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot, "snap")
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.data())
    });
}

export async function addUser(user: user){
    const q = 
    await setDoc(doc(db, "users", user.id), user);
}

export async function getAllChats(userId: string, friendId: string) {
    const q = doc(db, "chats", userId + friendId);
    const docSnap = await getDoc(q);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
}