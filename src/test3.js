import React from "react";

// 订阅了一个上下文，获取最基本的
export default class ImportDemo extends React.Component {

    state = {
        Demo1: null,
        Demo2: null,
        Demo3: null,
    };

    componentDidMount() {
        setTimeout(() => {
            import("./importDemo.js").then(Demo => {
                this.setState({ Demo1: Demo.default });
            });
            import("./importDemo.js").then(Demo => {
                this.setState({ Demo2: Demo.default });
            });
            import("./importDemo.js").then(Demo => {
                this.setState({ Demo3: Demo.default });
            });
        },3000);
    }

    render() {
        const { Demo1,Demo2,Demo3 } = this.state;
        return (
            <div>
                <h1>延迟加载</h1>
                {Demo1 ? <Demo1 /> : 'Loading...'}
                {Demo2 ? <Demo2 /> : 'Loading...'}
                {Demo3 ? <Demo3 /> : 'Loading...'}
            </div>
        );
    }
}