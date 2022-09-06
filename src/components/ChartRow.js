import React from "react";

function ChartRow (props) {
return(

    <React.Fragment>

        <tr>
        <td>{props.name}</td>
        <td>{props.price}</td>
        <td>{props.stock}</td>
        <td>{props.productCategoryId}</td>
        <td>{props.sku}</td>
        </tr>


    </React.Fragment>


)
}

export default ChartRow