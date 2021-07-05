import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import forsythe1 from '../public/Forsythe/20180929-DSC04812.jpg'
import forsythe2 from '../public/Forsythe/20180929-DSC04813.jpg'
import forsythe3 from '../public/Forsythe/20180929-DSC04888.jpg'
import forsythe4 from '../public/Forsythe/20180929-DSC04889.jpg'
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
      color: green;
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
  background-image: url('/Forsythe/20180929-DSC04812.jpg');
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
    color: green;
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

export default function Rocky() {
  return (
    <Wrapper>
      <Head>
        <title>Jereme Lentz|Forsythe</title>
        <meta name="description" content="Jereme Lentz Photography - Forsythe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <h1><Link href="/">Jereme Lentz</Link></h1>
        <h2>Edwin B. Forsythe National Wildlife Refuge</h2>
        <h2>Galloway, NJ</h2>
      </Header>
      
      <div className="sections">
        <h3>Edwin B. Forsythe National Wildlife Refuge</h3>
        <Image src={forsythe1} alt="A flock of seagulls flying over wetlands, September, 2018" placeholder="blur" />
        <p>Seagulls flying over the wetlands, September, 2018.</p>
        <Image src={forsythe2} alt="More seagulls, more wetlands, September, 2018" placeholder="blur" />
        <p>More seagulls, more wetlands, September, 2018.</p>
        <Image src={forsythe3} alt="A view across the bay of Harrahs Atlantic City Resort from Forsythe, September, 2018" placeholder="blur" />
        <p>Harrah Atlantic City Resort as viewed from Forsythe, September, 2018.</p>
        <Image src={forsythe4} alt="Ocean Casino Resort as viewed from across the bay at Forsythe, Sepembter, 2018" placeholder="blur" />
        <p>Ocean Casino Resort, Atlantic City from across the bay at Forsythe, September, 2018.</p>
      </div>
    </Wrapper>
  )
}