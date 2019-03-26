import React from "react";
import Loadable from 'react-loadable';


const LoadableDescription = Loadable({
    loader: () => import('./importDemo.js'),
    loading() {
      return <div>Loading...</div>;
    },
});

// 订阅了一个上下文，获取最基本的
export default class ImportDemo extends React.Component {

    render() {
        return (
            <div>
                <h1>延迟加载</h1>
                <LoadableDescription />
            </div>
        );
    }
}