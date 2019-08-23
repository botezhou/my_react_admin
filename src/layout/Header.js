import React from 'react';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import { Layout, Icon, Modal} from 'antd';
import { toggleCollapsed } from '../store/actions/themes-actions'
import {storage} from '../utils/storage';
const { confirm } = Modal;
const { Header } = Layout;

class Head extends React.Component {
    trigger() {
        this.props.trigger(!this.props.collapsed);
        storage.set('collapsed',!this.props.collapsed);
    };
    signOutClick(){
        const _this = this;
        confirm({
            title: '确定要退出后台系统?',
            content: '成功退出后将返回登录页',
            onOk(){
                console.log(_this.props)
                _this.props.history.push('/login');
            },
            onCancel() {},
        });
    }
    render() {
        return (
            <Header className={`${this.props.fixedHead?'fixedHead': ''} ${this.props.collapsed?'fixedCol': ''} ${this.props.themeColor.bgHead}`}>
                <div className="header clearfix">
                    <div className="fl slider_collapsed">
                        <Icon
                        className="trigger"
                        type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.trigger.bind(this)}
                        />
                    </div>
                    <div className="fr head_right">
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
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Head));
