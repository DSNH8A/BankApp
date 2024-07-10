import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Billing from './components/Billing'
import Business from './components/Business'
import Button from './components/Button'
import CardDeal from './components/CardDeal'
import Clients from './components/Clients'
import CTA from './components/CTA'
import FeedBackCard from './components/FeedBAckCard'
import Footer from './components/Footer'
import GetStarted from './components/GetStarted'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import styles from './style'

function App() {
  return (
    <div className={`bg-black ${styles.wfull} ${styles.hiddenflow}`}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar></Navbar>
        </div>
      </div>

      <div className={`${styles.big} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero></Hero>
        </div>
      </div>

      <div className={`${styles.big} ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats></Stats>
          <Business></Business>
          <Billing></Billing>
          <CardDeal></CardDeal>
          <Testimonials></Testimonials>
          <Clients></Clients>
          <CTA></CTA>
          <Footer></Footer>
        </div>
      </div>
      <h1 className="to-black underline">Sanyika</h1>
    </div>
  );  
}

export default App
