import pic from "./react_logo-512.webp";
export default function Navbar(){
   return ( 
   <div className="nav">
       <img src={pic} className="logo"></img>
       <h3 className="reactfacts">Reactfacts</h3>
       <h4 className="reactprojects">React Course-Project 1</h4>
   </div>
   );
}