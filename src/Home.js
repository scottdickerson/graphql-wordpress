import React from 'react'
import Projects from './Projects'
import Services from './Services'
import About from './About'
import Banner from './Banner'
import DataSets from './DataSets'
import Footer from './styled/Footer'
import Contact from './Contact'

function Home({dark}) {
    return (
        <div className={dark ? 'dark' : 'light'}>
            <Banner dark={dark}/>
            <About />
            <DataSets />
            <Services dark={dark}/>
            <Projects />
            <Contact />
            <Footer dark={dark}/>
        </div>
    )
}

export default Home
