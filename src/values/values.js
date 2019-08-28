import React from 'react'

const Values = ({ values }) => {
  return (
    <div>
      <center><h1>Values</h1></center>
      {values.map((value, i) => {
          return (<div key={i + 'a'} class="card">
              <div key={i + 'b'} class="card-body">
                  <h5 key={i + 'c'} class="card-title">{value}</h5>
                  <h6 key={i + 'd'} class="card-subtitle mb-2 text-muted">{value}</h6>
                  <p key={i + 'e'} class="card-text">{value}</p>
              </div>
          </div>);
      })}
    </div>
  )
};

export default Values