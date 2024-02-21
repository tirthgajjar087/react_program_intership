import React, { Component } from 'react'

export default class Class_comp_ex extends Component {
    constructor() {
        super();
        console.log("Hey!I am in constructor.")

        this.state = {
            fname: "tirth",
            lname: "gajjar"
        }
    }

    meKnow = () => {
        console.log("clicked !");
        this.setState({
            fname: "qwe",
            lname: "asd"
        })
    }

    componentDidMount() {
        console.log("I'm in component did mount()");
    }

    render() {
        return (
            <>
                {console.log("I'm in render function")}
                <div>
                    <h1>{this.state.fname}</h1>
                    <h1>{this.state.lname}</h1>
                    <p>{this.props.name}</p>

                    <button onClick={this.meKnow}>CLick Me!</button>
                </div>
            </>
        )
    }
}
