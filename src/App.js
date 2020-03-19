import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Banner from './Component/Banner/Banner';
import Footer from './Component/Footer/Footer';



function App() {
  return (

    <div>
      <Header logo = "img/logo.png" name = "img/tiltle.png" 
      dv1 = "Camera" dv2 = "Nhà Thông Minh" dv3 = "Năng Lượng Mặt Trời"
      linkhome = "" linkshop = "" linkblog = "" linkcontact ="" linkab =""
      />
      <Banner />
      <Footer/>


    </div>


  );
}

export default App;
