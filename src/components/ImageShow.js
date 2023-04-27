import React from 'react'

export default function ImageShow({eImage}) {
  return (
    <div >
 
 <img src={eImage.urls.small} alt={eImage.alt_description} />
 
    </div>
  )
}
