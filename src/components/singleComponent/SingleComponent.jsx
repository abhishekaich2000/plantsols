import React from 'react'
import "./singleComponent.css"
import {Link} from "react-router-dom";


export default function SingleComponent(props) {
  let data = props.data;

  return (
    <div className="seedComponent card">
      <img src={data.img} className="cardImg card-img-top" alt="..."/>
        <div className="card-body">
          <Link to={`/plantsols/feed/${data.title}`} className="link">
            <h5 className="card-title">{data.title}</h5>
          </Link>
          <p className="englishText card-text">{data.displayEng}</p>
          <p className=" tamilText card-text">{data.displayTamil}</p>
        </div>
    </div>
  )
}
