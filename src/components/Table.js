import React, { useState } from "react";
import MaterialTable from "material-table";

export default function Table() {
  const [state, setState] = useState({
    columns: [
      { title: "ID", field: "id" },
      { title: "Codigo", field: "codigo" },
      { title: "Descripcion", field: "descripcion" },
    ],
    data: [
      { id: "1", codigo: "9999", descripcion: "Comprar pan" },
      { id: "2", codigo: "235", descripcion: "Comprar leche" },
      { id: "3", codigo: "564", descripcion: "Comprar huevo" },
    ],
  });

  return (
    <div>
      <MaterialTable
        title="Tareas"
        columns={state.columns}
        data={state.data}
        options={{
          paging: false,
        }}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            }),
        }}
      />
    </div>
  );
}
