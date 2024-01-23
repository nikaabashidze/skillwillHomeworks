import React from 'react'

const worksitem = ({name, id}) => {
  return (
    <div>
      <div  className="user-item">
              <p>ID: {id}</p>
              <p>NAME: {name}</p>
            </div>
    </div>
  )
}

export default worksitem
