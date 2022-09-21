

import React ,{useEffect,useState} from 'react'
import  './_components/static/css/main.css'
import _NavBar from './_components/_navBar'
import {BrowserRouter} from 'react-router-dom'
import _d_Favorites from './_data/_d_Favorite'
import _static_fun from './_components/_static_fun'
function App() {


return (
<>

<BrowserRouter>
<_d_Favorites>
<_static_fun>
<_NavBar/>
</_static_fun>
</_d_Favorites>
</BrowserRouter>

</>
);
}

export default App;
