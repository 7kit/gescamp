import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import Layout from './../imports/SiderDemo';
import React from 'react';
import ReactDOM from 'react-dom';
import Transfer from 'antd/lib/transfer';
import {Bereens} from './../imports/api/bereens';
import {Stands} from './../imports/api/stands';
import {Themes} from './../imports/api/theme';
import { BrowserRouter as Router} from 'react-router-dom';


import './main.html';

//ReactDOM.render(<SiderDemo/>, document.getElementById('app'));
/*class App extends React.Component {
  state = {
    mockData: [],
    targetKeys: [],
  }

  componentDidMount() {
    this.getMock();
  }

  getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  }

  filterOption = (inputValue, option) => option.description.indexOf(inputValue) > -1

  handleChange = (targetKeys) => {
    this.setState({ targetKeys });
  }

  handleSearch = (dir, value) => {
    console.log('search:', dir, value);
  };

  render() {
    return (
      <Transfer
        dataSource={this.state.mockData}
        showSearch
        filterOption={this.filterOption}
        targetKeys={this.state.targetKeys}
        onChange={this.handleChange}
        onSearch={this.handleSearch}
        render={item => item.title}
      />
    );
  }
};*/

//import { Transfer } from 'antd';
Meteor.startup(() => {
	Tracker.autorun(() => {
		console.log('bon du cote client aussi');
		let bereens = Bereens.find().fetch();
		let stands = Stands.find().fetch();
		let themes = Themes.find().fetch();
		console.log('reçcu niveauu mainjs',bereens);
		console.log('reçcu niveauu mainjs',stands);
    	ReactDOM.render(<Router><Layout bereens={bereens} stands={stands} themes={themes}/></Router>, document.getElementById('app'));
    });
});
/*Meteor.startup(() => {
  Tracker.autorun(() => {
    let bereens = Bereens.find({}, {sort: {score: -1}}).fetch();
    let title = 'Score Keep';
    ReactDOM.render(<App title={title} players={players}/>, document.getElementById('app'));
  });
});*/
