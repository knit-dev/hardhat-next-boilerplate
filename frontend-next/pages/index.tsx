import type { NextPage } from 'next';
import Image from 'next/image';

import { Greeter } from '../components/Greeter';
import { Symfoni } from '../hardhat/SymfoniContext';

const Home: NextPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Symfoni autoInit={true} >
          <div className="App-logo-wrapper">
            <Image src="/logo.svg" className="App-logo" alt="logo" layout="fill" />
          </div>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Greeter></Greeter>
        </Symfoni>
      </header>
    </div>
  )
}

export default Home
