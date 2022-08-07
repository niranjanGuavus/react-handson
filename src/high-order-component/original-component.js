import { Component, Fragment } from "react";

class OriginalComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {handelClick, show} = this.props;
        return(
            <Fragment>
                Orig-comp Button click
                <br></br>
                <button onClick={handelClick}>{show}</button>
            </Fragment>
        ) 
    }
}

export default OriginalComponent;