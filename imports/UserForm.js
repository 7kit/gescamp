import React from 'react';
import {
  Form, Input, Button, Radio,
} from 'antd';
import {openNotification} from './Notification'

class FormLayoutDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formLayout: 'horizontal',
      donne: {
        id: this.props.donne._id,
        nom: this.props.donne.nom||'',
        prenom:this.props.donne.prenom||''
      }
    };
  }

  handleFormLayoutChange = (e) => {
    this.setState({ formLayout: e.target.value });
  }

  handleSubmit = () =>{
    this.props.formDown;
          Bereens.update(this.props.data._id, {$set: {nom: 1}});
  }

  render() {
    const { formLayout } = this.state;
    const formItemLayout = formLayout === 'horizontal' ? {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    } : null;
    const buttonItemLayout = formLayout === 'horizontal' ? {
      wrapperCol: { span: 14, offset: 4 },
    } : null;
    console.log('voici les donnees');
    return (
      this.props.userSelected&&(<div>
        <Form layout={formLayout}>
          <Form.Item
            label="Form Layout"
            {...formItemLayout}
          >
            <Radio.Group defaultValue="horizontal" onChange={this.handleFormLayoutChange}>
              <Radio.Button value="horizontal">Horizontal</Radio.Button>
              <Radio.Button value="vertical">Vertical</Radio.Button>
              <Radio.Button value="inline">Inline</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Field A"
            {...formItemLayout}
          >
            <Input placeholder="input placeholder" value={this.state.donne.nom}/>
          </Form.Item>
          <Form.Item
            label="Field B"
            {...formItemLayout}
          >
            <Input placeholder="input placeholder" value={this.state.donne.prenom}/>
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary" onClick={this.props.formDown} >Submit</Button>
          </Form.Item>
        </Form>
      </div>)
    );
  }
}

export default FormLayoutDemo;