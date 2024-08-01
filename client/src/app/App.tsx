import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import AuthorisationPage from '../features/Auth/components/AuthorisationPage';
import RegLog from '../features/Auth/components/RegLog';
import Main from '../features/Main/components/Main';
import MainPage from '../features/MainContent/components/MainPage';
import Profile from '../features/Profile/components/Profile';
import MinersPage from '../features/Miners/components/MinersPage';
import MinerPage from '../features/Miners/components/MinerPage';
import './App.css';
import { useAppDispatch } from '../store/store';
import { authCheckUser } from '../features/Auth/authSlice';
import { minersLoad } from '../features/Miners/minersSlice';
import { brandsLoad } from '../features/Miners/brandsSlice';
import { currenciesLoad } from '../features/Miners/currencySlice';
import { algorithmsLoad } from '../features/Miners/algSlice';
import { modellsLoad } from '../features/Miners/modellsSlice';
import { hashratesLoad } from '../features/Miners/hashratesSlice';
import { subbrandsLoad } from '../features/Miners/subSlice';
// import { getToken } from '../helpers/app-helpers';


function App(): JSX.Element {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(authCheckUser()).catch(console.log)
    dispatch(minersLoad()).catch(console.log)
    dispatch(brandsLoad()).catch(console.log)
    dispatch(algorithmsLoad()).catch(console.log)
    dispatch(currenciesLoad()).catch(console.log)
    dispatch(modellsLoad()).catch(console.log)
    dispatch(hashratesLoad()).catch(console.log)
    dispatch(subbrandsLoad()).catch(console.log)
    
  }, [])


  return (
    <Routes>
    <Route path='/' element={<Main/>}>
    <Route index element={<MainPage/>}/>
    <Route path='auth' element={<RegLog/>} />
    <Route path='sign-in' element={<AuthorisationPage/>} />
    <Route path='profile' element={<Profile/>}/>
    <Route path='miners' element={<MinersPage/>}/>
    <Route path='miners/:minerId' element={<MinerPage/>}/>
    
    </Route>
  </Routes>
  );
}

export default App;
