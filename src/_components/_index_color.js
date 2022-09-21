


import React,{useMemo,useEffect,useContext} from 'react'
import styled from 'styled-components'
import { _Array_color } from '../_data/_d_colors'
import { _Favorites_Context } from '../_data/_d_Favorite'
import { _static_fun_Context } from './_static_fun'
import _heart_icon from './static/images/heart.svg'

const Div_color_p=styled.div`
width: 25%;
`
const Div_color_add_t_f=styled.div`
margin: 2rem 1rem 4rem 0;
border: 1px solid #333c45;
border-radius: 10px;
padding: 15px 10px 10px 10px;
width: 94%;
display: flex;
transition: all 0.3s ease;
cursor: pointer;
&:hover{
background-color:#ee6983; 
}
`
const Div_color_is_f=styled.div`
margin: 2rem 1rem 4rem 0;
border: 1px solid #333c45;
border-radius: 10px;
padding: 15px 10px 10px 10px;
width: 94%;
display: flex;
transition: all 0.3s ease;
cursor: pointer;
background-color:#ee6983; 
&:hover{
background-color:#fff; 
}
`


const Img_Icon=styled.img`
width: 25px;
margin-left: 10px;
margin-top: -1px;
`
const DivColor_v0=styled.div`
height: 60px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
cursor: pointer;
transition: opacity 0.2s ease; 
`
const DivColor_v1=styled.div`
height: 60px;
cursor: pointer;
transition: opacity 0.2s ease; 
`
const DivColor_v2=styled.div`
height: 60px;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
cursor: pointer;
transition: opacity 0.2s ease; 
`

export default function _Index_color() {

const Favorites_Context=useContext(_Favorites_Context)
const {_HoverEffect,_Leave_HoverEffect,_color_Copied_from_parent,_Add_to_my_Favorites,_Remove_from_my_Favorites,_HoverEffect_r_e,_HoverEffect_r_l}=useContext(_static_fun_Context)

const _colors_elements=_Array_color.map((x)=>{
const _check_f=Favorites_Context.favorites._ids.some((id)=>id==x._ids)
return (
<Div_color_p key={Math.random()} data-id={x._ids}>
<div className='div_f_c_c'>
{
(x._colors.map((y,index,array)=>{

const _style={
backgroundColor:`${y}` 
}

if(index==0){
return (<div key={Math.random()} onClick={(e)=>_color_Copied_from_parent(e)} onMouseEnter={(e)=>_HoverEffect(e)} onMouseLeave={(e)=>_Leave_HoverEffect(e)} className='_div_c_p_r_65433HH'><DivColor_v0 style={_style} className='_span_cc'></DivColor_v0></div>)
}else if( index==1){
return ( 
<div className='_div_c_p_r_65433HH' key={Math.random()} onClick={(e)=>_color_Copied_from_parent(e)} onMouseEnter={(e)=>_HoverEffect(e)} onMouseLeave={(e)=>_Leave_HoverEffect(e)}  >
<DivColor_v1  
style={_style} 
className='_span_cc' 
>
</DivColor_v1>
</div>
)
}else if(index==2){
return (
<div key={Math.random()} onClick={(e)=>_color_Copied_from_parent(e)}  className='_div_c_p_r_65433HH' onMouseEnter={(e)=>_HoverEffect(e)} onMouseLeave={(e)=>_Leave_HoverEffect(e)}  >
<DivColor_v1 
style={_style} 
className='_span_cc'  
>
</DivColor_v1>
</div>
)
}else{
return ( 
<div key={Math.random()} className='_div_c_p_r_65433HH' onClick={(e)=>_color_Copied_from_parent(e)} onMouseEnter={(e)=>_HoverEffect(e)} onMouseLeave={(e)=>_Leave_HoverEffect(e)} >
<DivColor_v2  key={Math.random()} 
style={_style} className='_span_cc' 
>
</DivColor_v2>
</div>
)
} 


})
)

}

</div>

{_check_f ? (
<Div_color_is_f onClick={(e)=>_Remove_from_my_Favorites(e)} onMouseEnter={(e)=>_HoverEffect_r_e(e)} onMouseLeave={(e)=>_HoverEffect_r_l(e)}   >
<div><Img_Icon src={_heart_icon}/></div>  
<div className='_div64322'>Is My Favorite</div>
</Div_color_is_f>
) : (
<Div_color_add_t_f onClick={(e)=>_Add_to_my_Favorites(e)}>
<div><Img_Icon src={_heart_icon}/></div>  
<div className='_div64322'>Add To My Favorite</div>
</Div_color_add_t_f>
) 
}





</Div_color_p>


)





}) 





return (
<div className='_div_ref_css_B'>
<div className='div_ref_css_56447422'>
{_colors_elements}
</div>


</div>
)
}
