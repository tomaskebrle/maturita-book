import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { firestore, postToJSONWithoutMilis } from '../lib/firebase';
import { useState } from 'react';
import BookFeed from '../components/BookFeed'
import Loader from '../components/Loader';

/* export async function getServerSideProps(context) {
  const booksQuery = firestore.collection('books').orderBy("points", "desc")
  const books = (await booksQuery.get()).docs.map(postToJSONWithoutMilis)
  return { props: { books } }
}
 */

export async function getStaticProps(context) {
  const booksQuery = firestore.collection('books').orderBy("points", "desc")
  const books = (await booksQuery.get()).docs.map(postToJSONWithoutMilis)
  return {
    props: {
      books,
    },
    revalidate: 60 * 10,
  };
}

export default function Home(props) {
  const [books, setBooks] = useState(props.books);
  const [loading, setLoading] = useState(false)
  const [booksEnd, setBooksEnd] = useState(false)



  return (
    <main>

      <div className="grid place-items-center">
        <BookFeed books={books} />
      </div>

      <Loader show={loading} />
      {booksEnd && "To jsou všechny knížky"}
    </main>
  )
}
