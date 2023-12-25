import React from "react";
import '../task3/style.scss'

class Task3 extends React.Component {


    state = {
        isTex: false
    }
    changeTex = () => {
        this.setState({ changeText: !this.state.changeText })
    }
    render() {
         return <>


            <div className={'box'}>
                {!this.state.changeText ? <p>{this.props.title}</p> : <p> {this.props.description}</p>}
                {!this.state.changeText ? <p>{this.props.description}</p> : <p> {this.props.title}</p>}
                <button onClick={this.changeTex}>CHANGE</button>

            </div>
        </>
    }
}



export default Task3