import React, { useState, useEffect } from "react";
import "../styles/components/table.scss";
import Button from "./itemcard/Button";
function Table(props) {
  const styleImg = {
    width: "100px",
  };
  const [data, setData] = useState([]);
  const onChanges = (event) => {
    let newData = []
    data.map((item) => {
      if(parseInt(item.id)===parseInt(event.target.name)){
        newData.push({ ...item,total:event.target.value });
      }else{
        newData.push({ ...item });
      }
    })
    setData(newData)
  };
  
  useEffect(() => {
    setData(props.items)
    console.log('masuk1')
  }, []);
  const click = () => {
    localStorage.setItem("k1_items", JSON.stringify(data));
    alert('Data berhasil terupdate')
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Stok</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) =>
         
                <tr key={index}>
                  <td>
                    <div>
                      <img style={styleImg} src={item.image} alt="brand" />
                    </div>
                    <div>
                      <h1>{item.title}</h1>
                      {item.description}
                      <br/>
                      {item.category}
                    </div>
                  </td>
                  <td>
                    <input value={item.total} name={item.id} onChange={onChanges}></input>
                  </td>
                  <td>
                    <Button click={click} theme={"white1"}>Update</Button>
                  </td>
                </tr>
             
          )}
        </tbody>
      </table>
    </>
  );
}

export default Table;
