import React, { Component } from 'react';
import ChartRow from './ChartRow';


class Chart extends Component{
    constructor(){
        super()
        this.state = {

            moviesList: null

        }
    }

componentDidMount(){

    fetch("http://localhost:3002/api/products")
    .then( res => res.json())
    .then(movies => {

        this.setState ({ moviesList: movies.data})

    console.log("🚀 ~ file: Chart.js ~ line 19 ~ Chart ~ componentDidMount ~ data ", movies )

   
    })

    .catch(error => console.log(error))

}


render(){
    return(

        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Stock</th>
                                <th>categoria</th>
                                <th>Oferta</th>
                            </tr>
                        </thead>
                        <tbody>


                    { this.state.moviesList ? this.state.moviesList.map ((row, i) =>

                        <ChartRow {...row} key={i}  />) : <div> Loading... </div>
                        
                    }

                    

                        </tbody>
                    </table>
                </div>
            </div>
        </div>



    )
}
}

export default Chart