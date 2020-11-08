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
            <Consumer>
                {
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