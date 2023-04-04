import React from "react";
import Combobox from "react-widgets/Combobox";

const Inscripciones = () => {

    return(
        <div className="home">
            <h1>Construccion del Cronograma de Pasantias Academicas</h1>
            <Combobox
                placeholder="Ingresar Periodo"
                data={["Enero/Abril", "Mayo/Agosto", "Septiembre/Diciembre"]}
            />

            
        </div>
    )
}

export default Inscripciones