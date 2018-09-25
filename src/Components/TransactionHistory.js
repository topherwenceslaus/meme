import React, {Component} from "react";
import {connect} from  'react-redux'
import Transaction from './Transaction'

class TransactionHistory extends Component {
	
	render() {
		const elements= this.props.data.transactions.map( (transaction,i) => <Transaction key={i} transaction={transaction}/> )
        return (
            <div> 
				<h2>Transactions</h2>
            {elements}
            </div>
        );
	}
}

const mapStateToProps = (state) =>{
    return {
        data: state
    }  
}

export default connect(mapStateToProps)(TransactionHistory)