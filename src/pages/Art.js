import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/footer";
import image1 from "../art_collection/art_1.jpg";
import image2 from "../art_collection/art_2.jpg";
import image3 from "../art_collection/art_3.jpg";
import image4 from "../art_collection/art_4.jpg";
import image5 from "../art_collection/art_5.jpg";
import image6 from "../art_collection/art_6.jpg";
function Art() {
  const handleClick1=()=>{
    const ele = document.getElementById("image1");
    const isFullScreen = ele.isFullScreen;
    if(!isFullScreen){
      ele.requestFullscreen();
    }
  }
  const handleClick2=()=>{
    const ele = document.getElementById("image2");
    const isFullScreen = ele.isFullScreen;
    if(!isFullScreen){
      ele.requestFullscreen();
    }
    else{
      ele.exitFullscreen();
    }
  }
  const handleClick3=()=>{
    const ele = document.getElementById("image3");
    const isFullScreen = ele.isFullScreen;
    if(!isFullScreen){
      ele.requestFullscreen();
    }
    else{
      ele.exitFullscreen();
    }
  }
  const handleClick4=()=>{
    const ele = document.getElementById("image4");
    const isFullScreen = ele.isFullScreen;
    if(!isFullScreen){
      ele.requestFullscreen();
    }
    else{
      ele.exitFullscreen();
    }
  }
  const handleClick5=()=>{
    const ele = document.getElementById("image5");
    const isFullScreen = ele.isFullScreen;
    if(!isFullScreen){
      ele.requestFullscreen();
    }
    else{
      ele.exitFullscreen();
    }
  }
  const handleClick6=()=>{
    const ele = document.getElementById("image6");
    const isFullScreen = ele.isFullScreen;
    if(!isFullScreen){
      ele.requestFullscreen();
    }
    else{
      ele.exitFullscreen();
    }
  }  
  return (
    <div>
      <Navbar></Navbar>
      <div style={{ backgroundColor: "#040439" }}>
      <Sidebar></Sidebar>
        <h1
          style={{
            color: "white",
            backgroundColor: "#040439",
            fontFamily: "sans-serif",
            fontSize: "16px",
            padding: "10px",
          }}
        >
          Creative persons like the art of creating something new always and
          drawings are the best way to express one's interest. Out of many forms
          of drawing I love sketching to express my emotions and convey my
          message. So I keep sketching often and followings are few of those.
        </h1>
        
        <img src={image1} id="image1" alt="Poem1" data-aos="slide-up" onClick={handleClick1} style={{
                  width: "400px",
                  height: "500px",
                  borderRadius: "40px",
                  margin:"20px",
                  padding:"5px",
                  marginLeft:"50px",
                  display: "inline-block",
                  boxShadow: "2px 2px 4px 4px #8b0462",
                }}></img>
                <img src={image2} id="image2" alt="Poem2" data-aos="slide-up" onClick={handleClick2} style={{
                  width: "400px",
                  height: "500px",
                  borderRadius: "40px",
                  margin:"20px",
                  padding:"5px",
                  marginLeft:"50px",
                  display: "inline-block",
                  boxShadow: "2px 2px 4px 4px #8b0462",
                }}></img>
                <img src={image3} id="image3" alt="Poem3" data-aos="slide-up" onClick={handleClick3} style={{
                  width: "400px",
                  height: "500px",
                  borderRadius: "40px",
                  margin:"20px",
                  padding:"5px",
                  marginLeft:"50px",
                  display: "inline-block",
                  boxShadow: "2px 2px 4px 4px #8b0462",
                }}></img>
                <img src={image4} id="image4" alt="Poem4" data-aos="slide-up" onClick={handleClick4} style={{
                  width: "400px",
                  height: "500px",
                  borderRadius: "40px",
                  margin:"20px",
                  padding:"5px",
                  marginLeft:"50px",
                  display: "inline-block",
                  boxShadow: "2px 2px 4px 4px #8b0462",
                }}></img>
                <img src={image5} id="image5" alt="Poem5" data-aos="slide-up" onClick={handleClick5} style={{
                  width: "400px",
                  height: "500px",
                  borderRadius: "40px",
                  margin:"20px",
                  padding:"5px",
                  marginLeft:"50px",
                  display: "inline-block",
                  boxShadow: "2px 2px 4px 4px #8b0462",
                }}></img>
                <img src={image6} id="image6" alt="Poem6" data-aos="slide-up" onClick={handleClick6} style={{
                  width: "400px",
                  height: "500px",
                  borderRadius: "40px",
                  margin:"20px",
                  padding:"5px",
                  marginLeft:"50px",
                  display: "inline-block",
                  boxShadow: "2px 2px 4px 4px #8b0462",
                }}></img>
        </div>
      <Footer></Footer>
    </div>
  );
}
export default Art;
