import React from 'react';
import {connect} from "react-redux";
import { Layout, BackTop, Card } from 'antd';
import '../assets/css/base.css';
import '../assets/css/scrollbar.css';
import '../assets/css/index.css';
import Header from './app-header';
import Slider from './app-slider';
import Setting from '../components/Setting';
class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapsed: false,
      }
  };
  fn(data) {
    this.setState({
      collapsed: data //把父组件中的parentText替换为子组件传递的值
    },() =>{
       console.log(this.state.collapsed);//setState是异步操作，但是我们可以在它的回调函数里面进行操作
    });

  }
  render() {
      return (
        <div className={this.props.isBox? 'app_w1300': 'App'}>
          <Setting />
          <BackTop />
          <Layout className="Main-wrap">
              <Slider collapsed={this.state.collapsed} />
              <Layout>
                <Header />
                <div className="main_wrap">
                <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
                </div>
              </Layout>
          </Layout>
         
        </div>
      );
  };
}
const mapStateToProps = (state)=> {
  return {
      isBox:state.themes.isBox
  }
};
export default connect(mapStateToProps)(App);
