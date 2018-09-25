import React, {Component} from "react";
import {Grid,FormGroup, FormControl, InputGroup, ControlLabel, HelpBlock, Button,Row } from 'react-bootstrap';
import {transfer_balance} from '../js/actions/index'
import { connect } from "react-redux";

class SendMoney extends Component {
  constructor(props, context) {
    super(props, context);
  }

  getValidationState() {
    console.log('ons22u')
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }


  onSubmit =(e)=>{
      let {name, email, amount} = this
      let data = {
        name: name.value,
        email: email.value,
        amount: amount.value
      }
      this.props.dispatch(transfer_balance(data))
      name.value = '';
      email.value = '';
      amount.value = '';
      e.preventDefault()
  }

  render() {
    return (
    	
      <form  onSubmit = {this.onSubmit}>
      	<h1>Send Money</h1>
        <FormGroup
          controlId="formBasicText"  
        > 
          
          <div>
          <ControlLabel>Name</ControlLabel>
          <FormControl
          required
            type="text"
            inputRef={el => this.name = el}
          />
          </div>
          <div>
          <ControlLabel>Email</ControlLabel>
          <FormControl required type="email" inputRef={el => this.email = el}/>

          </div>
          <div>
          <ControlLabel>Amount</ControlLabel>
          <FormControl required type="number" min="0" inputRef={el => this.amount = el}/>

          </div>
          <div>
          <Row xs={12} className="submitButtonContainer">
          	<Button className="submitButton" bsStyle="primary" type="submit" bsSize="large"> Send</Button>
          </Row>
          </div>

          



          
    


         



          
        </FormGroup>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch=>{
  return {
   transfer_balance: ()=>dispatch(transfer_balance())
 };
};
export default connect(mapDispatchToProps)(SendMoney);