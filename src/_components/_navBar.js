


import React from 'react'
import styled from 'styled-components'
import icon_droplet from './static/images/droplet.svg'
import icon_bookmark from './static/images/bookmark-heart.svg'
import {NavLink,Route,Routes} from 'react-router-dom'
import _Index_color from './_index_color'
import Favorite from './Favorite'





const NavBar=styled.nav`
display: flex;
height: 80px;
background-color: #333c45;
align-items: center;
justify-content: space-between;
position: fixed;
width: 100%;
top: 0;
right: 0;
left: 0;
z-index: 1030;
border-bottom: 1px solid #DEDEDF;
`
const TitleNav=styled.div`
font-size:22px; 
color: #fd7e14;
letter-spacing: 1px;
margin-left: 3rem;
span{
color: #6c757d;
span{
color:#20c997; 
margin-inline: 2px;
}


}

`
const _Nav_itam=styled.div`
cursor: pointer;
letter-spacing: 1px;
height: 96px;
margin-top: -1rem;
line-height: 115px;
width: 200px;
text-align: center;
transition: all 0.3s ease;
display: flex;
justify-content:center;
&:hover{
background-color:#20c997;
color:#333c45; 
}
`
const Icon=styled.img`
width: 27px;
`


function _NavBar_content() {
return (
<>
<NavBar>
<div className='_fi6436422'>
<TitleNav>My <span>Color<span>s</span></span></TitleNav>
</div>

<div className='_fi6436422'>

<NavLink to='/' className={({isActive})=>isActive ? '_navitam _navitamActive' : '_navitam'  }  ><_Nav_itam><div className='_div_ref_4346'><Icon src={icon_droplet}/></div><span>New Colors</span></_Nav_itam></NavLink>
<NavLink to='/favorite' className={({isActive})=>isActive ? '_navitam _navitamActive' : '_navitam'  } ><_Nav_itam><div className='_div_ref_4346'><Icon src={icon_bookmark}/></div><span>Favorite Colors</span></_Nav_itam></NavLink>


</div>


</NavBar>
</>
)
}


export default function _NavBar(){
return (
<>
<_NavBar_content/>
<Routes>
<Route path='/' element={<_Index_color/>}/>
<Route path='/favorite' element={<Favorite/>}/>
</Routes>
</>

)
}