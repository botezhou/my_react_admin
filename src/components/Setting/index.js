import React from 'react';
import {connect} from "react-redux";
import { Icon, Button, Switch, Tooltip } from 'antd';
import { toggleThemeColor, toggleCollapsed, toggleFixedHead, toggleIsBox } from '../../store/actions/themes-actions'
import {storage} from '../../utils/storage';
const bgArr = [
    {
        bgLogo: 'bg-black',
        bgHead: 'bg-white-only',
        bgSlider: 'bg-black',
        key: 0
    },
    {
        bgLogo: 'bg-white-only',
        bgHead: 'bg-black',
        bgSlider: 'bg-black',
        key: 1
    },
    {
        bgLogo: 'bg-dark',
        bgHead: 'bg-white',
        bgSlider: 'bg-dark',
        key: 2
    },
    {
        bgLogo: 'bg-dark',
        bgHead: 'bg-dark',
        bgSlider: 'bg-dark',
        key: 3
    },
    {
        bgLogo: 'bg-white-only',
        bgHead: 'bg-white-only',
        bgSlider: 'bg-black',
        key: 4
    },
    {
        bgLogo: 'bg-info',
        bgHead: 'bg-info',
        bgSlider: 'bg-light',
        key: 5
    },
    {
        bgLogo: 'bg-primary',
        bgHead: 'bg-white-only',
        bgSlider: 'bg-dark',
        key: 6
    },
    {
        bgLogo: 'bg-primary',
        bgHead: 'bg-primary',
        bgSlider: 'bg-dark',
        key: 7
    },
    {
        bgLogo: 'bg-info',
        bgHead: 'bg-white-only',
        bgSlider: 'bg-dark',
        key: 8
    },
    {
        bgLogo: 'bg-info',
        bgHead: 'bg-info',
        bgSlider: 'bg-black',
        key: 9
    },
    {
        bgLogo: 'bg-danger',
        bgHead: 'bg-white-only',
        bgSlider: 'bg-dark',
        key: 10
    },
    {
        bgLogo: 'bg-danger',
        bgHead: 'bg-danger',
        bgSlider: 'bg-dark',
        key: 11
    },
]
class Setting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            key: props.themeColor.key
        }
    };
    setClick() {
        this.setState({
            active: !this.state.active
        })
    }
    // 是否固定头部
    onTopChange(checked) {
        this.props.totop(checked);
        storage.set('fixedHead',checked);
    };
    // 是否折叠导航
    onColnavChange(checked) {
        this.props.trigger(!checked);
        storage.set('collapsed',!checked);
    };
    onBoxChange(checked) {
        this.props.changeIsBox(checked);
        storage.set('isBox',checked);
    };
    // 改变主题颜色
    bgItemClick(item) {
        this.setState({
            key: item.key
        });
        this.props.changeThemes(item);
        storage.set('themeColor',item);
    };
    render() {
        return (
            <div className={ this.state.active? 'settings active': 'settings'}>
                <Tooltip placement="left" defaultVisible={false} title="设置">
                    <div className="setIcon" onClick={this.setClick.bind(this)}>
                        <Icon className="setting" type="setting" />
                    </div>
                </Tooltip>

                <div className="panel-heading clearfix">
                    设置
                    <Button className="rest_btn" type="danger" shape="round" size="small">重置</Button>
                </div>
                <div className="setting_body">
                    <div className="panel-body">
                        <div className="panel-item clearfix">
                            <span className="fl">固定头部</span>
                            <Switch className="fr" onChange={this.onTopChange.bind(this)} checkedChildren="开" unCheckedChildren="关" defaultChecked={this.props.fixedHead} />
                        </div>
                        <div className="panel-item clearfix">
                            <span className="fl">折叠导航</span>
                            <Switch className="fr" onChange={this.onColnavChange.bind(this)} checkedChildren="开" unCheckedChildren="关" defaultChecked={!this.props.collapsed}  />
                        </div>
                        <div className="panel-item clearfix">
                            <span className="fl">盒子模型</span>
                            <Switch className="fr" onChange={this.onBoxChange.bind(this)} checkedChildren="开" unCheckedChildren="关" defaultChecked={this.props.isBox}  />
                        </div>
                    </div>
                </div>
                <div className="clearfix bgBox">
                    {bgArr.map((item,index)=>{
                        return (
                            <div className="bgItem" key={index} onClick={this.bgItemClick.bind(this,item)}>
                                <div className={`bgLogo ${item.bgLogo}`}></div>
                                <div className={`bgHead ${item.bgHead}`}></div>
                                <div className={`bgSlider ${item.bgSlider}`}></div>
                                <div className="bgMain"></div>
                                { index === this.state.key &&
                                    <div className="bgMask"><Icon type="check-circle" /></div>
                                } 
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        );
    };
}
const mapStateToProps = (state)=> {
    return {
        collapsed:state.themes.collapsed,
        themeColor: state.themes.themeColor,
        fixedHead: state.themes.fixedHead,
        isBox: state.themes.isBox
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        trigger:(data)=>{
            dispatch(toggleCollapsed(data));
        },
        totop:(data)=>{
            dispatch(toggleFixedHead(data));
        },
        changeThemes:(data)=>{
            dispatch(toggleThemeColor(data));
        },
        changeIsBox:(data)=>{
            dispatch(toggleIsBox(data));
        }
    }
 };
export default connect(mapStateToProps,mapDispatchToProps)(Setting);
