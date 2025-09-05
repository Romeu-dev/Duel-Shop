import './Tarja.css'
import { FaCreditCard } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { BiSolidJoystick } from "react-icons/bi";
import { GiPadlock } from "react-icons/gi";
// import { FaBeer } from 'react-icons/fa';



function Tarja(){
    return(
        <section className="section-tarja">
      <div class="box-tarja">
      <FaCreditCard  className='icone'/>
          <p>
              <b>10x sem juros</b>
              <br />
              "10% of no PIX"
          </p>
      </div>
      <div className="dividir"></div>
      <div className="box-tarja">
      <FaTruck className='icone'/>
          <p>
             <b>Envio para</b>
              <br />
              todo o Brasil
          </p>
      </div>
      <div className="dividir"></div>
      <div className="box-tarja">
      <GiPadlock className='icone'/>
          <p>
            <b> Garantia</b> 
            <br />
             "de até 9 meses"
          </p>
      </div>
      <div className="dividir"></div>
      <div className="box-tarja">
      <BiSolidJoystick className='icone'/>
          <p>
              <b>Novidades</b>
           <br />
              todos os dias!
          </p>
      </div>
  </section>
      
    )
}


export default Tarja;