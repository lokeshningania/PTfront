import React , {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import SubMenu from './SubMenu'
import { SideBarData } from './SideBarData'

const Nav = styled.div`
    background: black;
    height: 50px;
    dispaly: flex;
    justify-content: flex-start;
    align-items: center; 
    


`;

const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    dispaly: flex;
    justify-content: flex-start;
    align-items: center; 
`
const SideBarNav = styled.nav`
    background: #15171c;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({sidebar}) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
`

const SideBarWrap = styled.div`
    width: 100%;
`
const SideBar = ({item}) => {

    const [sidebar , setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)



    return (
        <div>
            <Nav>
                <NavIcon to='#'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </NavIcon>
            </Nav>
            <SideBarNav sidebar = {sidebar}>
                <SideBarWrap>
                    <NavIcon to='#'>
                        <AiIcons.AiOutlineClose onClick={showSidebar}/>
                    </NavIcon>
                    {SideBarData.map((item , index) => {
                        return  <SubMenu item = {item} key ={index} />
                    })}
                </SideBarWrap>
            </SideBarNav>
        </div>
    )
}

export default SideBar;
