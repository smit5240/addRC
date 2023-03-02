import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const jsonfile = require("./Data.json");

export default function Table() {
  const navigate = useNavigate();
  const col = jsonfile.colum;
  const data = jsonfile.row;
  const stateIndex = jsonfile.hidecol;
  const hidestatename = jsonfile.hidestatename;
  const [addcolname, setAddcolname] = useState("");
  const [displaydata, setDisplaydata] = useState();
  const [indexdata, setIndexdata] = useState();
  // const [stateIndex, setStateIndex] = useState([]);
  // const [hidestatename, setHidestatename] = useState([]);
  const handlechange = (e) => {
    setAddcolname(e.target.value);
  };
  const addcolbtn = () => {
    col.push(addcolname);
    data.map((item) => item.push(""));
    setAddcolname("");
    navigate("/table");
  };
  const addrow = () => {
    navigate("/");
  };
  const deleterow = (index) => {
    data.splice(index, 1);
    navigate("/table");
  };
  const editrow = (index) => {
    setIndexdata(index);
  };
  const handlechangedata = (e) => {
    setDisplaydata({ ...displaydata, [e.target.name]: e.target.value });
  };
  const Updatebtn = () => {
    const find = data[indexdata];
    col.map((ele, index) => (find[index] = displaydata[ele]));
    navigate("/table");
  };
  const hidecolum = (element, index) => {
    hidestatename.push(element);
    stateIndex.push(index);
    navigate("/table");
  };
  const deletecolum = (index) => {
    col.splice(index, 1);
    data.map((item) => item.splice(index, 1));
    navigate("/table");
  };
  const showstate = (index) => {
    stateIndex.splice(index, 1);
    hidestatename.splice(index, 1);
    navigate("/table");
  };
  return (
    <div>
      <div className="container">
        <div className="hidelemnt">
          <table>
            <tr>
              {hidestatename &&
                hidestatename.map((element, index) => (
                  <td
                    className="side"
                    key={index}
                    onClick={() => showstate(index)}
                  >
                    <strong>{element} , </strong>
                  </td>
                ))}
            </tr>
          </table>
        </div>
        <div className=" top d-flex  justify-content-center">
          <button
            className="btn btn-success mx-1"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop1"
          >
            Addcol
          </button>
          <button className="btn btn-primary mx-1" onClick={addrow}>
            Addrow
          </button>
        </div>
        <table className="table mt-5">
          <thead className="table-dark">
            <tr>
              <th scope="col">No.</th>
              {col &&
                col.map((element, index) => (
                  <>
                    {!stateIndex.includes(index) && (
                      <th scope="col" key={index}>
                        {element}
                        <i
                          className="fa-regular fa-eye mx-2 text-primary"
                          onClick={() => hidecolum(element, index)}
                        ></i>
                        <i
                          className="fa-solid fa-xmark text-danger"
                          onClick={() => deletecolum(index)}
                        ></i>
                      </th>
                    )}
                  </>
                ))}
              <th scope="col">Edite</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>

                  {item.map((element, i) => (
                    <>{!stateIndex.includes(i) && <td key={i}>{element}</td>}</>
                  ))}
                  <td key={index}>
                    <i
                      className="fa-regular fa-trash-can mx-1 text-danger"
                      onClick={() => deleterow(index)}
                    ></i>
                    <i
                      className="fa-solid fa-pencil mx-1 text-success"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      onClick={() => editrow(index)}
                    ></i>{" "}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {/* -----------------------------------------Add colum model Start----------------------------- */}
        <div
          className="modal fade"
          id="staticBackdrop1"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Colum Name Model
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group mb-3">
                    <label htmlFor="exampleInputEmail1 mb-2">
                      Colum Name :{" "}
                    </label>
                    <input
                      type="text"
                      value={addcolname}
                      onChange={handlechange}
                      className="form-control mt-2"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div>
                    <button
                      className="btn btn-success"
                      type="reset"
                      data-bs-dismiss="modal"
                      onClick={addcolbtn}
                    >
                      Done
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* -----------------------------------------Add colum model End----------------------------- */}
        {/* ---------------------------------------- Add Row Model Start------------------------------ */}
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Add Ubdate Data
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row justify-content-center ">
                    {col.map((itm, index) => (
                      <div
                        className="col-sm-12 , col-md-10  col-lg-8"
                        key={index}
                      >
                        <div className="form-group mb-3">
                          <label htmlFor="exampleInputEmail1 mb-2">
                            {itm} :{" "}
                          </label>

                          <input
                            type="text"
                            className="form-control mt-2"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder={`Enter ${itm}`}
                            name={itm}
                            value={displaydata?.item}
                            onChange={handlechangedata}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                  onClick={Updatebtn}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* ---------------------------------------- Add Row Model Start------------------------------ */}
      </div>
    </div>
  );
}
