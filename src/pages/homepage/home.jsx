import {  useLayoutEffect } from "react";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import Cursor from '../../components/cursor/cursor';
import Header from '../../layout/header/header'; 
import Content from '../../layout/content/content'; 
import Footer from '../../layout/footer/footer'; 
import './home.css'


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function App() {
  useLayoutEffect(() => {
    ScrollSmoother.create({
      smooth: 2 
    });
  }, []);

  return (
    <div>

          <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Content />
          <Footer />
        </div>
      </div>
          <Cursor />
    </div>
  );
}