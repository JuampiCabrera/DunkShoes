import { getFirestore, collection, getDocs, query, where, getDoc, doc } from "firebase/firestore";
import {app} from "./config"

const db = getFirestore(app);


export const getItems = async () => {
    const querySnapshot = await getDocs(collection(db, 'items'))

    const items = []

    querySnapshot.forEach((doc) => {
    items.push(doc.data());
});

return items

}

export const getCategoryItems = async (id) => {
    const q = query(collection(db, "items"), where("category", "==", id));

    const items = []

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
    items.push(doc.data())
});
return items
}

export const getDetail = async (id) => {
    const docRef = doc(db, "items", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
    return docSnap.data()
    } else {
    console.log("No such document!");
    }
}