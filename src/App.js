import React from 'react';
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom'
import { BackTop } from 'antd';
import './styles/index.less';
import Header from './layout/Header';
import SideNav from './layout/SideNav';
import Setting from './components/Setting';
import Breadcrumb from './components/Breadcrumb';
import RouteIndex from "./routes";
class App extends React.Component {
  render() {
    const { auth = { data: {} } } = this.props;
      return (
        <div className={this.props.isBox? 'app_w1300': 'App'}>
          <Setting />
          <BackTop />
          <div className="layout_wrap">
              <div className={`left_slider ${this.props.themeColor.bgSlider}`}><SideNav /></div>
              <div className={`main ${this.props.collapsed ? 'pl80':'pl200'}`}>
                <Header />
                <div className="content_wrap">
                    <Breadcrumb {...this.props} />
                    <RouteIndex auth={auth} />
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
export default withRouter(connect(mapStateToProps)(App));
