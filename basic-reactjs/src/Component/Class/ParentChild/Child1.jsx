import { Component } from "react";

export default class Child1 extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    value = 1
    render() {
        return (
            <div>
                <h2>Child 1 Component</h2>
                <p>Stock : {this.props.stock}</p>
                <button
                    className="btn-buy"
                    onClick={() => this.props.reduceStock(this.value)}
                    disabled={this.props.stock === 0}
                >
                    Beli</button>
            </div>
        )
    }
}