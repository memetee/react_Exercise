import React, { Component } from 'react';
import {Consumer} from './context';
import GrandSon from './grandson';
class Son extends Component {
    constructor(Props) {
        super(Props)
        this.state = {}
    }
    render() {
        return (
            // Consumer包裹住的才能获取到context
            <Consumer>
                {
                    //这里的context就是Provider里面的值。
                    (context) => {
                        return (
                        <div>
                            我是子组件子组件 fruit = {context.fruit}
                            <GrandSon />
                        </div>
                        )
                    }
                }
            </Consumer>
        )
    }
}
export default Son;