


import react,{useContext,createContext,useReducer} from 'react'
import { _Array_color } from './_d_colors' 


import React from 'react'
export const _Favorites_Context=createContext();

let _localStorage=JSON.parse(localStorage.getItem('_favorites_colors')) || [] 
const My_d_Favorites={
_ids:_localStorage,
}  
const _Reducer=(state,action)=>{
switch(action.type){
case '_storage_favorite':
const _local_data=[...state._ids,action._ids]
localStorage.setItem('_favorites_colors',JSON.stringify(_local_data))
return {...state,_ids:[...state._ids,action._ids]}

case '__remove_favorite':
const _local_data_r=state._ids.filter((x)=>x!==action._ids)
localStorage.setItem('_favorites_colors',JSON.stringify(_local_data_r))
return {...state,_ids:state._ids.filter((x)=>x!==action._ids)}
default:return state; 

}
} 


export default function _d_Favorites({ children }) {
const [favorites,dispatch]=useReducer(_Reducer,My_d_Favorites)

const _storage_favorites=(data)=>{
const _id=data;
return (_Array_color.some((x)=>x._ids==_id) ? dispatch({type:'_storage_favorite',_ids:Number(_id)}) :false   )

}

const _remove_favorites=(data)=>{
const _id=data;
return (_Array_color.some((x)=>x._ids==_id) ? dispatch({type:'__remove_favorite',_ids:Number(_id)}) : false   )
}

const value={
favorites:favorites,
_storage_favorites:_storage_favorites,
_remove_favorites:_remove_favorites
}

return (
<_Favorites_Context.Provider value={value}>{children}</_Favorites_Context.Provider>
)
}



