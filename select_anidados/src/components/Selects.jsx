import { useState } from "react";
import { SelectList } from "./SelectList";

export const Selects = () => {

  const [departamentos, setDepartamentos] =useState ("");
  const [municipios, setMunicipios] = useState ("");
  const [ciudades, setCiudades] = useState (null);

  console.log('Departamento, Id', departamentos)
  console.log('Municipios, Id', municipios)

  return (
    <>
    <div className="containerSelectList">
      <SelectList title = "Estados"/>

      <SelectList title = "Municipios"/>
      
      <SelectList title = "Ciudades"/>
    </div>
    </>
  );
};