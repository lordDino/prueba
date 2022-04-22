import React, {useEffect,useState, useRef } from "react";
import styled from "styled-components";
import {FaWhatsapp} from "@react-icons/all-files/Fa/FaWhatsapp";
import {MdMailOutline} from "@react-icons/all-files/md/MdMailOutline";
import {RiFacebookCircleLine} from "@react-icons/all-files/ri/RiFacebookCircleLine";
import {RiBankLine} from "@react-icons/all-files/ri/RiBankLine";
import UseNav from "../hooks/useNav";
let nombreInsituto="Instituto Superior Politecnico Del sur Espinar";

const HeaderContainer = styled.header`
    color: white;
    font-family: cursive;
    background-color: #02931c;
    background-image: url("https://scontent-lim1-1.xx.fbcdn.net/v/t1.18169-9/25299120_751675378360615_4932464909154436560_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=_KwO5m71CJEAX_2xyIM&_nc_ht=scontent-lim1-1.xx&oh=00_AT8bdrSW0AcUQw8oA60AIo71Xko9biXryIII0txvphArIg&oe=62855A95");
    height: 80vh;
    width: 100%;
    
    display: flex;
    flex-direction: column;
`;

const HeaderContacto = styled.nav`
    background: #000000db;
    height: 2.5rem;
    padding: 0.5rem 10px;
    text-align: center;
    display: grid;
    grid-auto-flow: column; 
    grid-template-columns: 2fr repeat(2, 0.2fr);  
    gap: 0px 0px; 
    grid-template-areas: 
    ". . .";
    svg{
        font-size: 20px;
    }
    span{
        text-align: right;
        cursor: pointer;
    }
    span svg{
        margin-left: 1px;
    }

`;

const ContainerBanner= styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
    

    .itembanner{
        
        width: 50%;
    }
    
    .imgbanner{
        border-radius: 50% 50% 0 / 50% 0 0 50%;
        
        display: flex;
        color: transparent;
        
        flex-direction:column;
        justify-content: center;
        text-align:center;
        transition:all 3s ease-out 2s;
        
        
        &.active{
            color: #fff;
            background-color: #02931c;
            border: 5px solid #fff;
        }


        i{
            svg{
                font-size: 50px;
            }
        }
        h2{
            float: left;
            color: #fff;
            position: relative;
            font-size: 25px;

            span{
                position: absolute;
                right: 0;
                width: 0;
                
                background-color: #02931c;
                border-left: 1px solid #000;
                animation: maquina 5s infinite alternate 5s steps(${nombreInsituto.length});
            }
        }
        @keyframes maquina {
            from{
                width: 100%;
            }
            to{
                width: 0;
            }
        }
    }
   

`;

export default function Header(){
    const banner =useRef(null);

    const [verText, setVerText] =useState(false);
    

  

    useEffect(()=>{
        setVerText(true);

    },[]);

    return(
       
        <>
         <HeaderContainer ref={banner} >
             
             <HeaderContacto>
             
                 <span><MdMailOutline/> contacto@politecnicodelsur.com</span>
                 <a href="#"><FaWhatsapp /></a>
                 <a href="#"><RiFacebookCircleLine/></a>
                 

             </HeaderContacto>
             <ContainerBanner>
                <div className="itembanner textbanner"></div>
                
                <div  className={`itembanner imgbanner ${verText? 'active' : ''}`} >
                    <i><RiBankLine/></i>
                    <h2>Instituto Superior Politecnico Del sur Espinar <span>&#160;</span> </h2>
                    <p>¡Somos Calidad...!</p>
                </div>
                
                
                
             </ContainerBanner>
             
        </HeaderContainer>
        <UseNav/>
        </>
    )
}



