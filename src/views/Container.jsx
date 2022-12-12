import React from 'react'
import { Footer } from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'
import TopBar from '../components/TopBar'

const Container = () => {
  return (
  <div>

  <div className="container-fluid">
    
  <TopBar/>


   <Header/>
  </div>
 <Layout/>
 <Footer/>
</div>


  )
}

export default Container