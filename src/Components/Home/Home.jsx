import React, { useEffect } from "react";
import Banner from "./Banner";
import styled from "@emotion/styled";
import { Box} from "@mui/material";
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch  , useSelector} from "react-redux";
import AllItems from "./AllItems";
import Footers from "./Footer";

const Wrapper  = styled(Box)`
padding:20px 20px;
`;
const Component = styled(Box)`
background: #F2F2F2;
height:8px;
width:'100%';
overflow:'hidden';
`;

const Home=()=>{
  const {products} =  useSelector(state=> state.getProducts);
  console.log(products);
  
const dispatch = useDispatch();
    
    useEffect(()=> {
       dispatch(getProducts());
    }, [dispatch]);

    return(
        <>
    <Component>
    <Wrapper>

         <Banner/>
        <AllItems/>
        <AllItems/>
        <AllItems/>
</Wrapper>
        <Footers/>       
    </Component>
        </>
    )
}
export default Home;