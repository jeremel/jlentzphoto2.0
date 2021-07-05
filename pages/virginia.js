import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import virginia1 from '../public/Virginia/20170804-DSC03310.jpg'
import virginia2 from '../public/Virginia/20170804-DSC03324.jpg'
import virginia3 from '../public/Virginia/20170805-DSC03381.jpg'
import virginia4 from '../public/Virginia/20170806-DSC03493.jpg'
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
      color: blue;
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
  background-image: url('/Virginia/20170804-DSC03323.jpg');
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
    color: blue;
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
        <title>Jereme Lentz|Virginia</title>
        <meta name="description" content="Jereme Lentz Photography - Virginia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <h1><Link href="/">Jereme Lentz</Link></h1>
        <h2>Virginia</h2>
      </Header>
      
      <div className="sections">
        <h3>Shenandoah Valley, Blue Ridge Mountains, Virginia</h3>
        <Image src={virginia1} alt="Dead tree overlook from the Blue Ridge Parkway looking out at the Blue Ridge Mountains, Virginia" placeholder="blur" />
        <p>Rolling Blue Ridge Mountains, Blue Ridge Parkway, Shenandoah Valley, Virginia</p>
        <Image src={virginia2} alt="A view of the valley between the Blue Ridge Mountains from the Blue Ridge Parkway, Virginia" placeholder="blur" />
        <p>Valley view, Blue Ridge Parkway, Shenandoah Valley, Virginia</p>
        <Image src={virginia3} alt="Looking down at my coffee and magazine that I'm reading on the deck, Massanutten, Virginia" placeholder="blur" />
        <p>Coffee and light reading material, Massanutten, Virginia</p>
        <Image src={virginia4} alt="Kylene portrait from the ridge trail at Massanutten Resort, Virginia" placeholder="blur" />
        <p>Kylene, Ridge Trail, Massanutten, Virginia</p>
      </div>
    </Wrapper>
  )
}