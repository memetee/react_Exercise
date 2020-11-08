import React, {Component} from 'react';
import {Consumer} from './context';
class GrandSon extends Component {
    render() {
        return (
            <Consumer>
                {
                    context => (
                        <div>
                            孙子组件 fruit = {context.fruit}
                            <br />
                            苹果<button onClick={() => context.countUtil.addCount(3)
                            }>增加</button>
                            苹果<button>减少</button>
                        </div>
                    )
                }
            </Consumer>
        )
    }
}
export default GrandSon;