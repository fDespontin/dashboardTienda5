import React from "react";
import mando from "../assets/images/cerilla1.jpg"

function LastMovie () {

return (

				
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Último producto incorporado</h5>
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={mando} alt=" Star Wars - Mandalorian "/>
                            </div>
                            <p>Fósforos para encender tu hormo o estufa, o para sorprender amigos</p>
                            <p>    Fósforos de 7.5 cm. Incluye raspador para encender</p>
                            <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver más detalles</a>
                        </div>
                    </div>
                </div>


)
}

export default LastMovie