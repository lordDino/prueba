import React from "react";
import styled from "styled-components";
import {RiFilePaper2Fill} from "@react-icons/all-files/ri/RiFilePaper2Fill"



const PorqueEstudiar=styled.section`
 text-align: center;
 background-color: aliceblue;
 
`;
const ContenidoEstudiar=styled.div`
    display: flex;
    flex-direction: column;
    width: 970px;
    height: 100%;
    margin: auto;
    
    i{
        svg{
         font-size: 80px;
     }
 }
`;

export default function Estudiar(){

    return(
        <>
        
        <PorqueEstudiar>
            <ContenidoEstudiar>
                <h2>Porque estudiar con nosotros</h2>
                <i><RiFilePaper2Fill/></i>
                <p>Somos una comunidad educativa con presencia en la provincia de Espinar, contamos con un modelo de formación profesional que garantiza la mejor enseñanza educativa, para que seas un profesional altamente competitivo.</p>
            </ContenidoEstudiar>
            
        </PorqueEstudiar>
        </>
    )

}