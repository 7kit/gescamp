import React from 'react';
import {
  List, message, Avatar, Spin,
} from 'antd';
import reqwest from 'reqwest';
import './Layout.css';
import ecouteur from'./ecouteur.png';
import axios from 'axios';

import InfiniteScroll from 'react-infinite-scroller';

const fakeDataUrl ='http://127.0.0.1:8000/ecouteurs/';


class InfiniteListExample extends React.Component {
  state = {
    data: [],
    loading: false,
    hasMore: true,
  }

  componentDidMount() {
    this.fetchData().then((res)=>{
    	this.setState({
    		data:res.data.results
    	})
    })
  }

  fetchData = () => {
    return axios.get('http://127.0.0.1:8000/ecouteurs/');
  }

  handleInfiniteOnLoad = () => {
    let data = this.state.data;
    this.setState({
      loading: true,
    });
    if (data.length > 0) {
      message.warning('Infinite List loaded all');
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
    this.fetchData((res) => {
      data = data.concat(res.results);
      this.setState({
        data,
        loading: false,
      });
    });
  }

  render() {
    return (
      <div className="demo-infinite-container">
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={this.handleInfiniteOnLoad}
          hasMore={!this.state.loading && this.state.hasMore}
          useWindow={false}
        >
          <List
            dataSource={this.state.data}
            renderItem={item => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={<Avatar src={ecouteur} />}
                  title={<a href="https://ant.design">{item.nom}</a>}
                  description={item.email}
                />
                <div>Content</div>
              </List.Item>
            )}
          >
            {this.state.loading && this.state.hasMore && (
              <div className="demo-loading-container">
                <Spin />
              </div>
            )}
          </List>
        </InfiniteScroll>
      </div>
    );
  }
}

export default InfiniteListExample;