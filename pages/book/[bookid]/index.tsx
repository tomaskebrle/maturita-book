import { getBookFromBookId } from "../../../lib/firebase";

export async function getServerSideProps({ query }) {
  const { bookid } = query;

  const bookDoc = await getBookFromBookId(bookid);

  let book = null;
  if (bookDoc) {
    book = bookDoc.data()
  }


  return {
    props: { book: book },
  }
}

export default function category({ book }) {
  let bookPoints = book.points;
  return (
    <section className="grid">
      <div className="sidebar w-72 mx-4 p-4 bg-gray-100 rounded-md">
        <ul>
          <li className="w-full flex justify-center mb-8">
            <img src={book.thumbnail} alt="" className="mx-8" />
          </li>
          <li className="">
            <h1 className="text-4xl">{book.name}</h1>
            <h2 className="text-gray-500 text-2xl">{book.author.replace(':', "")}</h2>
            <ul>
              <li>
                <b>Body: </b> {book.points}
              </li>
              <li>
                <b>Poznámky: </b> {book.notes}
              </li>
              <li><b>Počet Stránek: </b>{book.pages}</li>
            </ul>

            <div className="flex">
              <button className="bg-green-500 text-white p-1 grid place-items-center m-1 rounded-sm select-none" onClick={() => { }}>
                <span className="material-icons">
                  expand_less
                </span>
              </button>
              <div className="p-1.5">{book.points}</div>
              <button className="bg-red-500 text-white p-1 grid place-items-center m-1 rounded-sm select-none" onClick={() => { bookPoints-- }}>
                <span className="material-icons">
                  expand_more
                </span>
              </button>
            </div>
          </li>
        </ul>

      </div>

    </section>
  )
  let increasePoint = () => {
    book.point++;
  }
  let decreasePoint = () => {
    book.point--;
  }
}

