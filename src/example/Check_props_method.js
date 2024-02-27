import React, { Component } from 'react'

export default class Check_props_method extends Component {
    render() {
        return (

            <button onClick={() => this.props.callMethod()}>Called parent method</button>

        )
    }
}
