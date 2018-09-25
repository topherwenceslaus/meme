import React, {Component} from "react";
import {connect} from  'react-redux'

class Error extends Component{
    render(){
        console.log(this.props.data.isError)
        if(this.props.data.isError) {
            return(
                <div>
                    <p>Insufficient Balance</p>     
                </div>
            )
        }
        return null
    }
}

const mapStateToProps = (state) =>{
    return {
        data: state
    }  
}

export default connect(mapStateToProps)(Error)