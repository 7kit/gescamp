import React from 'react';
import {
  Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Icon, Checkbox
} from 'antd';
import {Bereens} from './api/bereens';
import {Stands} from './api/stands';
import {Themes} from './api/theme';


const { Option } = Select;

class DrawerForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id:this.props._id,
      userTM:this.props.item,
      visible: false};
  }
    componentDidUpdate(prevProps) {
      //if (this.props._id!==prevProps._id) {
        if(!!this.props._id){
          let userTM = Bereens.find({_id:this.props._id}).fetch();
          console.log('COMPONENT DID UPDATE IN DRAWERLAAA', userTM, this.props._id, prevProps._id);
          if (this.props._id!=this.state.id) {
            let identif=this.props._id;
            this.setState({id:identif});
          }
          
          // that.props.form.setFieldsValue({
          //     nom: userTM.nom,
          //     prenom: userTM.prenom,
          //     stands: userTM.stands,
          //     themes: userTM.themes,
          //     sda:userTM.sda,
          //   });
        }
      //}
    }

    componentDidMount(){
      if (!!this.props._id){
        let userTM = Bereens.find({_id:this.props._id}).fetch();
            this.setState({
              userTM,
            });
            this.props.form.setFieldsInitialValue({
                  nom: userTM.nom,
                  prenom: userTM.prenom,
                  stands: userTM.stands,
                  themes: userTM.themes,
                  sda:userTM.sda,
                });
      }
    }

    componentWillMount(){
      console.log('COMPONENT WILL MOUNT IN DRAWER', this.props.item);
    }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    console.log('voici le id',this.props._id);
    if (!!this.props._id) {
      let userTM = Bereens.find({_id:this.props._id}).fetch();
      console.log(userTM);
    }

    this.setState({
      visible: false,
    });
  };

  handleSubmit = () => {
    let b={};
   Object.assign(b, this.props.item);
    this.props.form.validateFields((err, values) => {
      const that=this;
      if (!err) {
        if (!!this.props._id) {
          Bereens.update({_id:this.props._id}, {$set:{
            nom:values.nom,
            prenom:values.prenom,
            stands:values.stands,
            themes:values.themes,
            sda:values.sda
          }})
        }
        else {
                 Bereens.insert({
                   nom:values.nom,
                   prenom:values.prenom,
                   stands:values.stands,
                   themes:values.themes,
                   sda:values.sda
                  });
                // console.log(values);
              }
            that.props.form.setFieldsValue({
                  nom: '',
                  prenom: '',
                  stands: [],
                  themes: [],
                  sda:false,
                });
            this.setState({
              visible:false,
            });
          }
    });
  }

  render() {
    let userTM = this.props.item;
    if((!!this.props._id)&&(this.state.visible)){
            /*this.props.form.setFieldsValue({
                nom: userTM.nom,
                prenom: userTM.prenom,
                stands: userTM.stands,
                themes: userTM.themes,
                sda:userTM.sda,
              });*/
        }
    const { getFieldDecorator } = this.props.form;
    let stands = Stands.find().fetch();
    let themes = Themes.find().fetch();
   // let userTM = Bereens.find({_id:this.props._id}).fetch();
   let a={};
   Object.assign(a, this.props.item);
    console.log('this.props.form',a.nom);
    return (
      <div>
        <Button icon={!!this.props._id?"edit":"plus"} shape="circle" type="primary" onClick={this.showDrawer}/>
        <Drawer
          title="Un NOUVEAU PARTICIPANT !"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          style={{
            overflow: 'auto',
            height: 'calc(100% - 108px)',
            paddingBottom: '108px',
          }}
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Nom">
                  {getFieldDecorator('nom', {
                    initialValue:a.nom,
                    rules: [{ required: true, message: 'Please enter user name' }],
                    
                  })(<Input 
                        placeholder="Please enter user name" />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Prénom">
                  {getFieldDecorator('prenom', {
                    rules: [{ required: true, message: 'Please enter url' }],
                    initialValue:a.prenom,
                  })(
                    <Input
                      style={{ width: '100%' }}
                      placeholder="Prénom ..."
                    />
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Stands">
                  {getFieldDecorator('stands', {
                    rules: [{ required: false, message: 'Les Stands s\'il y en a ' }],
                    initialValue:a.stands,
                  })(<Select
                              mode="multiple"
                              size='small'
                              placeholder="Choisir si nécessaire un stand"
                              style={{ width: '100%' }}
                            >
                            {this.props.stands.map(d => <Option key={d._id}>{d.description}</Option>)}
                    </Select>)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Themes">
                  {getFieldDecorator('themes', {
                    rules: [{ required: false, message: 'Les themes suivies s\'il y en a' }],
                    initialValue:a.themes,
                  })(
                    <Select
                              mode="multiple"
                              size='small'
                              placeholder="Choisir les themes si besoin est"
                              style={{ width: '100%' }}
                            >
                            {this.props.themes.map(d => <Option key={d._id}>{d.description}</Option>)}
                    </Select>
                  )}
                </Form.Item>
              </Col>
            </Row>
            
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item>
                  {getFieldDecorator('sda', {
                              valuePropName: 'checked',
                              initialValue:a.sda,
                            })(
                              <Checkbox>SDA</Checkbox>
                            )}
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Genre">
                  {getFieldDecorator('genre', {
                              valuePropName: 'checked',
                              initialValue:a.sda,
                            })(
                              <Checkbox></Checkbox>
                            )}
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
            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
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

export const App = Form.create()(DrawerForm);