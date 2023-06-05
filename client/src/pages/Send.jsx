import React from 'react'
import styled from "styled-components";
export const Send = () => {
  return (
    <Styledcontainer>
    <form action="http://localhost:5000/product/createProduct" method='post' encType="multipart/form-data">
       <input type="file" multiple name='productImages'/>
       <input type='text' name='shortDescription' placeholder='shortDescription'/>
       <input type='text' name='longDescription' placeholder='longDescription'/>
       <input type='number' name='price' placeholder='price'/>
       <input type='number' name='quantity' placeholder='quantity'/>
       <input type='text' name='category' placeholder='category'/>
       <input type='text' name='productName' placeholder='productName'/>
       
       <button>send</button>
      </form>
    </Styledcontainer>
  )
}


const Styledcontainer= styled.div`
  margin-bottom: -80px;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: multiply;
  overflow: hidden;
  opacity: 0.97;
  width: 100%;
  height: 100vh;
  float: none;
  display: flex;
  align-items: center;
  justify-content: center;
`