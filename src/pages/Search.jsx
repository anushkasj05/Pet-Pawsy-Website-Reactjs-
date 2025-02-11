import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { addtoCart } from '../cartSlice';
import { useNavigate } from 'react-router-dom';
const Search=()=>{
    const [mypro, setMypro]= useState("");
    const [prodata, setProData]= useState([]);
    const dispatch= useDispatch();
const navigate= useNavigate();
const loadData=async(e)=>{
    setMypro(e.target.value)
    let api="http://localhost:3000/product";
    const response= await axios.get(api);
    console.log(response.data);
    setProData(response.data);
}

const ans= prodata.map((key)=>{
       const mystr= key.name.toLowerCase();
       const myproduct= mypro.toLowerCase();
       const status= mystr.includes(myproduct) ;
       console.log(status);
       if (status)
       {
    return(
        <>
          <Card style={{ width: '16rem', marginTop:"20px" }}>
      <Card.Img variant="top" src={key.image} style={{height:"300px"}}
      onClick={()=>{navigate(`/prodetail/${key.id}`)}} />
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
           {key.description}
           <h4> Price : {key.price}</h4>
        </Card.Text>
        <Button variant="primary" 
        onClick={()=>{dispatch(addtoCart({id:key.id, name:key.name, desc:key.description, price:key.price, image:key.image, qnty:1}))}}>
          add to Cart</Button>
      </Card.Body>
    </Card>
        
        </>
    )
}
})

    return(
        <>
          <h1> Search Product</h1>   
          Enter Product name : <input type="text" value={mypro} onChange={loadData} />
          <hr />

<div id="cardData">
{ans}
</div>   
        </>
    )
}

export default Search;