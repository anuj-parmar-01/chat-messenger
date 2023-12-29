import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from '../firebase/firebase'

interface chats {
    message : string,
    userid : number ,
    profilePic? : string
}

// Add a new document in collection "cities"
export async function addDoctoDb() {

    await setDoc(doc(db, "chats", "LA"), 
   { region: []}
    )
}

export async function updateDocinDb(message: string, id:number) {
    const washingtonRef = doc(db, "chats", "LA");

    // Set the "capital" field of the city 'DC'
    await updateDoc(washingtonRef, 
       { region : arrayUnion({message, id})}
        );
}