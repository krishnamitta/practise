/*eslint-disable*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import data from './data';
import './App.css';
import './table.css'

class App extends Component {


render() {
    return (
<div>

<br />
<br />
<br />
<table >
  <tr>
    <th>yardname</th>
    <th>yardnumber</th>
    <th>lane</th>
    <th>lot</th>
    <th>start</th>
    <th>pre-start</th>
    <th>server</th>
    <th>status</th>
    <th>PredictionFactor</th>
    <th>NOCAgent</th>
    <th>Comments</th>
  </tr>
  <tr>
    <td>{data.item1.yardname}</td>
    <td>{data.item1.yardnumber}</td>
    <td>{data.item1.lane}</td>
    <td>{data.item1.lot}</td>
    <td>{data.item1.start}</td>
    <td>{data.item1.prestart}</td>
    <td>{data.item1.server}</td>
    <td>{data.item1.status}</td>
    <td>{data.item1.PredictionFactor}</td>
    <td>{data.item1.NOCAgent}</td>
    <td>{data.item1.Comments}</td>
  </tr>
  <tr>
  <td>{data.item2.yardname}</td>
  <td>{data.item2.yardnumber}</td>
  <td>{data.item2.lane}</td>
  <td>{data.item2.lot}</td>
  <td>{data.item2.start}</td>
  <td>{data.item2.prestart}</td>
  <td>{data.item2.server}</td>
  <td>{data.item2.status}</td>
  <td>{data.item2.PredictionFactor}</td>
  <td>{data.item2.NOCAgent}</td>
  <td>{data.item2.Comments}</td>
  </tr>
</table>
</div>
    );
  }
}


export default App;
