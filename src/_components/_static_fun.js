


import react,{createContext,useContext,memo} from 'react'
import $ from 'jquery'
import { _Array_color } from '../_data/_d_colors'
import { _Favorites_Context } from '../_data/_d_Favorite'
export const _static_fun_Context=createContext();

 function _static_fun({ children }) {
const {_storage_favorites,_remove_favorites}=useContext(_Favorites_Context)
const _HoverEffect=(e)=>{
e.stopPropagation()
const _element=$(document.body).find(e.target);
const _element_parent=$(_element).parent().index(); 
const _find_color=_Array_color[_element_parent]._colors[$(_element).index()]
const _newEle=`<div class='_div_f_f_r' style="color:${$(_element).css('background-color')}">${_find_color}</div>`
if(!$(_element).find('._div_f_f_r').length > 0 && _find_color!==undefined ){
$(_element).parent().find('div').eq(0).addClass('_d_s_c_t')
$(_element).parent().append(_newEle)
} 

}
const _Leave_HoverEffect=(e)=>{
e.stopPropagation()
const _element=$(document.body).find(e.target);
$(_element).parent().find('._div_f_f_r').remove()
$(_element).removeClass('_d_s_c_t')
}
const _color_Copied=()=>{
$(document.body).on('click','._div_f_f_r',function(e){
e.stopImmediatePropagation()
const _g_color=$(e.target).text();
navigator.clipboard.writeText(_g_color)
setTimeout(function(){
$(e.target).text('Copied')
},100)
setTimeout(function(){
$(e.target).text(_g_color)
},1500)


})
}
_color_Copied()


const _color_Copied_from_parent=(e)=>{
$('._div_f_f_r').trigger('click')
}
const _HoverEffect_r_e=(e)=>{
$(e.target).find('div:eq(1)').text('Remove From My Favorite')
}
const _HoverEffect_r_l=(e)=>{
$(e.target).find('div:eq(1)').text('Is My Favorite')
}

const _Add_to_my_Favorites=(e)=>{
const _id=
e.target.parentNode.parentNode.getAttribute('data-id') ??
e.target.parentNode.getAttribute('data-id') ??
e.target.parentNode.parentNode.parentNode.getAttribute('data-id')  ?? 
e.target.parentNode.parentNode.parentNode.parentNode.getAttribute('data-id') ?? null
return (_id !==null ? _storage_favorites(_id) : false)


}

const _Remove_from_my_Favorites=(e)=>{
const _id=
e.target.parentNode.parentNode.getAttribute('data-id') ??
e.target.parentNode.getAttribute('data-id') ??
e.target.parentNode.parentNode.parentNode.getAttribute('data-id')  ?? 
e.target.parentNode.parentNode.parentNode.parentNode.getAttribute('data-id') ?? null
return (_id !==null ? _remove_favorites(_id) : false)
}


const value={
_HoverEffect:_HoverEffect,
_Leave_HoverEffect:_Leave_HoverEffect,
_color_Copied_from_parent:_color_Copied_from_parent,
_HoverEffect_r_e:_HoverEffect_r_e,
_HoverEffect_r_l:_HoverEffect_r_l,
_Add_to_my_Favorites:_Add_to_my_Favorites,
_Remove_from_my_Favorites:_Remove_from_my_Favorites,
}

return (
<_static_fun_Context.Provider value={value}>{children}</_static_fun_Context.Provider>
)
}

export default memo(_static_fun)