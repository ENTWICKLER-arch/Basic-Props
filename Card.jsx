import React from 'react';

const Card = (props) => {
  return (
    <div className= "w-[300px] h-[300px] bg-lime-300 rounded m-5 justify-center items-center font-bold  text-lg text-center p-[100px]">
        
        <h2  > {props.user.name}</h2>
        <p>{props.user.mobile}</p>
    </div>
  );
};

export default Card
