import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import croatia1 from '../public/Croatia/05-26-2021-13.jpg'
import croatia2 from '../public/Croatia/05-26-2021-12.jpg'
import croatia3 from '../public/Croatia/05-26-2021-11.jpg'
import croatia4 from '../public/Croatia/05-26-2021-10.jpg'
import styled from 'styled-components'

const Wrapper = styled.div`
  diplay: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0 7rem;

  h3 {
      font-size: 4rem;
      padding: 0;
      margin: 1rem 0;
      color: orange;
      text-align: center;
  }

  p {
    margin: 0.25rem 0;
    padding: 0;
    font-weight: 400;
    font-size: 1.25rem;
    
    span {
        font-weight: 600;
    }
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
    color: orange;
    padding-top: 1.5rem;
  }

  }

  

  @media(max-width: 1000px) {
    height: 52vh;

    h1 {
      padding: 0;
      // margin-top:-1rem;
    }

    h2 {
      margin-top: -2rem;
    }
  }
`;

export default function Croatia() {
  return (
    <Wrapper>
      <Head>
        <title>Jereme Lentz|Croatia</title>
        <meta name="description" content="Jereme Lentz Photography - Croatia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <h1><Link href="/">Jereme Lentz</Link></h1>
        <h2>Croatia</h2>
      </Header>
      <p><span>Above:</span> Feet hanging off the bulkhead, Zadar Croatia. 2019.</p>
      
      <div className="sections">
        <h3>Dubrovnik</h3>
        <Image src={croatia1} alt="Old City, Dubrovnik, Croatia" placeholder="blur" />
        <p>Shot from above, Old City, Dubrovnik, Croatia</p>
        <Image src={croatia2} alt="Another view of the Old City, Dubrovnik, Croatia" placeholder="blur" />
        <p>Another shot from above, Old City, Dubrovnik, Croatia</p>
        <Image src={croatia3} alt="Rooftops of the Old City, Dubrovnik, Croatia" placeholder="blur" />
        <p>Rooftops of the Old City and a view of the Adriatic Sea, Dubrovnik, Croatia</p>
        <Image src={croatia4} alt="Buža Bar, Old City, Dubrovnik, Croatia" placeholder="blur" />
        <p>Drinking an Ožujsko at Buža Bar, Dubrovnik, Croatia</p>
      </div>
    </Wrapper>
  )
}