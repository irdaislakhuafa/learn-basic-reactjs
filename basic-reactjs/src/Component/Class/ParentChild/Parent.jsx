import { Component } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

export default class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stock: 10
        }
    }


    reduceStock = (value) => {
        this.setState({
            stock: this.state.stock - value
        })
    }

    render() {
        return (
            <div>
                <Child1
                    stock={this.state.stock}
                    reduceStock={this.reduceStock}
                />
                <Child2 stock={this.state.stock} />
            </div>
        )
    }
}