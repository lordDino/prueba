import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './components/header'
import Estudiar from './components/Estudiar'
import Carreras from './components/Carreras'
import ComuBlog from './components/ComuBlog'
import Galeria from './components/Galeria'
import Footer from './components/footer'

import styled from 'styled-components'

const ContainerGeneral=styled.div`
  width: 1024px;
  height: 100vh;
  margin: auto;
  border-radius:20px;
  border:2px solid #fff;
`;

export default function Home() {
  return (
    <>
    
    <Header/>
    <Estudiar/>
    <Carreras/>
    <ComuBlog/>
    <Galeria/>
    <Footer/>
    

    
   
    

    </>
  )
}
