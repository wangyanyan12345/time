import React, { useState, useEffect, useRef } from 'react';
import Timebutton from './Son';

function News() {
    // 控制按钮执行倒计时事件
    const [toStart, settoStart] = useState(5);
    return (
        <div>
            <Timebutton name={'命中详情'} num={4} onClick={() => {
                console.log('3333');
            }} toStart={toStart} />
        </div>
    )
}
export default News;