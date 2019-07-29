import React from 'react';
import {List, Button, Avatar} from 'antd';
import {Bereens} from './api/bereens';
import {App as DrawerBereens} from './DrawerBereens';


export default class EcouteurUnique extends React.Component{

	constructor(props){
		super(props);
	}

	/*remove = (id) => {
	    // Remove this TodoItem
	    this.props.removeIt(id);
	  };*/

	handleSelected= (donne, choice)=>{
		//this.props.passedData(donne, choice)
	}
	takedata=()=>{Bereens.find({_id:this.props.ecouteur._id}).fetch()};

	 

	render(){
		return(
				<List.Item key={this.props.ecouteur._id}>
				  <List.Item.Meta
				    avatar={<Avatar src='ecouteur.png' />}
				    title={this.props.ecouteur.nom}
				    //{<a href="https://ant.design">here</a>}
				    description={this.props.ecouteur.prenom}
				  />
				  <div>
				    <DrawerBereens _id={this.props.ecouteur._id} item={this.props.ecouteur} stands={this.props.stands} themes={this.props.themes}/>
				    <Button type="danger" shape="circle" icon="delete" onClick={()=>Bereens.remove(this.props.ecouteur._id)}/>
				{/*<Button type="warning" shape="circle" icon="team" onClick={this.props.passedData(true, this.props.ecouteur)}/>*/}
				  </div>
				</List.Item>
			);
	
	}
	
}