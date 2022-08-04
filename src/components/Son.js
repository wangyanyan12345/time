import React, { useState, useEffect, useRef } from 'react';
import {Button} from 'antd';

 
let timeChange;
 export default function Timebutton(props ) {
  const { name, num, onClick, toStart } = props;
  const [time, setTime] = useState(num);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [btnContent, setBtnContent] = useState(name);
 
 
  useEffect(() => {
    if (toStart) {
      getClick();
    }
  }, [toStart]);
 
  useEffect(() => {
    clearInterval(timeChange);
    return () => clearInterval(timeChange);
  }, []);
 
  useEffect(() => {
    if (time > 0 && time < num) {
      setBtnContent(`${time}${name}`);
    } else {
      clearInterval(timeChange);
      setBtnDisabled(false);
      setTime(num);
      setBtnContent(name);
    }
  }, [time]);
 
  const getClick = () => {
    setBtnDisabled(true);
    timeChange = setInterval(() => setTime((t) => --t), 1000);
  };
  return (
    <Button  type="primary" size="small" ghost disabled={btnDisabled} onClick={() => { onClick() }}>
      {btnContent}
    </Button>
  );
};
