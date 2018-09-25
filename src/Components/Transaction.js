import React, {Component} from "react";
import {Grid, Row, Col} from "react-bootstrap";

class Transaction extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let {name, email,amount} = this.props.transaction
        return(
            <div>
                <Col xs={6} md={6} className="pane1">
                    <p>{name}</p>
                    <p>{email}</p>
               </Col>
               <Col xs={6} md={6} className="pane1">
                    <p>£{amount}</p> 
               </Col>
            </div>
        )
    }
}



export default Transaction