import React from 'react';
import { Layout, Menu, Icon, Row, Col} from 'antd';
//import 'antd/dist/antd.css';
//import Inscription from './Inscription';
import Ecouteurs from './EcouteursListing';
import Formu from './UserForm';
import Transfer from './Transferer';

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    collapsed: false,
    userSelected:false,
    selectedUser:{}
  };
}
  
  toggleForm = () => {
    this.setState({
      userSelected: !this.state.userSelected,
    })
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

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
    
  }

  render() {
    return (
      <Layout style={{height:'100vh'}}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>Béréens</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>Présences</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>Jours</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="upload" />
              <span>Themes</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0, justify: 'start' }}>
          <Row>
                <Col span={1}><Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle} />
                </Col>
                <Col span={23}></Col>
          </Row>
          </Header>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
          }}
          >
            <div> Content
              <Ecouteurs userSelected={this.toggleForm} passedData={this.passedData} />
              <Formu userSelected={this.state.userSelected} data={this.state.selectedUser} formDown={this.toggleForm}/>
              <Transfer/>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;