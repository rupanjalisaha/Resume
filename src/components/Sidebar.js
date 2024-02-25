import React from 'react'
import { GitHub } from 'react-feather';
import { Linkedin } from 'react-feather';
import { Instagram } from 'react-feather';
import { Music } from 'react-feather';
//import { Icon } from 'react-feather';
import '././sidebar.css'
function Sidebar() {
  return (
    <div className="sidebar" class="w3-sidebar w3-light-grey w3-bar-block" style={{width:"5%", backgroundColor:"#040439", display:"flex", gap:"20px", padding:"5px", textAlign: "center"}}>
    <a style={{marginBottom:"10px"}}class="w3-bar-item w3-button" href="https://www.instagram.com/saharupanjali/"><Instagram></Instagram></a>
      <a style={{marginBottom:"10px"}} class="w3-bar-item w3-button" href="https://www.linkedin.com/in/rupanjali-saha-99b8181b2/"><Linkedin></Linkedin></a>
      <a style={{marginBottom:"10px"}} class="w3-bar-item w3-button" href="https://github.com/rupanjalisaha"><GitHub></GitHub></a>
      <a style={{marginBottom:"10px"}} class="w3-bar-item w3-button" href="https://open.spotify.com/show/3Zs984jYiUGissMdTv20k2?si=0364e2ca018642ac"><Music></Music></a>
</div>
  )
}

export default Sidebar
