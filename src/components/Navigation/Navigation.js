import React, { Fragment, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import propTypes from 'prop-types';
import {connect} from 'react-redux';

import routes from '../../services/routes';
import * as actions from '../../services/redux/language/language-actions';

import LangRu from '../../image/language/ru.png';
import LangEn from '../../image/language/en.png';

import NavigationItem from './NavigationItem';
import HomePage from '../../Pages/Home';
import AboutPage from '../../Pages/About';
import VitrajPage from '../../Pages/Vitraj';
import GalleryPage from '../../Pages/Gallery';
import VideoPage from '../../Pages/Video';
// import VideoblogPage from '../../Pages/Videoblog';
import ContactPage from '../../Pages/Contact';
import NotFoundPage from '../../Pages/NotFound';
import GalleryImage from '../../Pages/GalleryImage';
// import ModalVideoPlay from '../Modal/ModalVideoPlay';
import MyPhoto from '../../Pages/MyPhoto';
import WorkPhoto from '../../Pages/WorkPhoto';
import Mk from '../../Pages/Mk';
import AdminLoginPage from '../../Pages/admin/login';

import textPageRu from '../../json/ru/navigation.json';
import textPageEn from '../../json/en/navigation.json';

import './Navigation.css';

class Navigation extends Component {

  funcLanguage() {
    const {language } = this.props;
// console.log(language);
  if (language==="Ru"){    
    return textPageRu;
  }
  else
  {return textPageEn;}
 }
  render() {
    const { languageRu,languageEn } = this.props;
    const list=this.funcLanguage();

    return (
      <Fragment>
        <header>
          <div className="languageContent">
            <div className="languageList">
              <img src={LangRu} alt="lang_Ru" onClick={languageRu} />
            </div>
            <div className="languageList">
              <img src={LangEn} alt="lang_En" onClick={languageEn} />
            </div>
          </div>
          <nav className="listHeader">
            <ul>
              {list.map(
                ({ id, heading, link, classNameStyle }) => (
                  <NavigationItem
                    key={id}
                    name={heading}
                    link={link}
                    classNameStyle={classNameStyle}
                  />
                ),
              )}
            </ul>
          </nav>
        </header>
                
        <Switch>

          <Route
            path={routes.home}
            exact
            render={props => <HomePage {...props} />}
          />
          <Route
            path={routes.about}
            render={props => <AboutPage {...props} />}
          />
          <Route path={routes.myPhoto} component={MyPhoto} />
          <Route path={routes.workPhoto} component={WorkPhoto} />
          <Route
            path={routes.vitraj}
            render={props => <VitrajPage {...props} />}
          />
          <Route path={routes.mk} component={Mk} />
          <Route
            path={routes.gallery}
            exact
            render={props => <GalleryPage {...props} />}
          />
          <Route path={routes.galleryCategoria} component={GalleryImage} />
          <Route path={routes.video} component={VideoPage} />
          {/* <Route path={routes.videoCategoria} component={ModalVideoPlay} /> */}
          {/* <Route path={routes.videoblog} component={VideoblogPage} /> */}
          <Route
            path={routes.contact}
            render={props => <ContactPage {...props} />}
          />
           <Route path={routes.admin} component={AdminLoginPage} />
          <Route
          render={props => <NotFoundPage {...props} />}
          />
        </Switch>
        
      </Fragment>
    );
  }
}
//получение языка в пропах
const mapStateToProps=state=>{return {language: state.language.language}}
//отправляем пропы с языком
const mapDispatchToProps=dispatch=>{return{
  languageRu:()=>dispatch(actions.languageRu('Ru')),
languageEn:()=>dispatch(actions.languageEn('En'))}}

export default connect(mapStateToProps,mapDispatchToProps)(Navigation)