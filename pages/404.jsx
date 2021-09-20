import Link from "next/link"

export default function Custom404() {
  return (
    <div className="full-page grid place-items-center">
      <div className="text-2xl font-bold">
        Tahle knížka asi není v maturitní četbě 😕
        <br />
        <Link href="/">
          <div className="w-full grid place-items-center">
            <button className="grid place-items-center p-4 rounded-md m-4 font-bold bg-green-700 uppercase shadow-md text-white text-base hover:shadow-lg duration-300">
              Zpátky na Domovskou stránku
            </button>
          </div>
        </Link>
      </div>
      

      <div className="text-gray-700">
        Myslíš si že je to chyba? Napiš nám sem a my se to pokusíme vyřešit
      </div>
    </div>
  )
}
