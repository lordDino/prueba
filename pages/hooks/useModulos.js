import React from "react";
import styled from "styled-components";
const Modulo1=styled.div`
    grid-area: Modulo1;
    display: flex;
    flex-direction: column;
`;
export default function useModulos(props){

    return(
        <>
            <Modulo1>
                <img src={props.imgModulo} alt="" />
                <p>{props.tituloModulo}</p>
            </Modulo1>
        </>
    );
}