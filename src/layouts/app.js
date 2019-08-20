import React from 'react';
import {connect} from "react-redux";
import { BackTop } from 'antd';
import '../assets/css/base.css';
import '../assets/css/scrollbar.css';
import '../assets/css/index.css';
import Header from './app-header';
import Slider from './app-slider';
import Setting from '../components/Setting';
import RouterList from "../router/index";
class App extends React.Component {
  render() {
      return (
        <div className={this.props.isBox? 'app_w1300': 'App'}>
          <Setting />
          <BackTop />
          <div className="Main-wrap">
              <div className={`left_slider ${this.props.themeColor.bgSlider}`}><Slider /></div>
              <div className={`main ${this.props.collapsed ? 'pl80':'pl200'}`}>
                <Header />
                <div className="main_wrap">
                    <RouterList />
                </div>
              </div>
          </div>
         
        </div>
      );
  };
}
const mapStateToProps = (state)=> {
  return {
      isBox:state.themes.isBox,
      themeColor: state.themes.themeColor,
      collapsed:state.themes.collapsed
  }
};
export default connect(mapStateToProps)(App);
