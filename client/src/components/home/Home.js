import { Box,styled } from "@mui/material";
import Banner from "./Banner";
import NavBar from "./NavBar";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

import React, { useEffect } from "react";
import { getProducts as listProducts} from "../../redux/actions/productActions";
import { useDispatch,useSelector } from "react-redux";
const Component=styled(Box)`
    padding:10px;
    background:#F2F2F2;
`

const Home=()=>{
const {products}=useSelector(state=>state.getProducts)
// console.log(products)
const dispatch=useDispatch();

    useEffect(()=>{
       dispatch( listProducts() )
    },[dispatch])
    return(
        <>
        <NavBar/>
        <Component>
        <Banner/>
        <MidSlide products={products} title="Deal of the Day" timer={true}/>
        <MidSection/>
        <Slide products={products} title="Discounts for you" timer={false}/>
        <Slide products={products} title="Suggesting Items" timer={false}/>
        <Slide products={products} title="Top Selection" timer={false}/>
        <Slide products={products} title="Recommended Items" timer={false}/>
        <Slide products={products} title="Trending Offers" timer={false}/>
        <Slide products={products} title="Season Top Picks" timer={false}/>
        <Slide products={products} title="Top Deal on Accessories" timer={false}/>
        </Component>
        </>
    )
}
export default Home;