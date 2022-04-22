import Link from "next/link";
import React from "react";
import styled from "styled-components";



const NavMenu=styled.nav`
    background-color: black;
    height: 80px;
    width: 100%;
    
    display: flex;
    
    justify-content: flex-end;
    padding: 5px;
    font-family: cursive;
    position: sticky;
    top: 0;
    z-index: 10;

    ul{
        display: flex;
        
        justify-content: space-around;
        align-content:space-around;
        width: 970px;
        margin: 0 100px;
        padding: 15px;
        li{
            position: relative;
        }
    }

    a{
        color:#fff;
        
    }
    a:hover{
        color: #ea9d00;
        border-bottom: 1px solid #fff;
        transition: opacity 1s ease 0s;
    }
    .subCarreras{
        display: flex;
        display: none;
        flex-direction: column;
        background-color: #ea9d00;
        position: absolute;
        width: 220px;
        height: 160px;
        top: 120%;

        a:hover{
            color: green;
        }
    }

`;


export default function useNav(){

    return(
        <>
        <NavMenu>
            
            <ul>
            
                <li>
                    <Link href="/">
                     <a>Inicio</a>
                    </Link>
                </li>  
                <li>
                    <Link href="/Carrera">
                    <a>Carreras</a>
                    </Link>
                    <ul className="subCarreras" >
                        <li> <a href="#">Construccion Civil</a></li>
                        <li><a href="#">Gestion Ambiental</a></li>
                    </ul>
                </li>
                <li>
                    <Link href="/Page">
                        <a>acerca</a>
                    </Link>
                </li>
                <li>
                    <a href="#">Nosotros</a>
                </li>
                <li>
                    <a href="#">Buscar Certifidado</a>
                </li>
            </ul>
            
        </NavMenu>
        </>
    );
}