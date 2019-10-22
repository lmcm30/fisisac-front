import React from "react";
import "../App.css";

class CustomRow extends React.Component {
  
  constructor(){
   super();
   this.state = {
   // defaultValueOption: null,
    programas: [],
  };
  }



  componentDidMount() {
    fetch("https://registropresupuesto.herokuapp.com/programas")
    .then(response => response.json())
    .then(ga =>{
      this.setState({ programas: ga })
    });   
  
  }



  render() {
    return (
      <tbody>
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          <td className="td">
            <select className="clas_gast" name="clas_gast">
              <option value="ser_div" defaultValue>
                Servicios Diversos
              </option>
              <option value="adm_serv">
                Contrato administrativo de servicios
              </option>
              <option value="retrib">Otras retribuciones</option>
            </select>
          </td>
          <td className="td">
            <select className="prog" name="prog">
            {this.state.programas.map(programa => (
                <option key={programa.id} value={programa.id}>
                  {programa.siglaPrograma}
                </option>
              ))}
            </select>
          </td>
          <td className="td">
            <select className="sem" name="sem">
              <option value="201" defaultValue>
                2020 I
              </option>
              <option value="202">2020 II</option>
              <option value="211">2021 I</option>
            </select>
          </td>
          <td className="td">
            <select className="curso" name="curso">
              <option value="elec" defaultValue>
                Electivo
              </option>
              <option value="avacd">
                Topicos avanzados en ciencia de datos
              </option>
              <option value="avan3">Topicos avanzados III</option>
            </select>
          </td>
          <td className="td">
            <select className="uni" name="uni">
              <option value="hora" defaultValue>
                Hora{" "}
              </option>
              <option value="mes">Mes </option>
              <option value="anio">Año</option>
            </select>
          </td>
          <td>
            <input className="input-cant" />
          </td>
          <td className="td">
            <select className="grad" name="grad">
              <option value="dr" defaultValue>
                Dr
              </option>
              <option value="mg">Mg </option>
              <option value="dm">Dr/Mg</option>
            </select>
          </td>
          <td>
            <input className="input-num" />
          </td>
          <td>
            <input className="input-s" />
          </td>
          <td>
            <strong>
              <input className="input-t" disabled />
            </strong>
          </td>
        </tr>
      </tbody>
    );
  }
}
export default CustomRow;
