import React from 'react';
import {connect} from "react-redux";
import { Layout, Menu, Icon } from 'antd';
import logo from '../assets/images/logo.png'
import face from '../assets/images/face.jpg'
const { Sider } = Layout;
const { SubMenu } = Menu;
class Slider extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Sider className={`${this.props.themeColor.bgSlider}`} trigger={null} collapsible collapsed={this.props.collapsed}>
                <div className={`logo ${this.props.themeColor.bgLogo}`}><img src={logo} alt="logo" /></div>
                <div className="userBox">
                   <img src={face} alt="face" />
                   <p className="oneline">欢迎您<br/><span className="userName">波特周先生</span></p>
                </div>
                <Menu className={`${this.props.themeColor.bgSlider}`} theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>Option 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span>Option 2</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        className={`${this.props.themeColor.bgSlider}`}
                        title={
                            <span>
                            <Icon type="user" />
                            <span>User</span>
                            </span>
                        }
                        >
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                            <Icon type="team" />
                            <span>Team</span>
                            </span>
                        }
                        >
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9">
                        <Icon type="file" />
                        <span>File</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}
const mapStateToProps = (state)=> {
    return {
        collapsed:state.themes.collapsed,
        themeColor: state.themes.themeColor
    }
};
export default connect(mapStateToProps)(Slider);