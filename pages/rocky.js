import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Rocky1 from '../public/Rocky/20170831-DSC03577.jpg'
import Rocky2 from '../public/Rocky/20170909-DSC03583.jpg'
import Rocky3 from '../public/Rocky/20170916-DSC03606.jpg'
import Rocky4 from '../public/Rocky/20171209-DSC04259.jpg'
import Rocky5 from '../public/Rocky/20190319-DSC05198.jpg'
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
      color: red;
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
  background-image: url('/Rocky/20170831-DSC03577.jpg');
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
    color: red;
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
        <title>Jereme Lentz|Rocky</title>
        <meta name="description" content="Jereme Lentz Photography - Rocky" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <h1><Link href="/">Jereme Lentz</Link></h1>
        <h2>Rocky</h2>
      </Header>
      
      <div className="sections">
        <h3>Rocky</h3>
        <Image src={Rocky1} alt="Profile of Rocky the dog on the couch, 2017" placeholder="blur" />
        <p>Rocky hanging on the couch, August, 2017.</p>
        <Image src={Rocky2} alt="Rocky basking in the sunlight on the couch, 2017" placeholder="blur" />
        <p>Basking in the morning light, September, 2017.</p>
        <Image src={Rocky3} alt="Taking Rocky for a walk through the Wharton State Forest in NJ after a small fire had just occurred" placeholder="blur" />
        <p>Wharton State Forest after a small forest fire, September, 2017.</p>
        <Image src={Rocky4} alt="Rocky with an orange beanie and blanket over him on the couch" placeholder="blur" />
        <p>Staying warm on the couch, December, 2017.</p>
        <Image src={Rocky5} alt="Rocky getting his chin scratched in the morning" placeholder="blur" />
        <p>Catching some chin scratches before work, March, 2019.</p>
      </div>
    </Wrapper>
  )
}