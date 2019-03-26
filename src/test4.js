import React, { Suspense } from "react";


const Demo1 = React.lazy(() => import('./importDemo.js'));
const Demo2 = React.lazy(() => import('./importDemo.js'));
const Demo3 = React.lazy(() => import('./importDemo.js'));

// 订阅了一个上下文，获取最基本的
export default class ImportDemo extends React.Component {

    render() {
        return (
            <div>
                <h1>延迟加载</h1>
                <Suspense fallback="Loading...">
                    <Demo1/>
                    <Demo2/>
                    <Demo3/>
                </Suspense>
            </div>
        );
    }
}