import React from "react";


function Card2 (props) {
    

    return (
        <div className="">
  <div className="row">
      <div className="col-md-12">

    <div className="col-md-4 mb-4 text-white bg-dark">
       <h5 className="card-title p-2">{props.title}</h5>
            <img className="card-img-top" src={props.image} alt={props.imageAlt} />
             <div className="card-body">
               
                <p className="card-text">Price: {props.price}</p>
                <button disabled={props.disabled} className="btn btn-outline-light btn-sm">{props.availability}</button>
             </div>
    </div>
      </div>
  </div>
</div>
   
    )
} export default Card2;