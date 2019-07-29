import React from 'react';
import {
  List, message, Avatar, Spin, Button,
} from 'antd';
import ItemEcouteur from './ItemEcouteur';
import InfiniteScroll from 'react-infinite-scroller';
//const fakeDataUrl ='http://127.0.0.1:8000/ecouteurs/';
//'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';


class InfiniteListExample extends React.Component {
  state = {
      data: [],
      loading: false,
      hasMore: true,
    }

  componentDidMount() {
      this.setState({
        data: this.props.bereens,
      });
      console.log('reçu niveau Ecouteur listings',this.props.bereens);
  }


  handleInfiniteOnLoad = () => {
    /*let data = this.state.data;
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
      this.setState({
        data,
        loading: false,
      });*/
      return;
  }

  /*removeIt = id => {
    console.log('A l\'instant ...', id);
    this.setState((prevState) => ({
      data: prevState.data.filter((option) => id !== option.nom)
    }));
  };*/
  render() {
    console.log('Me voici dans le Ecouteur listing', this.props);
    return (
      <div className="demo-infinite-container">
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={this.handleInfiniteOnLoad}
          hasMore={false}
          useWindow={false}
        >
          <List
            dataSource={this.props.bereens}
            renderItem={item => (
              <ItemEcouteur 
              ecouteur={item}
              stands={this.props.stands}
              themes={this.props.themes}/>
              /*<List.Item key={item.nom}>
                <List.Item.Meta
                  avatar={<Avatar src={ecouteur} />}
                  title={<a href="https://ant.design">{item.nom}</a>}
                  description={item.prenom}
                />
                <div>
                  <Button type="primary" shape="circle" icon="edit" onClick={this.props.userSelected}/>
                </div>
              </List.Item>*/
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