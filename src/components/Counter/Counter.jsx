import './Counter.scss';

import React, { useState } from 'react';

// export class Counter extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             counter: 0,
//         };
//     }

//     handelButtonClick = (event) => {
//         const type = event.target.name;
//         let addition = -1;

//         if (type === 'plus') {
//             addition = 1;
//         }
//         this.setState((prevState) => ({
//             counter: prevState.counter + addition,
//         }));
//     }

//     render() {
//         return (
//             <div>
//                 <button name="minus" onClick={this.handelButtonClick}>-</button>
//                 {this.state.counter}
//                 <button name="plus" onClick={this.handelButtonClick}>+</button>
//             </div>
//         )
//     }
// }


export function Counter() {
    const [count, setCount] = useState(0);
    return(
        <div>
            {count > 0 && <button onClick={() => setCount(count - 1)}>-</button>}
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}