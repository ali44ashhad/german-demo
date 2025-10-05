import React from 'react' 
import Hero from '../components/home/Hero'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Services from '../components/home/Services'
import SuccessStories from '../components/home/SuccessStories'
import Process from '../components/home/Process'
import Contact from '../components/home/Contact'

function Home() {
  return (
    <div>
      <Hero />
        <WhyChooseUs />
        <Services />
        <SuccessStories />
        <Process />
        <Contact />
    </div>
  )
}

export default Home
