import React from 'react'
import { NavLink, Outlet} from 'react-router-dom'
import { navbar } from '../../utils/navbar'
import { Container, Wrapper, Wrap, Setion, Logo, Link } from './styled'
const Navbar = () => {
  return (
     <div>
        <Container>
           <Wrap>
            <Wrapper>
                 <Setion logo='true'> <Logo/> </Setion>
                 <Setion>
                    {
                       navbar.map(({ title, path, id },index) => {
                          return <Link className={({ isActive }) => isActive && 'active'} key={index} to={path}> {title} </Link>
                          
                      }) 
                    }
                 </Setion>
                 <Setion>
                     <button>logn</button>
                 </Setion>
             
            </Wrapper>
           </Wrap>

           <Outlet />
        </Container>
      
    </div>
  )
}

export default Navbar
