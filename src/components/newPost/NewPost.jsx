import React from 'react'
import "./newPost.css"
import { useLocation } from "react-router-dom"

import data from "../../data.json"

export default function NewPost() {
  const location = useLocation();
  const title = location.pathname.split("/")[3];

  const postItem = Object.values(data).find(e => e.title === title);

  return (
    <div className="newPost">
      <div className="newPostContainer container">
        <div className="postTitle">
          <h2>{postItem.title}</h2>
        </div>
        <div className="postImg">
          <img src={postItem.img} alt="" />
        </div>
        <div className="newPostContent">
          <div className="displayEng">
            <p>{postItem.displayEng}</p>
          </div>
          <div className="displayTamil">
            <p>{postItem.displayTamil}</p>
          </div>
          <ul className='postItem'>
            {
              postItem.uses.map((item, i) => {
                return <li key={i} className="postListItem">{item}</li>
              })
            }
          </ul>
          {postItem.commercialEng && <p className="commercialEng">{postItem.commercialEng}</p>}
          {postItem.commercialTamil && <p className="commercialTamil">{postItem.commercialTamil}</p>}
          {postItem.profitsEng && <p className="profitsEng">{postItem.profitsEng}</p>}
          {postItem.profitsTamil && <p className="profitsTamil">{postItem.profitsTamil}</p>}
        </div>
      </div>
    </div>
  )
}
