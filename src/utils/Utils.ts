import { arrayUnion, doc, setDoc, updateDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase/firebase'

interface chats {
    message: string,
    userid: number,
    profilePic?: string
}

// Add a new document in collection "cities"
export async function addDoctoDb() {

    await setDoc(doc(db, "chats", "LA"),
        { region: [] }
    )
}

export async function updateDocinDb(message: string, id: number): Promise<void> {
    const washingtonRef = doc(db, "chats", "LA");

    // Set the "capital" field of the city 'DC'
    await updateDoc(washingtonRef,
        { region: arrayUnion({ message, id }) }
    );

}

export async function getUsers() {
    const q = query(collection(db, "users"), where("name","==", "hello"));
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot,"snap")
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.data())
    });
}