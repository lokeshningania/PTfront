import React ,{useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const SideBarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    heigth: 60px;
    text-decoration: none;
    font-size: 18px;
    

    &:hover {
        background: #252831;
        color: white;
        border-left: solid 4px #632ce4;
        cursor: pointer;
        text-decoration: none;
    }
`

const DropdownLink = styled(Link)`
    backgroud: #414757;
    display: flex;
    color: #f5f5f5;
    align-items: center;
    padding-left: 3rem;
    heigth: 60px;
    text-decoration: none;
    font-size: 18px;
    

    &:hover {
        background: #252831;
        cursor: pointer;
        color: white;
        text-decoration: none;
    }
`

const SideBarLabel = styled.span`padding-left: 10px;`;

const SubMenu = ({item}) => {

const [SubNav , setSubNav ] = useState(false)

const showSubNav = () => setSubNav(!SubNav)

    return(
        <div>
            <SideBarLink to={item.path} onClick = {item.subNav && showSubNav}>
                <div>
                    {item.icon}
                    <SideBarLabel>
                        {item.title}
                    </SideBarLabel>
                </div>
                <div>
                    {item.subNav && SubNav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                </div>
            </SideBarLink>
            {SubNav && item.subNav.map((item, index) => {
                return(
                <DropdownLink to={item.path}  key={index}>
                    {item.icon}
                    <SideBarLabel>{item.title} </SideBarLabel>
                </DropdownLink>
                )
            })}
        </div>
    )
}

export default SubMenu;