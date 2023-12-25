import React from "react";
import '../task2/style.scss'

class Task2 extends React.Component {


    state = {
        isHide: false
    }
    hideText = () => {
        this.setState({ isHide: !this.state.isHide })
    }
    render() {



        return <>


            <div className={'box'}>
                <p>{this.props.title}</p>
                {this.state.isHide ? <p>{this.props.description}</p> : null}
                <button onClick={this.hideText}>Click</button>

            </div>
        </>

    }
}


export default Task2
