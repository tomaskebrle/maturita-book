import { getBookFromBookId,firestore,auth, getComments, serverTimestamp, postToJSON, fromMillis} from "../../../lib/firebase";
import {useDocumentData} from "react-firebase-hooks/firestore"
import MetaTags from "@components/MetaTags"
import HeartButton from "@components/HeartButton"
import AuthCheck from "@components/AuthCheck"
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth"
import {useEffect} from "react"


export async function getServerSideProps({ query }) {
  const { bookid } = query;
  const bookDoc = await getBookFromBookId(bookid);
  const commentsSnapshot = await getComments(await bookDoc.data().id)

  let book = null;
  let comments = null;
  
  if (bookDoc) {
    book = bookDoc.data()
  }

  if(!bookDoc){
    return{ notFound:true}
  }

  if(commentsSnapshot){
    console.log(commentsSnapshot)
    let commentsArray = [];
    commentsSnapshot.forEach((doc) =>{
      let data = postToJSON(doc.data())
      commentsArray.push(data)
    })
    comments = commentsArray
  }

  if(!commentsSnapshot){
    return { notFound:true}
  }

  return {
    props: { book, comments}
  }
}

export default function BookPage({ book, comments}) {
  const bookRef = firestore.collection('books').doc(`${book.id}`);
  const [realtimePost] = useDocumentData(bookRef, book);
  const bookData = realtimePost || book;
  const [commentText, setCommentText] = useState()
  const [user] = useAuthState(auth);
  const [commentsData, setCommentsData] = useState([])

  
  useEffect(() => {
    setCommentsData(comments)
    console.log(commentsData)
  }, [])

  // Add Comment to firebase book collection
  function addComment(){
    console.log("addComment fired")
    firestore.collection('books').doc(`${book.id}`).collection("comments").add({
      author: { 
        uid : user.uid,
        name : user.displayName,
        
      },
      createdAt : serverTimestamp(),
      content : commentText
    })
    const d = new Date()
    setCommentsData([...comments,{
      author: { 
        uid : user.uid,
        name : user.displayName,
        
      },
      createdAt: d.getTime(),
      content : commentText
    }])
  }

  return (
    <section className="lg:grid lg:grid-cols-6 w-full">
      <MetaTags title={bookData.name} image={bookData.thumbnail} description={bookData.notes} />
      <div className="sidebar mx-4 max-w-full lg:col-span-1 p-4 bg-gray-100 rounded-md">
        <ul>
          <li className="">
            <h1 className="text-4xl">{bookData.name}</h1>
            <h2 className="text-gray-500 text-2xl">{bookData.author.replace(':', "")}</h2>
            <ul>
              <li>
                <b>Body: </b> {bookData.points}
              </li>
              <li>
                <b>Poznámky: </b> {bookData.notes}
              </li>
              <li><b>Počet Stránek: </b>{bookData.pages}</li>
            </ul>

            <div className="hearCheck">
             <AuthCheck>
               <HeartButton bookID={bookData.id}></HeartButton>
             </AuthCheck>
            </div>
          </li>
        </ul>
      </div>

      <div className="lg:col-span-5 w-8/12">
        <h1 className="font-bold text-3xl">
          Komentáře
        </h1>
        <div className="overflow-hidden w-8/12">
          <AuthCheck>
            <textarea onChange={(event) => setCommentText(event.target.value)} rows="6" className="border-gray-500 border-2 focus-within:border-green-700 rounded-md w-8/12"></textarea>
            <br />
            <button className="uppercase font-bold mt-2 rounded-md bg-green-700 shadow-md hover:shadow-lg duration-300 p-4 text-white flex my-4" onClick={addComment}>
              Přidat Komentář
            </button>
          </AuthCheck>
        </div>


        <div className="comment-feed mt-4">
          {commentsData ? commentsData.map((comment, index) => <CommentFeed comment={comment} key={index}/>) : null}
        </div>

      </div>
    </section >
  )

}

function CommentFeed({comment}){
  const ms = comment.createdAt
  const date = new Date(ms)
  const createdAt = date.toLocaleString('en-us', {day: "numeric",month:"numeric",year:"numeric"})
  return(
    <div className="comment bg-gray-200 rounded-md w-8/12 p-4 my-8 shadow">
      <div className="flex mb-1">
        <div className="name text-xs italic mr-2">{comment.author.name}</div>
        <div className="date text-xs">{createdAt}</div>
      </div>
      {comment.content}
    </div>
  )
}