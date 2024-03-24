import React from "react";
import {Menu} from 'antd';
import { Input, Space } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';

const { Search } = Input;
const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

function AppHeader(){
    return(
        <div className="container-fluid">
            <div className="header">
                <div className="demo-logo">
                <i className="fas fa-bolt"></i>
                <a href="index.html"> Revano NEWS APP</a>
                </div>
                    <div>
                    <Menu mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key ="1">Home</Menu.Item>
                    <Menu.Item key ="2">About</Menu.Item>
                    <Menu.Item key ="3">News</Menu.Item>
                    </Menu>
                    </div>
                
            </div>
        </div>
    );
}

export default AppHeader;