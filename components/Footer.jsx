import React, { Component } from 'react';
import Link from "next/link"

export class Footer extends Component {
	render() {
		return (
			<footer className='max-w-screen min-w-screen grid bg-black text-white p-8 grid-cols-2 gap-8 mt-8'>
				<section>
					<h1 className='font-bold text-3xl mb-4'>O této stránce</h1>
					<p>
						Tuhle stránku jsem vytvořil pro usnadnění výběru knížek na maturitu.
					</p>
				</section> 
          <section>
            <h1 className="font-bold text-3xl mb-4">Odkazy</h1>
            <ul>
              <li className="text-gray-400 hover:text-white">
                <Link href="https://github.com/Kendy205/maturita-book" >Github</Link>
              </li>
              <li className="text-gray-400 hover:text-white">
                <Link href="https://www.glouny.cz/?s=458">Seznam četby</Link>
              </li>
            </ul>
          </section>
			</footer>
		);
	}
}

export default Footer;
