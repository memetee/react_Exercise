import React, { Component } from "react";
import {Provider} from './context'
import Son from './Son'
class App extends Component {
    constructor(Props) {
        super(Props)
        this.state = {
            fruit: 'apple',
            count: 0
        }
    }
    getContext = () => {
        const { fruit, count } = this.state
        return {
            fruit,
            countUtil:{
                addCount: num => {
                    this.setState({count: count + num});
                },
                delCount: num => {
                    this.setState({count: count - num});
                }
            }
        }
    }

    render() {
        let {fruit, count} = this.state;
        return (
            <Provider value={this.getContext()}>
                我是父组件fruit = {fruit}, count = {count}
                <hr />
                <Son></Son>
            </Provider>
        )
    }
}

export default App;
