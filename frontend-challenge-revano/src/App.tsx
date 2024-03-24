import React from 'react';
import { Layout} from 'antd';
import './App.css';
import AppHeader from './Components/Common/header';
import AppHome from './views/home';

function App(){
const { Header, Content} = Layout;

  return (
    <Layout className='mainLayout'>
      <Header>
        <AppHeader></AppHeader>
      </Header>
      <Content>
        <AppHome></AppHome>
      </Content>
    </Layout>
  );
};


export default App;
