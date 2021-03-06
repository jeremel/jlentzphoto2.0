import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import Footer from '../Components/Footer'

const Wrapper = styled.div`
  diplay: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0 7rem;

  h3 {
    font-size: 3rem;
    padding: 0;
    margin: 0;
    color: orange;
    text-align: center;

    a:hover {
      opacity: 0.7;
      text-decoration: underline;
    }

    a:active {
      color: black;
    }
  }

  .virginia {
    color: blue;
  }

  .rocky {
    color: red;
  }

  .forsythe {
    color: green;
  }

  @media(max-width: 1000px) {
    padding: 1rem;
  }
`;

const Header = styled.div`
  background-image: url('/Croatia/05-26-2021-20.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  height: 100vh;

  h1 {
    text-align: center;
    font-size: 5rem;
    padding: 0;
    margin: 0;
    color: #fff;
    padding-top: 4rem;
  }

  h2 {
    text-align: center;
    font-size: 3rem;
    padding: 0;
    margin: 0;
    color: #fff;
    padding-top: 1.5rem;
  }

  @media(max-width: 1000px) {
    height: 52vh;

    h1 {
      padding: 0;
      // margin-top:-1rem;
    }

    h2 {
      // display: none;
      margin-top: -2rem;
    }
  }
`;

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Jereme Lentz|Photography</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <h1><Link href="/">Jereme Lentz</Link></h1>
        <h2><a href="/#photography">Photography</a></h2>
      </Header>
      <div className="sections" id="photography">
        <h3><Link href="croatia">Croatia</Link></h3>
        <h3 className="virginia"><Link href="virginia">Virginia</Link></h3>
        <h3 className="forsythe"><Link href="forsythe">Edwin B Forsythe</Link></h3>
        <h3 className="rocky"><Link href="rocky">Rocky</Link></h3> 
      </div>
      <Footer />
    </Wrapper>
  )
}
