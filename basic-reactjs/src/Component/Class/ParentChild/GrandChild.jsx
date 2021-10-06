import { Component } from "react";

export default class GrandChild extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h2>Grand Child Component</h2>
                <p>Stock : {this.props.stock}</p>
            </div>
        )
    }
}