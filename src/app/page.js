"use client"
import Nav from "./component/Navbar/navbar";
import Display from "./component/Contents/section";
import Header from "./component/Contents/header";

export default function Home() {
  
  return (
    <>
        <Nav /> 
        <Header/>
        <Display />     
    </>
  );
}
