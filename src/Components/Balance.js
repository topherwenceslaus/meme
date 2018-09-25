import React, {Component} from "react";
import {connect} from  'react-redux'

class Balance extends Component{
    render(){
        return(
            <div>
                <p>£{this.props.data.left}</p>
                <p>Left Available</p>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        data: state
    }  
}

export default connect(mapStateToProps)(Balance)
