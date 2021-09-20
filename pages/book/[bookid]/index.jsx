import { getBookFromBookId,firestore,db } from "../../../lib/firebase";
import {useDocumentData} from "react-firebase-hooks/firestore"
import MetaTags from "@components/MetaTags"
import HeartButton from "@components/HeartButton"
import AuthCheck from "@components/AuthCheck"

export async function getServerSideProps({ query }) {
  const { bookid } = query;

  const bookDoc = await getBookFromBookId(bookid);
  let book = null;
  if (bookDoc) {
    book = bookDoc.data()
  }

  if(!bookDoc){
    return{ notFound:true}
  }


  return {
    props: { book },
  }
}

export default function category({ book }) {
  const bookRef = firestore.collection('books').doc(`${book.id}`);
  const [realtimePost] = useDocumentData(bookRef, book);
  const bookData = realtimePost || book;

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
    </section >
  )
}

