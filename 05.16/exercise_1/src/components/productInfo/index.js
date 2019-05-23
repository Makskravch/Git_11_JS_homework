import React, { Component } from 'react';

class ProductInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        const {title, list} = this.props
        return (
            <>
                <h1>{title}</h1>
                <ul>
                    {list.map((el, i) => <li key={i}>{el}</li>)}
                </ul>
            </>
        );
    }
}

// var ProductInfo = React.createClass({
//     render: function(title, list) {
//         return (
//             <>
//                 <h1>{title}</h1>
//                 <ul>
//                     {list.map((el, i) => <li key={i}>{el}</li>)}
//                 </ul>
//             </>
//         )
//     }
// })
 
export default ProductInfo;