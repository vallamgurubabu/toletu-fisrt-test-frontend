import React from "react";
import { Button } from "./ui/button";
import {  useNavigate } from "react-router-dom";


const Footer: React.FC = () => {
  const navigate =useNavigate()
  return (
    <footer className="hidden md:flex justify-center space-x-8 bg-gray-100 py-0 text-s">

      <Button className="bg-transparent text-blue-400 w-auto hover:text-2xl hover:bg-transparent">About Us</Button>
      
      <Button className="bg-transparent text-blue-400 w-auto hover:text-2xl hover:bg-transparent">Contact Us</Button>
      
      <Button onClick={() => navigate("/privacy")} className="bg-transparent text-blue-400 w-auto hover:text-2xl hover:bg-transparent">Privacy Policy</Button>
      
      <Button className="bg-transparent text-blue-400 w-auto hover:text-2xl hover:bg-transparent"> Terms & Conditions (T&C)</Button>

    </footer>
  );
};

export default Footer;
