import {firestore,auth,increment} from "../lib/firebase"
import {useDocument} from "react-firebase-hooks/firestore"
export default function HeartButton({bookID}) {
  const bookRef = firestore.collection('books').doc(`${bookID}`)
  const heartRef = bookRef.collection('hearts').doc(auth.currentUser.uid)
  const [heartDoc] = useDocument(heartRef)

  const addHeart = async () =>{
    const uid =  auth.currentUser.uid;
    const batch = firestore.batch()
    batch.update(bookRef, {points : increment(1)});
    batch.set(heartRef, {uid})

    await batch.commit();
  }

  const removeHeart = async () =>{
    const batch = firestore.batch()
    batch.update(bookRef, {points : increment(-1)});
    batch.delete(heartRef)

    await batch.commit();
  }

  return heartDoc?.exists ? (<button onClick={removeHeart}>💔 Nelíbí se</button>) : (<button onClick={addHeart}>💓 Líbí se</button>)
}
