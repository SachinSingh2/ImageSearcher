import React from 'react'
import ImageShow from './ImageShow'
import './ImgList.css'

export default function ImageList({fetchedImages}) {


  return (
    <div className='ImageList' >
{fetchedImages.map((edata)=>{
return(
  <ImageShow key={edata.id} eImage={edata} />
)
})}

    </div>
  )
}
