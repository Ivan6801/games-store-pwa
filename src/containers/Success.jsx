import React, { useContext } from 'react';
import { Helmet } from 'react-helmet'
import AppContext from '../context/AppContext'
import Map from '../components/Map';
import useGoogleAddress from '../hooks/useGoogleAddress';
import '../styles/components/Success.css';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  // const location = useGoogleAddress(buyer.address);

  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Success</title>
      <meta name="description" content="Success" />
    </Helmet>    
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
        <span>Tu pedido lelgara en 3 dias a tu direccion:</span>
        <div className="Success-map">
          {/* {location && Object.keys(location).length !== 0 ?<Map data={location} /> : "Espere un momento..."} */}
          <Map />
        </div>
      </div>
    </div>
    </>
  );
}

export default Success;