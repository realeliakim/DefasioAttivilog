import styled from 'styled-components';

export const Modal = styled.div`

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0,0,0, 0.7);
  z-index: 999;

  .close{
    background-color: #e1053d;
    border: 0;
    width: 10%;
    color: #fff;
    position: absolute;
    top: 10px;
    right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px 15px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }

  .fechar svg{
    position: absolute;
    top: 15px;
    right: 40px;
    z-index: 999;
  }

`

export const Container = styled.div`

  margin: 0 auto;
  padding: 0;
  width: 100%;
  position: absolute;
  top: 15%;

  h2{
    color: #fff;
    text-align: center;
  }

`

export const Table = styled.table`

  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0 auto;
  padding: 0;
  width: 70%;
  position: absolute;
  top: 10%;
  left: 15%;
  

  caption{
    font-size: 1.5em;
    margin: .5 0 .75em;
  }

  tr{
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    padding: .35em;
  }

  tr:hover:not(:first-child){
    background-color: #fff;
  }

  th, td{
    padding: .62em;
    text-align: center;
  }

  th{
    font-size: 1.1em;
    letter-spacing: normal.1em;
    text-transform: uppercase;
  }

  th:first-child{
    width: 10%;
  }

  td{
    font-size: 1.2em;
  }

`