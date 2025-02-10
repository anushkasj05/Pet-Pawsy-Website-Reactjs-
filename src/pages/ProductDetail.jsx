import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { addtoCart } from '../cartSlice';
import axios from "axios";
const ProductDetail=()=>{
    const {id} = useParams();
    const [mydata, setMydata]= useState({});
    const dispatch= useDispatch();
    const loadData=async()=>{
     let api=`http://localhost:3000/product/${id}`;
     const res= await axios.get(api);
     console.log(res.data);
     setMydata(res.data);
    }

    useEffect(()=>{
      loadData();
    }, [])
    return(
        <>
          <h1> Product Detail: </h1>
          <div id="myproduct">
            <div>
            <img src={mydata.image}  width="300px" height="300px"/>
            </div>
            <div>
              <h2> Product name : {mydata.name}</h2>
              <h3 style={{color:"red"}}> Price : {mydata.price} </h3>
              <h4> Description : {mydata.description}</h4>

              <Button variant="primary" 
        onClick={()=>{dispatch(addtoCart({id:mydata.id, name:mydata.name, desc:mydata.description, price:mydata.price, image:mydata.image, qnty:1}))}}>
          add to Cart</Button>
            </div>
          </div>
        </>
    )
}
export default ProductDetail;