import React from 'react';
import { List, Avatar, Icon, Row, Col, Button } from 'antd';
import {Themes} from './api/theme';
import DrawerTh from './DrawerBereensUIT'

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

  export default class ThemesComponent extends React.Component{
    constructor(props){
      super(props);
      this.state={
        data:this.props.themes,
        visible:false,
      }
    }


    componentDidUpdate(prevProps) {
      if (this.props.themes.length!==prevProps.themes.length) {
        this.setState({
          themes:this.props.themes,
        });
      }
    }

    onClose= ()=>{
      this.setState({
        visible:false,
      })
    }

    passedData = (data)=>{
      let toMod={};
      Object.assign(toMod, data);
      this.setState({
        visible:true,
        toMod,
      });
      console.log('here is the data received from stands',toMod)
    }



    render(){
      return(
          <div>
            <Row> <Button type="primary" shape="circle" icon="plus" onClick={()=>this.passedData({_id:''})}/>
            <DrawerTh toMod={this.state.toMod} visible={this.state.visible} onClose={this.onClose}/> </Row>
            <Row></Row>
            <Row>
              <List
                itemLayout="vertical"
                size="large"
                pagination={{
                  onChange: (page) => {
                    console.log(page);
                  },
                  pageSize: 3,
                }}
                dataSource={this.props.themes}
                footer={<div><b>ant design</b> footer part</div>}
                renderItem={item => (
                  <List.Item
                    key={item._id}
                    actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                    extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                  >
                    <List.Item.Meta
                      avatar={<Avatar src='ecouteur.png' />}
                      title={<a href="www.allianceeternelle.com/">{item.description}</a>}
                      description={item.description}
                    />
                      <div>
                        <Button type="danger" shape="circle" icon="delete" onClick={()=>Themes.remove(item._id)}/>
                        <Button type="secondary" shape="circle" icon="edit" onClick={()=>this.passedData(item)}/>
                      </div>
                  </List.Item>
                )}
              />
            </Row>
          </div>
          );
    }
  } 