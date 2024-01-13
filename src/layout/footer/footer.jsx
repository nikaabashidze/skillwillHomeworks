import './footer.css';
import facebook from '../../assets/image/facebook (1).svg'
import instagram from '../../assets/image/square-instagram (1).svg'
import linkedin from '../../assets/image/linkedin (1).svg'
import github from '../../assets/image/github (1).svg'
import carlogo from '../../assets/image/carlogo.png'



function App() {
  return (
    <div className="footer">
      <div className='logofut'><img src={carlogo} alt="" id='carlogo' /></div>
     <div> 
      <h1> Contact</h1>
        <ul>
           <div> <h3> Email</h3></div>
            <li>nostop@gmail.com</li>
           <div>  <h3>Phone</h3> </div>
            <li>555 333 777</li>
        </ul>

     </div>
     <div>
     <h1> Address</h1>
        <ul>
            <h3>Tbilisi</h3>
            <li>Baratashvili 2str 2</li>
            
        </ul>
     </div>
     <div>
     <h1 className='socialtext'>Social</h1>
        <ul className='social'>
           <li><img src={github} alt="Logo" className='socialMediaLogo' /></li>
           <li><img src={linkedin} alt="Logo" className='socialMediaLogo' /></li>
           <li><img src={facebook} alt="Logo" className='socialMediaLogo' /></li>
           <li><img src={instagram} alt="Logo" className='socialMediaLogo' /></li>
        </ul>

      </div>

      
    </div>
  );
}

export default App;
