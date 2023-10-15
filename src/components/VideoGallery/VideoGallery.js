import React from 'react';



const VideoGallery = ({ image,name,onClick,video,description }) => {
  // console.log(video);
  //   console.log(name);
  //   console.log(description);
  return (
    <li className="listVideoCategory">
      <div className="videoCategory">
      <div className="overlay">
        <div className="overlayPlay">
          <img 
            className="imgPlay" 
            src="http://www.artvitrag.hol.es/galleryReact/video/play.png" 
            alt=""
            onClick={() => onClick(name,video,description)}
          />
        </div>
      </div>
      <img
        src={image}
        alt={name}
        width="210px"
        height="210px"
      />
      </div>
      <div className="nameVideo"> {name} </div>
      
        </li>
  );
};

export default VideoGallery;
