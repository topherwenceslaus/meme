import React, { Component } from 'react';
import {Grid, Row, Col} from "react-bootstrap";
import { connect } from "react-redux";
import './App.css';
import SendMoney from "./Components/SendMoney";
import RadialChart from "./Components/RadialChart"
import TransactionHistory from "./Components/TransactionHistory";
import {initial_balance} from './js/actions/index'
import Error from './Components/Error'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Row>
               <Col xs={12} md={6} className="pane1">
                    <SendMoney />
                    <Error/>
               </Col>
               <Col xs={12} md={6} className="pane2">
                    <Row>
                         <RadialChart  color="#FF8C00" />
                    </Row>
                    <Row>
                         <TransactionHistory />
                    </Row>
               </Col>
          </Row>
        </Grid>
      </div>
    );
  }

  componentDidMount(){
      this.props.dispatch(initial_balance())
  }
}

const mapDispatchToProps = dispatch=>{
  return {
   initial_balance: ()=>dispatch(initial_balance())
 };
};
export default connect(mapDispatchToProps)(App);
