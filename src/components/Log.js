// import {userNavigate} from 'react-router-dom'

// function Log(){
//     const navigate=userNavigate() 
//     function button(){
//         navigate('/news')
//     }
//     return(
//         <div>
//             log
//             <button onClick={button}>按钮</button>
//         </div>
//     )
// }
// export default Log;

import { useEffect, useState } from "react";

// export const useTimer = (t: Date) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = () => {
      const total = Number(t) - Number(new Date());
      if (total <= 0) {
        setTime("");
        return;
      }

      const seconds = Math.floor((total / 1000) % 60)
        .toString()
        .padStart(2, "0");
      const minutes = Math.floor((total / 1000 / 60) % 60)
        .toString()
        .padStart(2, "0");
      const hours = Math.floor(total / (1000 * 60 * 60))
        .toString()
        .padStart(2, "0");

      setTime(`${hours}:${minutes}:${seconds}`);
    };

    const t1 = setInterval(() => {
      timer();
    }, 1000);
    // 解决延时一秒
    timer();

    return () => {
      clearInterval(t1);
    };
  }, [t]);

  return time;
// };

