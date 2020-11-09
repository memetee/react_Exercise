import React, { Component } from "react";
//引入Provider
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
    //封装一个方法，这个方法可以加和减
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
            //Provider标签里面的value值可以被Consumer标签包括住的可以访问到context内容
            <Provider value={this.getContext()}>
                我是父组件fruit = {fruit}, count = {count}
                <hr />
                <Son></Son>
            </Provider>
        )
    }
}

export default App;
