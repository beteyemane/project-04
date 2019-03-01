import React from 'react'

// import { Link } from 'react-router-dom'

const BarCard = ({ name, hero }) => {
  return(

    <div>
      <div className='container if-fullhd flex'> {/* is full hd for weird horizontals */}
        <figure className="image" style={{ backgroundImage: `url(${hero})`}} />
        <div className="text-overlay">{name}</div>
      </div>
    </div>
  )
}

export default BarCard