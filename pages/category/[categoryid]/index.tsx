import { getBooksFromCategory } from "../../../lib/firebase";

/* export async function getServerSideProps({ query }) {
  const { categoryid } = query;
  console.log("bookcategory: " + categoryid);

  const books = await getBooksFromCategory(categoryid);
  return {
    props: { books },
  }
} */

export default function category() {
  return (
    <></>
  )
}
