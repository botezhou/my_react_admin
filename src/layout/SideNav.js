import React from 'react';
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
import {Link} from 'react-router-dom'
import config from '../routes/config'
import logo from '../assets/images/logo.png'
import face from '../assets/images/face.jpg'
const { Sider } = Layout;
const { SubMenu } = Menu;
const {menus}  = config
class Slider extends React.Component {
    state = {
        openKeys: [],
        selectedKeys: []
    }

    componentDidMount() {
        // 防止页面刷新侧边栏又初始化了
        const pathname = this.props.location.pathname
        //获取当前所在的目录层级
        const rank = pathname.split('/')
        switch (rank.length) {
            case 2 :  //一级目录
            this.setState({
                selectedKeys: [pathname]
            })
            break;
            case 3 :  //二级目录
            this.setState({
                openKeys: ['/'+rank[1]],
                selectedKeys: [pathname]
            })
            break;
            case 5 : //三级目录，要展开两个subMenu
            this.setState({
                selectedKeys: [pathname],
                openKeys: [rank.slice(0, 3).join('/'), rank.slice(0, 4).join('/')]
            })
            break;
            default :
            this.setState({
                selectedKeys: [pathname],
                openKeys: [pathname.substr(0, pathname.lastIndexOf('/'))]
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        //当点击面包屑导航时，侧边栏要同步响应
        const pathname = nextProps.location.pathname
        if (this.props.location.pathname !== pathname) {
            this.setState({
            selectedKeys: [pathname],
            })
        }
    }

    onOpenChange = (openKeys) => {
        //此函数的作用只展开当前父级菜单（父级菜单下可能还有子菜单）
        if (openKeys.length === 0 || openKeys.length === 1) {
            this.setState({
            openKeys
            })
            return
        }

        //最新展开的菜单
        const latestOpenKey = openKeys[openKeys.length - 1]
        //判断最新展开的菜单是不是父级菜单，若是父级菜单就只展开一个，不是父级菜单就展开父级菜单和当前子菜单
        //因为我的子菜单的key包含了父级菜单，所以不用像官网的例子单独定义父级菜单数组，然后比较当前菜单在不在父级菜单数组里面。
        //只适用于3级菜单
        if (latestOpenKey.includes(openKeys[0])) {
            this.setState({
            openKeys
            })
        } else {
            this.setState({
            openKeys: [latestOpenKey]
            })
        }
    }
    renderMenuItem = ({key, icon, title,}) => {
        return (
          <Menu.Item key={key}>
            <Link to={key}>
              {icon && <Icon type={icon}/>}
              <span>{title}</span>
            </Link>
          </Menu.Item>
        )
    }
    renderSubMenu = ({key, icon, title, subs}) => {
        return (
            <SubMenu key={key} title={<span>{icon && <Icon type={icon}/>}<span>{title}</span></span>}>
            {
                subs && subs.map(item => {
                    return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
                })
            }
            </SubMenu>
        )
    }
    render() {
        const {openKeys, selectedKeys} = this.state
        return (
            <Sider className={`${this.props.themeColor.bgSlider}`} trigger={null} collapsible collapsed={this.props.collapsed}>
                <div className={`logo ${this.props.themeColor.bgLogo}`}><img src={logo} alt="logo" /></div>
                <div className="userBox">
                   <img src={face} alt="face" />
                   <p className="oneline">欢迎您<br/><span className="userName">波特周先生</span></p>
                </div>
                
                <Menu className={`${this.props.themeColor.bgSlider}`} 
                    onOpenChange={this.onOpenChange}
                    onClick={({key}) => this.setState({selectedKeys: [key]})}
                    openKeys={openKeys}
                    selectedKeys={selectedKeys}
                    theme="dark" 
                    mode="inline">
                    {menus.map(item=>{
                        return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
                    })}
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
export default withRouter(connect(mapStateToProps)(Slider));
