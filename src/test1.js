import React from "react";

// 订阅了一个上下文，获取最基本的
export default class ImportDemo extends React.Component {

    state = {
        Demo: null,
    };

    componentDidMount() {
        setTimeout(() => {
            import("./importDemo.js").then(Demo => {
                this.setState({ Demo: Demo.default });
            });
        },3000);
    }

    render() {
        const { Demo } = this.state;
        return (
            <div>
                <h1>延迟加载</h1>
                {Demo ? <Demo /> : 'Loading...'}
            </div>
        );
    }
}