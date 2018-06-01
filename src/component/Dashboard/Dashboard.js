import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios'
// import './dashboard.css';


class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.deleteHouse = this.deleteHouse.bind(this);
  }
  componentDidMount() {
    axios.get('/api/houses').then(res => {
      this.setState({ list: res.data })
    }).catch(error => console.log('Failed at getting data:' + error))
  }
  deleteHouse(id) {
    console.log('delete')
    axios.delete(`/api/house/${id}`).then(res => {
      this.componentDidMount()
    })
  }
  render() {
    let { list } = this.state;
    let houseList = list.map(house =>
      <House key={house.id}
        name={house.name} address={house.address} city={house.city}
        state={house.state} zip={house.zip} id={house.id} deleteHouse={this.deleteHouse}
        img={house.img} mortgage={house.mortgage} rent={house.rent} />
    )
    return (
      <div className="Dashboard">
        <div id='dashHead'>
          <h1>Dashboard</h1>
          {houseList}
          <Link to='/wizard/step1'><button>Add New Property  </button></Link>
        </div>
        <hr />

      </div>
    );
  }
}

export default Dashboard;
