import React,{Component} from 'react';
import {connect} from 'react-redux';

import VideoGallery from '../components/VideoGallery/VideoGallery';
import ModalVideoPlay from '../components/Modal/ModalVideoPlay';

import '../css/pages/Video.css';
import '../css/pages/mobileVideo.css';

import textGeneralRu from '../json/ru/videoGallery.json';
import textGeneralEn from '../json/en/videoGallery.json';
import textGeneralUa from '../json/ua/videoGallery.json';

class Video extends Component {

 funcLanguage() {
  const {language } = this.props;

switch(language){
  case "Ru": 
    return textGeneralRu;

  case "Ua": 
    return textGeneralUa;

  case "En": 
    return textGeneralEn;

  default:
    return textGeneralUa;

}

}

state = {
  name:null,
  description:null,
  isModal: false,
  currentVideo: null,
};
toggleModal = (name,video,description) => {
    console.log(name);
  this.setState(prevState => ({
    isModal: !prevState.isModal,
    currentVideo: prevState.isModal ? null : video,
    description:description,
    name:name,
  }));
};
handleImageClick = (name,video,description) => {
  //console.log("hi")
    //console.log(name);
    // console.log(name);
    // console.log(description);
  this.toggleModal(name,video,description);
};

 render() {
  const { isModal, currentVideo, description, name } = this.state;
  const list=this.funcLanguage();
  // const video =listGeneral;
  // console.log(list);
  return (
    <div className="contentGeneral">
      {isModal && <ModalVideoPlay video={currentVideo} description={description} name={name} onToggle={this.toggleModal} />}
      <div className="videoGallery"> 
        <ul>
        {list.map(({ id,name,image,large,description }) => (
          <VideoGallery
          key={id}
          name={name}
          image={image}
          video={large}
          description={description}
          // size={size}          
          onClick={this.handleImageClick}
        />
          // <li>
          //   <video width="300px" height="300px" >
          //   <source src={large} />
          //   </video>
          // </li>
        ))}
        </ul>
      </div>
    </div>
  );
};
};
//получение языка в пропах
const mapStateToProps=state=>{return {language: state.language.language}}

export default connect(mapStateToProps)(Video)