import React from "react";
import '../task1/style.scss'



class Header extends React.Component{
    state = {
        changeColor: false
    }
    color = () => {
        this.setState({ changeColor: !this.state.changeColor })
    }

    render() {



        return <>


            <div>

                <p className={`color ${this.state.changeColor ? 'color-green' : 'color-red'} `} >{this.props.text}</p>
                <button onClick={this.color} >Click me</button>

            </div>
        </>




    }


}

export default Header