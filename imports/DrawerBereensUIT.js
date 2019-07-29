import React from 'react';
import {
  Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Icon, Checkbox
} from 'antd';
import {Themes} from './api/theme';


const { Option } = Select;

export default class DrawerForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  handleSubmit=()=>{
    const textTitle = this.refs.titleThemes.state.value;
    const textDescription = this.refs.descriptionThemes.state.value;
    if (!!this.props.toMod._id) {
      console.log('Bon pour une mise à jour');
    }else{
      console.log('plutot bon pour une insertion');
    }
  }

  componentDidUpdate(prevProps) {
    /*if(this.props.toMod){
      if (this.props.toMod.description!==prevProps.toMod.description) {
        this.setState({
          toMod:this.props.toMod,
        });
      }
    }*/
    
  }

  render() {
    let d={};
    Object.assign(d, this.props.toMod);
    console.log('this.props.toMod', d.description);
    return (
      <div>
        <Drawer
          title="STANDS !"
          width={720}
          onClose={this.props.onClose}
          visible={this.props.visible}
          style={{
            overflow: 'auto',
            height: 'calc(100% - 108px)',
            paddingBottom: '108px',
          }}
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Titre">
                  <Input ref="titleThemes" placeholder={d.description||"Stand title"} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Description">
                  <Input
                      ref="descriptionThemes"
                      style={{ width: '100%' }}
                      placeholder={d.description||"Stand description"}
                    />
                </Form.Item>
              </Col>
            </Row>
            
          </Form>
          <div
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e9e9e9',
              padding: '10px 16px',
              background: '#fff',
              textAlign: 'right',
            }}
          >
            <Button onClick={this.props.onClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} type="primary">
              Submit
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
}