import React from "react";
import "../task4/style.scss"

class Task4 extends React.Component {

    state = {
        isHide: false
    }
   unHide = () => {
        this.setState({ isHide: !this.state.isHide })
    }

    render() {
        return <>


            <div>
                {!this.state.isHide ? <p>{this.props.title}</p> :null}
         
                <button onClick={this.unHide}>Click</button>

            </div>


        </>
    }
}

export default Task4