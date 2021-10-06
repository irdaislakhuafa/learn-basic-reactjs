import { Component } from "react";
import GrandChild from "./GrandChild";

export default class Child2 extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h2>Child 2 Component</h2>
                <p>Stock : {this.props.stock}</p>
                <GrandChild stock={this.props.stock} />
            </div>
        )
    }
}