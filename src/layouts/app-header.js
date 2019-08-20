import React from 'react';
import {connect} from "react-redux";
import { Layout, Icon, Modal} from 'antd';
import { toggleCollapsed } from '../store/actions/themes-actions'
import {storage} from '../utils/storage';
const { confirm } = Modal;
const { Header } = Layout;

class Head extends React.Component {
    // constructor(props) {
    //     super(props);
    // };
    trigger() {
        this.props.trigger(!this.props.collapsed);
        storage.set('collapsed',!this.props.collapsed);
    };
    signOutClick(){
        confirm({
            title: '确定要退出后台系统?',
            content: '成功退出后将返回登录页',
            onOk() {
              return new Promise((resolve, reject) => {
                setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
              }).catch(() => console.log('Oops errors!'));
            },
            onCancel() {},
        });
    }
    render() {
        return (
            <Header className={`${this.props.fixedHead?'fixedHead': ''} ${this.props.collapsed?'fixedCol': ''} ${this.props.themeColor.bgHead}`}>
                <div className="header clearfix">
                    <div className="fl">
                        <Icon
                        className="trigger"
                        type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.trigger.bind(this)}
                        />
                    </div>
                    <div className="fr">
                       <Icon onClick={this.signOutClick.bind(this)} type="poweroff" className="poweroff" />
                    </div>
                </div>
            </Header>
        );
    };
}
const mapStateToProps = (state)=> {
    return {
        collapsed:state.themes.collapsed,
        themeColor: state.themes.themeColor,
        fixedHead:  state.themes.fixedHead,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        trigger:(data)=>{
            dispatch(toggleCollapsed(data));
        }
    }
 };
export default connect(mapStateToProps,mapDispatchToProps)(Head);
