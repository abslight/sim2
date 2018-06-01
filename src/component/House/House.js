import React from 'react';



export default function House(props) {
  let { deleteHouse } = props;
  let { name, address, city, state, zip, mortgage, rent, img, id } = props;
  return (
    <div className="House">
      <h1> House: {name} </h1>
      <h2> Address: {address} city: {city} {state} {zip}</h2>
      <h2> Mortgage: {mortgage} rent: {rent}</h2>
      <img src={img} alt='' />
      <button onClick={() => deleteHouse(id)}> Delete </button>
    </div>
  );
}
