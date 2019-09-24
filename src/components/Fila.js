import React from "react";
import "../App.css";

class CustomRow extends React.Component {
  state = {
    selectedOption: null
  };

  render() {
    return (
      <tbody>
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          <td className="td">
            <select class="clas_gast" name="clas_gast">
              <option value="ser_div" selected>
                Servicios Diversos
              </option>
              <option value="adm_serv">
                Contrato administrativo de servicios
              </option>
              <option value="retrib">Otras retribuciones</option>
            </select>
          </td>
          <td className="td">
            <select class="prog" name="prog">
              <option value="doc" selected>
                Doctorado
              </option>
              <option value="gti">Gestion de tecnologias de informacion</option>
              <option value="isw">Ingenieria de software</option>
            </select>
          </td>
          <td className="td">
            <select class="sem" name="sem">
              <option value="201" selected>
                2020 I
              </option>
              <option value="202">2020 II</option>
              <option value="211">2021 I</option>
            </select>
          </td>
          <td className="td">
            <select class="curso" name="curso">
              <option value="elec" selected>
                Electivo
              </option>
              <option value="avacd">
                Topicos avanzados en ciencia de datos
              </option>
              <option value="avan3">Topicos avanzados III</option>
            </select>
          </td>
          <td className="td">
            <select class="uni" name="uni">
              <option value="hora" selected>
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
            <select class="grad" name="grad">
              <option value="dr" selected>
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
