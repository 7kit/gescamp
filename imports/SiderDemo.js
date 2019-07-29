import React from 'react';
import {Layout, Menu, Icon, Row, Col, Switch, Select, Input, Checkbox} from 'antd';
import 'antd/dist/antd.css';
import Ecouteurs from './BereensComponent';
import StandsListage from './StandsComponent';
import ThemesListage from './ThemesComponent';
import {Stands} from './api/stands';
import {Themes} from './api/theme';
import Formu from './UserForm';
import {Route, Switch as SwitchRouter, Link, NavLink } from 'react-router-dom';

const { Header, Sider, Content } = Layout;
const Option = Select.Option;
const Search = Input.Search;
const SubMenu = Menu.SubMenu;

class SiderDemo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      collapsed: false
  };
}



  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
    /*console.log('refs.search',this.refs.search.input.input.attributes.value.nodeValue);
    console.log('refs.stands',this.refs.stands.rcSelect.state.value);
    console.log('refs.jours',this.refs.jours.rcSelect.state.value);
    console.log('refs.switch',this.refs.switch.rcSwitch.state.checked);*/
  }
/*
  passedData = (selectedUser) => {
    if (this.state.userSelected===false&&selectedUser.nom){
        this.setState((prevState)=>({
          userSelected:!prevState.userSelected,
          selectedUser,
      }));
    }
    else if (this.state.userSelected===true&&selectedUser.nom) {
      this.setState((prevState)=>({
          selectedUser,
      }));
    }
    
  }*/

  
  /*handleCheck = () => {
    this.setState({
      data:this.props.bereens
    })
  }*/

  render() {
    console.log('reçu du cote de Layout',this.state.bereens);
    console.log('les stands du main',this.state.stands);
    console.log('les Themes du main',this.state.themes);
    return (
      <Layout style={{height:'100vh'}}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"><Link to="/">
              <Icon type="user" />
              <span>Béréens</span></Link>
            </Menu.Item>
            <Menu.Item key="2"><Link to="/stands">
              <Icon type="video-camera" />
              <span>Stands</span></Link>
            </Menu.Item>
            <Menu.Item key="3"><Link to="/themes">
              <Icon type="upload" />
              <span>Thèmes</span></Link>
            </Menu.Item>
            <Menu.Item key="4"><Link to="/utilisateurs">
              <Icon type="upload" />
              <span>Utilisateurs</span></Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0, justify: 'start', position: 'fixed', zIndex: 1 }}>
          <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle} />
          </Header>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
          }}
          >
              <SwitchRouter>
                <Route exact path="/" render={(props)=><Ecouteurs bereens={this.props.bereens} stands={this.props.stands} themes={this.props.themes}/>}/>
                <Route path="/stands" render={(props)=><StandsListage  stands={this.props.stands}/>}/>
                <Route path="/themes" render={(props)=><ThemesListage themes={this.props.themes}/>}/>
              </SwitchRouter>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;