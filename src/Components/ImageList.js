import React from 'react';
import "./ImageList.css"
import ImageCard from './ImageCard';

const imageList = (props)=>{
     // dont forget destructuring of map if we didnt destructered it comes out like a object.
     // if we use image card component no need to pas the destructuring object just pass image itself
    // const images = props.images.map(({description,id,urls})=>{    
        const images = props.images.map((image)=>{ 

        
            //  return <img 
            //  alt={description}
            //  key={id}
            //  src={urls.regular} 
            //  />;

            // above code is without image card component

            return <ImageCard key={image.id} image={image}/>;
       
       
    });
    return <div className="image-list">{images}</div>;
}

export default imageList;