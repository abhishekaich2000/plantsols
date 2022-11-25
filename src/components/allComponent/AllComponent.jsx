import React from 'react'
import data from "../../data.json"
import SingleComponent from '../singleComponent/SingleComponent'

export default function AllComponent() {
  return (
    <div className="container">
        <div className="row">
         { 
          data.map((post, i)=>{
              return (
                <div key={i} className="col-12 col-md-4">
                  <SingleComponent  data={post}/> 
                </div>
              )
            })
          }
        </div>
      </div>
  )
}
