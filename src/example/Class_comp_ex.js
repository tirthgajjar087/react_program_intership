import React, { Component, createRef } from 'react'
import Function_com_ex from './Function_com_ex';
import Check_props_method from './Check_props_method';

export default class Class_comp_ex extends Component {

    constructor() {

        super();
        console.log("Hey!I am in constructor.")

        this.state = {
            fname: "tirth",
            lname: "gajjar"
        }

        this.myRef = createRef();

    }

    meKnow = () => {

        console.log("clicked !");

        this.setState({
            fname: "qwe",
            lname: "asd"
        })

    }


    componentDidMount() {

        console.log('my ref is--', this.myRef.current.innerHTML);
        console.log("I'm in component did mount()");

    }

    parentMethod() {
        alert("Called ParentMethod call from parent !")
    }

    handleRef = () => {
        this.myRef.current.hidden = "true"
    }

    render() {
        return (
            <>

                {console.log("I'm in render function")}
                <div>
                    <h1>{this.state.fname}</h1>
                    <h1>{this.state.lname}</h1>
                    <p>{this.props.name}</p>
                    <p ref={this.myRef}>Testing ref</p>

                    <button onClick={this.handleRef}>Change ref</button>

                    {/* On click event fname & lname changed */}
                    <button onClick={this.meKnow}>CHange namee CLick Me !</button>

                    {/* pass methods to parent class */}
                    <Check_props_method callMethod={this.parentMethod} />

                </div>
            </>
        )
    }
}
