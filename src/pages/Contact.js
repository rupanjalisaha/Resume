import React from "react";
import "../App.css";
import "./contact.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/footer";
import Maps from "../components/maps";  
import { AtSign } from 'react-feather'; 
import { Mail } from 'react-feather';
import { MessageSquare } from "react-feather";
const submit=function(){
  if(document.getElementById("message").value !=null && document.getElementById("email").value != null && document.getElementById("name").value != null){
    alert("Message sent successfully");
  }
}
function Contact() {
  return (
    <div className="Contact">
      <Navbar></Navbar>
      <div id="contact_form" data-aos="slide-up">
      <Sidebar></Sidebar>
        <h1>
          Send Your Message
        </h1>
        <h2 id="name"><AtSign></AtSign><input type="text" placeholder="Enter name.."required></input></h2>
        <h2 id="email"><Mail></Mail><input type="text" required placeholder="abc@gmail.com"></input></h2>
        <h2 id="message"><MessageSquare></MessageSquare><input type="textarea" placeholder="write your query.." required></input></h2>
        <button id = "button" onClick={submit}>Submit</button>
      </div>
      <h1 data-aos="slide-up"> Find my Location in the map</h1>
      <Maps data-aos="slide-up"></Maps>
      <Footer></Footer>
    </div>
  );
}

export default Contact;
