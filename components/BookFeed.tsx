import { useState, useEffect } from "react"
import Link from "next/link"
export default function BookFeed({ books }) {

  const [sortValue, setSortValue] = useState("points");
  const [sortType, setSortType] = useState("lowest")
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    setFilteredData(books)
  }, [])
  // Search
  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    result = books.filter((data) => {
      let name = data.name.toLowerCase();
      let authorName = data.author.toLowerCase();
      return name.search(value) != -1 || authorName.search(value) != -1;
    });
    setFilteredData(result);
  }

  // Sorting for values
  useEffect(() => {
    const sortArray = value => {
      console.log("sorting by value: " + value);
      const values = {
        points: 'points',
        pages: 'pages',
      };
      let sorted;
      console.log(filteredData)
      if (filteredData !== undefined) {
        if (filteredData.length > 0) {
          const sortProperty = values[value];
          if (sortType == "highest") {
            sorted = [...filteredData].sort((a, b) => b[sortProperty] - a[sortProperty]);
          } else {
            sorted = [...filteredData].sort((a, b) => a[sortProperty] - b[sortProperty]);
          }
          setFilteredData(sorted);
        } else {
          console.log("set to books")
          console.log(books)
          setFilteredData(books)
        }

      } else {
        console.log("set to books")
        console.log(books.length)
        setFilteredData(books)
      }

    };
    sortArray(sortValue)
  }, [sortValue])
  // Sorting for types
  useEffect(() => {
    const sortArray = value => {
      const sortTypes = {
        lowest: 'lowest',
        highest: 'highest',
      };
      const values = {
        lowest: 'points',
        pages: 'pages',
      };
      let sorted;
      //Data ifs
      if (filteredData !== undefined) {
        if (filteredData.length > 0) {
          const sortProperty = values[sortValue];
          const sort = sortTypes[value]
          //Sorting if
          if (sort == "highest") {
            sorted = [...filteredData].sort((a, b) => b[sortProperty] - a[sortProperty]);
          } else {
            sorted = [...filteredData].sort((a, b) => a[sortProperty] - b[sortProperty]);
          }
          console.log("zfiltorvano")
          setFilteredData(sorted);
        }
        else {
          console.log("set to books")
          console.log(books)
          setFilteredData(books)
        }

      } else {
        console.log("set to books")
        console.log(books.length)
        setFilteredData(books)
      }

    };
    sortArray(sortType)
  }, [sortType])


  return (
    <>
      <div className="search xl:w-3/6 w-full md:flex grid place-items-center">
        <input type="text" className="my-2 border-2 w-full rounded-md p-2 focus:border-green-700 focus:outline-none border-gray-500" onChange={(event) => handleSearch(event)} placeholder="Hledej mezi knížkama a autory" />

        <div className="sortby flex-initial mx-4 text-lg py-1.5">
          <b className="uppercase">Seřadit podle</b>
          <select className="flex-auto" onChange={(e) => setSortValue(e.target.value)}>
            <option value="points">Bodů</option>
            <option value="pages">Počet Stránek</option>
          </select>
        </div>

        <div className="sortby flex-initial mx-4 text-lg py-1.5">
          <b className="uppercase">Od</b>
          <select className="flex-auto" onChange={(e) => setSortType(e.target.value)}>
            <option value="lowest">Nejmenšího po největší</option>
            <option value="highest">Největšího po nejmenší</option>
          </select>
        </div>
      </div>

      {filteredData ? filteredData.map((book) => <BookItem key={book.name_id} book={book}></BookItem>) : null}
    </>
  )
}

function BookItem({ book }) {
  return (
    <Link href={`/book/${book.name_id}`}>
      <div className="book-item p-4 xl:w-3/6  w-full rounded-md shadow-md hover:shadow-xl duration-300 m-4 cursor-pointer">
        <ul className="flex">
          <li>
            <img src={book.thumbnail} alt="" className="w-24" />
          </li>
          <li className="mx-4">
            <h1 className="text-2xl">{book.name}</h1>
            <h2 className="text-gray-500 text-lg">{book.author}</h2>
            <ul>
              <li>
                <b>Body: </b> {book.points}
              </li>
              <li>
                <b>Počet stránek: </b> {book.pages}
              </li>
              <li>
                <b>Poznámky: </b> {book.note}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </Link>
  )
}
