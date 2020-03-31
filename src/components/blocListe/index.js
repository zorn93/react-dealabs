import React from "react";
import styled from "styled-components";
import BlocArticle from "./components/blocArticle";

function blocListe() {

  return (

    <ContenuListe>
      <BlockParcourir>
        Parcourir
      </BlockParcourir>
      <BlocArticle />
    </ContenuListe>
  );
}

const BlocBock = styled.div`
    justify-content: center;
    box-sizing: border-box;
    background-color: blue;
    margin-top: 44px;
    margin-left: 17px;
    padding: 30px;
    padding-left: 80px;
`;

const BlockParcourir = styled.div`
    box-sizing: border-box;
    margin-left: 17px;
    margin-top: -66px;
    border: 0;
    outline: 0;
    font: inherit;
    vertical-align: baseline;
    text-align: inherit;
    color: inherit;
    background: transparent;
    font-weight: bold;
`

const ContenuListe = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 130px;
    margin-bottom: 10px;
    background-color: #fff;
    box-shadow: rgba(2, 8, 20, 0.1) 0px 0.175em 0.5em, rgba(2, 8, 20, 0.08) 0px 0.085em 0.175em;
    font-size: inherit;
    font-weight: 400;
    line-height: 1.6;
    transition: box-shadow 0.15s ease 0s, transform 0.15s ease 0s, -webkit-box-shadow 0.15s ease 0s, -webkit-transform 0.15s ease 0s;
    overflow: hidden;
`

export default blocListe;