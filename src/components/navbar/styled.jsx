import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as logoImg } from "../../assets/icons/logo.svg";
const Container = styled.div`
 font-family:"Montserrat";
`
const Wrap = styled.div`
   background: var(--colorPrimary);
   width:100%;
`

const Wrapper = styled.div`
   margin: 0 auto;
   color: #fff;
   height: 64px;  
    padding: var(--padding);
   display: flex;
   align-items: center;
   justify-content:  space-between;
   
   max-width:1440px;

   font-size: 16px;
`

const Logo = styled(logoImg)`
   
`

const Setion = styled.div`
   display: flex;
   align-items: center;
   gap:64px;
   cursor: ${({logo}) => logo && 'pointer' };
   .active{
      color: #f8f87c;
      font-weight:500;
   }
`
const Link =styled(NavLink)`
   text-decoration: none;
   color: #FFF;
`



export { Container, Wrapper, Wrap, Setion, Logo, Link }