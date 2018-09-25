import React, {Component} from "react";
import {connect} from  'react-redux'

class Spent extends Component{
    render(){
        return(
            <div>
                <p>£{this.props.data.spent}</p>
                <p>Total spent</p>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        data: state
    }  
}

export default connect(mapStateToProps)(Spent)

