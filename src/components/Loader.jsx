import React from 'react'
import LoadingGif from '../images/loading.gif'
const Loader = () => {
  return (
    <div>
        <div className="loader">
            <div className="loader__image">
                <img src={LoadingGif} alt='' />
            </div>
        </div>
    </div>
  )
}

export default Loader