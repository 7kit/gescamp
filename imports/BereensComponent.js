import React from 'react';
import {Icon, Row, Col, Switch, Select, Input, Checkbox}from 'antd';
import Ecouteurs from './EcouteursListing';
import {matchArrays, differeBereens} from './Utils';

import {App as DrawerBereens} from './DrawerBereens';
import DrawerUI from './DrawerBereensUI';


const Option = Select.Option;
const Search = Input.Search;

export default class BereensComponent extends React.Component{

  constructor(props){
    super(props);
    this.state= {
      data:this.props.bereens,
      stands:[],
      themes:[],
      visible:false,
      userTM:{},
    }
  }

  toggleDrawer(){
    const abcd = this.state.visible;
    this.setState({
      visible: !!abcd,
    })
  }

  passedData=(visible, userTM)=>{
    this.setState({
      visible,
      userTM,
    });
  }


  // static getDerivedStateFromProps(nextProps, prevState){
  //    if(nextProps.bereens !== prevState.data){
  //      return { data: nextProps.bereens};
  //   } 
  //   else {
  //      return null;
  //   }
  // }


  componentDidUpdate(prevProps) {
    const textFilt = this.refs.search.input.input.attributes.value.nodeValue;
    const standsFilt = this.refs.stands.rcSelect.state.value;
    const joursFilt = this.refs.jours.rcSelect.state.value;
    const sdaFilt = this.refs.switch.rcSwitch.state.checked;
    console.log('COMPONENT DID UPDATE IN BEREENS with data', this.state.data);
    if (differeBereens(prevProps.bereens, this.props.bereens)) {
      this.setState({
        data:this.props.bereens
      });
    }
    if (this.props.stands.length!==prevProps.stands.length) {
      /*const children = [];
      for (let i = 0; i < this.props.stands.length; i++) {
        children.push(<Option key={this.props.stands[i]._id}>{this.props.stands[i].description}</Option>);
      }*/
      let permittedValues = [];
       for (let i = 0; i < this.props.stands.length; i++){
          permittedValues[i] = this.props.stands[i]["_id"]["_str"];
       }
      this.setState({
        stands:permittedValues,
      });
    }
    if (this.props.themes.length!==prevProps.themes.length) {
      let permitted=[];
      for (let i = 0; i < this.props.themes.length; i++){
         permitted[i] = this.props.themes[i]["_id"]["_str"];
      }
      this.setState({
        themes:permitted
      });
    }
  }

    changeInput = (e) => {
      e.preventDefault();
      const textFilt = this.refs.search.input.input.attributes.value.nodeValue;
      const standsFilt = this.refs.stands.rcSelect.state.value;
      const joursFilt = this.refs.jours.rcSelect.state.value;
      const sdaFilt = this.refs.switch.rcSwitch.state.checked;
      //console.log(textFilt,standsFilt,joursFilt,sdaFilt);
      let arr=[];
      if (sdaFilt){
        arr = this.props.bereens.filter(el=> 
        (el.sda===sdaFilt)&&(el.nom.toLowerCase().includes(textFilt.trim()))&&(matchArrays(el.stands, standsFilt))&&(matchArrays(el.themes, joursFilt)));
      }else{
        arr = this.props.bereens.filter(el=>
          (el.nom.toLowerCase().includes(textFilt.trim()))&&(matchArrays(el.stands, standsFilt))&&(matchArrays(el.themes, joursFilt)));
      }; 
      this.setState({
         data :arr,
      })
    }

    handleChangeStand = (value) => {
      const textFilt = this.refs.search.input.input.attributes.value.nodeValue;
      //const standsFilt = this.refs.stands.rcSelect.state.value;
      const joursFilt = this.refs.jours.rcSelect.state.value;
      const sdaFilt = this.refs.switch.rcSwitch.state.checked;
      console.log(value, ' les stands', this.state.stands, 'la conformité : ',matchArrays(this.state.stands,value));
      let arr=[];
      if (sdaFilt){
        arr = this.props.bereens.filter(el=> 
        (el.sda===sdaFilt)&&(el.nom.toLowerCase().includes(textFilt.trim()))&&(matchArrays(el.stands, value))&&(matchArrays(el.themes, joursFilt)));
      }else{
        arr = this.props.bereens.filter(el=>
          (el.nom.toLowerCase().includes(textFilt.trim()))&&(matchArrays(el.stands, value))&&(matchArrays(el.themes, joursFilt)));
      };
      this.setState({
         data :arr,
      }); 
    }

    handleChangeJours = (value) => {
      const textFilt = this.refs.search.input.input.attributes.value.nodeValue;
      const standsFilt = this.refs.stands.rcSelect.state.value;
      //const joursFilt = this.refs.jours.rcSelect.state.value;
      const sdaFilt = this.refs.switch.rcSwitch.state.checked;
      //console.log(value);
      let arr=[];
            if (sdaFilt){
              arr = this.props.bereens.filter(el=> 
              (el.sda===sdaFilt)&&(el.nom.toLowerCase().includes(textFilt.trim()))&&(matchArrays(el.stands, standsFilt))&&(matchArrays(el.themes, value)));
            }else{
              arr = this.props.bereens.filter(el=>
                (el.nom.toLowerCase().includes(textFilt.trim()))&&(matchArrays(el.stands, standsFilt))&&(matchArrays(el.themes, value)));
            };
            this.setState({
               data :arr,
            });
    }

    handleSwitch = (checked) => {
  /*    console.log(this.props.bereens);
      console.log(this.state.data);*/
      const textFilt = this.refs.search.input.input.attributes.value.nodeValue;
      const standsFilt = this.refs.stands.rcSelect.state.value;
      const joursFilt = this.refs.jours.rcSelect.state.value;
      //const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
      let arr=[];
      if (checked){
        arr = this.props.bereens.filter(el=> 
        (el.sda===checked)&&(el.nom.toLowerCase().includes(textFilt.trim()))&&(matchArrays(el.stands, standsFilt))&&(matchArrays(el.themes, joursFilt)));
      }else{
        arr = this.props.bereens.filter(el=>
          (el.nom.toLowerCase().includes(textFilt.trim()))&&(matchArrays(el.stands, standsFilt))&&(matchArrays(el.themes, joursFilt)));
      };
      this.setState({
         data :arr,
      });
      /*console.log(`switch to ${checked}`);
      arr.filter(el => el === 2 || el === 4);*/
    }
  render(){
    return(
      <div>
      <Row>{this.state.data.length}{/* partcipants conformes aux critères de sélection sur {this.props.bereens} totals inscrits*/}</Row>
      <Row>
                  <Col span={5}>Nom :
                    <Search
                          placeholder="ex: TOGAN, FOUSSENI"
                          ref="search"
                          onSearch={value => console.log(value)}
                          onChange={this.changeInput}
                          enterButton
                        />
                  </Col>
                  <Col span={8}>Stands :
                    <Select
                              mode="multiple"
                              size='small'
                              ref="stands"
                              placeholder="Choisir stands..."
                              style={{ width: '100%' }}
                              onChange={this.handleChangeStand}
                            >
                            {this.props.stands.map(d => <Option key={d._id}>{d.description}</Option>)}
                    </Select>
                  </Col>
                  <Col span={8}>Jours:
                    <Select
                              mode="multiple"
                              size='small'
                              ref="jours"
                              placeholder="Choisir Jours"
                              style={{ width: '100%' }}
                              onChange={this.handleChangeJours}
                            >
                            {this.props.themes.map(d => <Option key={d._id}>{d.description}</Option>)}
                    </Select>
                  </Col>
                  <Col span={3}>
                    // SDA : <Switch 
                                checkedChildren={<Icon type="check" />} 
                                unCheckedChildren={<Icon type="close"/>}
                                onChange={this.handleSwitch}
                                ref="switch"
                                defaultChecked />
                    <DrawerBereens _id="" stands={this.props.stands} themes={this.props.themes}/>
                    {/*<DrawerUI visible={this.state.visible} userTM={this.state.userTM} toggleDrawer={toggleDrawer} stands={this.props.stands} themes={this.props.themes}/>*/}
                  </Col>
                </Row>
                <Row>
                  <Ecouteurs bereens={this.state.data} stands={this.props.stands} themes={this.props.themes}/>
                </Row>
        </div>)
  }
}