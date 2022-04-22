import React, {useState, useEffect} from "react";
import UseNav from "./hooks/useNav";
import styled from "styled-components";
import useModulos from "./hooks/useModulos";
import Footer from "./components/footer";

const ContainerCarrera=styled.section`
padding-top: 40px;
  width: 970px;
  margin: auto;
  margin-top: 100px;
  display: grid; 
  grid-template-columns: repeat(3, 1fr); 
  grid-template-rows: repeat(3, auto); 
  gap: 10px 50px; 
  grid-template-areas: 
    "Tcarrera Tcarrera Tcarrera"
    "Timg Ttexto Ttexto"
    "Tmodulos Tmodulos Tmodulos"; 
  place-content: center;
  place-items: center;
  justify-content: center;
  padding: 2em;

`;
const Tcarrera=styled.div`
    grid-area: Tcarrera;
    font-size: 30px;
    font-family: cursive;
    text-align: center;
`;

const Timg=styled.div`
    grid-area: Timg;
    img{
        width: 100%;
    }
`;

const Ttexto=styled.article`
    grid-area: Ttexto;
    text-align: justify;
`;
const Tmodulos=styled.section`
    display: grid; 
    grid-template-columns: repeat(4, 1fr); 
    grid-template-rows: repeat(3, 1fr); 
    gap: 9px 50px; 
    grid-template-areas: 
        "Mtitulo Mtitulo Mtitulo Mtitulo"
        "Modulo1 Modulo1 Modulo2 Modulo2"
        "Modulo3 Modulo3 . .";


    grid-area: Tmodulos; 
`;
const Mtitulo=styled.div`
    grid-area: Mtitulo;
    font-size: 25px;
    font-family: cursive;
    
`;

const BannerCarrera = styled.header`
    color: white;
    font-family: cursive;
    background-color: #000000e8;
    display: flex;
    flex-direction: column;
    justify-content: center;
   
    
    
`;
const BannerContenido=styled.div`
    
    background-image: url("https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/240503503_1816453598549449_4535030750637481398_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=wMfTtM_vLGQAX8O8d9H&_nc_ht=scontent-lim1-1.xx&oh=00_AT-gGLlRpQ4046GVwINA8pkTyEDWEjRPx5XDdy58yp0JDg&oe=626568CE");
    background-size: cover;
    height: 70vh;
    width: 970px;
    margin: auto;
    filter: opacity(0.5);
`;




export default function Carrera(){

    const [bCarrera, setBCarrera]=useState(false);

    const scrollcarrera=()=>{
        
        if(window.scrollY==0){
            console.log(window.scrollY);
            setBCarrera(false)
            
        }
        if(window.scrollY >=40){
            setBCarrera(true)
        }
        
        

    }
   
    
      useEffect(()=>{
            window.addEventListener('scroll',scrollcarrera)

        return ()=>{
            window.removeEventListener('scroll',scrollcarrera)
        }
      },[])


    return(
        <>
        {bCarrera?<><UseNav/>
        <ContainerCarrera>
            <Tcarrera><p>Carrera 1</p></Tcarrera>
            <Timg> <img src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/240503503_1816453598549449_4535030750637481398_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=wMfTtM_vLGQAX8O8d9H&_nc_ht=scontent-lim1-1.xx&oh=00_AT-gGLlRpQ4046GVwINA8pkTyEDWEjRPx5XDdy58yp0JDg&oe=626568CE" alt="" /> </Timg>
            <Ttexto>
                <p>Morbi vulputate nulla sollicitudin efficitur viverra. Vivamus odio turpis, varius vitae nunc vitae, laoreet elementum augue. Morbi lobortis dignissim ligula, vel viverra metus laoreet sed. Aliquam condimentum enim vitae augue feugiat, sed pretium odio consequat. In id consequat nulla, sit amet iaculis purus. Etiam faucibus pretium porttitor. Maecenas nec mollis elit. Mauris dictum eros eget augue mattis luctus. Curabitur pharetra feugiat dui a fringilla. Aenean commodo auctor est a accumsan. Donec dignissim ligula eget dapibus dapibus. Donec ipsum massa, efficitur eget orci vitae, accumsan efficitur tellus. Morbi tristique suscipit quam, vitae maximus risus commodo a. Maecenas pulvinar gravida sapien, sed aliquam nibh sodales quis. Donec porta elit euismod augue aliquam, vitae ullamcorper justo hendrerit.</p>
            </Ttexto>
            <Tmodulos>
                <Mtitulo>Nuestro Modulos</Mtitulo>
            </Tmodulos>
        </ContainerCarrera></>
        :<><BannerCarrera><Tcarrera><p>Carrera 1</p></Tcarrera><BannerContenido></BannerContenido></BannerCarrera><UseNav  />
        <ContainerCarrera>
            <Tcarrera></Tcarrera>
            <Timg></Timg>
            <Ttexto>
                <p>Morbi vulputate nulla sollicitudin efficitur viverra. Vivamus odio turpis, varius vitae nunc vitae, laoreet elementum augue. Morbi lobortis dignissim ligula, vel viverra metus laoreet sed. Aliquam condimentum enim vitae augue feugiat, sed pretium odio consequat. In id consequat nulla, sit amet iaculis purus. Etiam faucibus pretium porttitor. Maecenas nec mollis elit. Mauris dictum eros eget augue mattis luctus. Curabitur pharetra feugiat dui a fringilla. Aenean commodo auctor est a accumsan. Donec dignissim ligula eget dapibus dapibus. Donec ipsum massa, efficitur eget orci vitae, accumsan efficitur tellus. Morbi tristique suscipit quam, vitae maximus risus commodo a. Maecenas pulvinar gravida sapien, sed aliquam nibh sodales quis. Donec porta elit euismod augue aliquam, vitae ullamcorper justo hendrerit.</p>
            </Ttexto>
            <Tmodulos>
                <Mtitulo>Nuestro Modulos</Mtitulo>
            </Tmodulos>
        </ContainerCarrera></>

        }

        <Footer/>
        </>
    );
}