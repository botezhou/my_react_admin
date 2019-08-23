import React from 'react';
import { Link }from 'react-router-dom';
import { Breadcrumb  } from 'antd';
import menu from '../../routes/config';
const menusArr = menu.menus;
const titleArr = [];
function parseArr(arr,newArr){
    arr.map(item=>{
        if(item.subs) {
            parseArr(item.subs,newArr)
        }
        newArr.push({key: item.key,title: item.title})
    })
    return newArr
};
parseArr(menusArr,titleArr);

export default class NewBreadcrumb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: '/home',
            title: '首页'
        }
    }
    componentWillReceiveProps(nextProps){
        const pathName = nextProps.location.pathname
        titleArr.map(item=>{
            if(item.key===pathName){
                this.setState({
                    key: item.key,
                    title: item.title
                })
            }
        })
    }
    render() {
        return (
           <Breadcrumb>
                <Breadcrumb.Item key={'home'}>
                    <Link to={'/app/index'}>
                        首页
                    </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item key={this.state.key}>
                    <Link to={this.state.key}>
                        {this.state.title}
                    </Link>
                </Breadcrumb.Item>
           </Breadcrumb>
        );
    }
}