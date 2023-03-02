import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const jsonfile = require("./Data.json");

export default function Form() {
  const navigate = useNavigate();
  const col = jsonfile.colum;
  const data = jsonfile.row;
  const [inputvalue, setInputvalue] = useState({});
  const handlechange = (e) => {
    setInputvalue({ ...inputvalue, [e.target.name]: e.target.value });
  };
  const submitform = (e) => {
    e.preventDefault();
    var newarray = [];
    col.map((ele) => newarray.push(inputvalue[ele]));
    data.push(newarray);
    navigate("/table");
  };
  return (
    <div>
      <div className="container top">
        <h2 className="d-flex justify-content-center mb-5">Add Data </h2>
        <form>
          <div className="row justify-content-center ">
            {col.map((itm, index) => (
              <div className="col-sm-12 , col-md-10  col-lg-8" key={index}>
                <div className="form-group mb-3">
                  <label htmlFor="exampleInputEmail1 mb-2">{itm} : </label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder={`Enter ${itm}`}
                    name={itm}
                    value={inputvalue.itm}
                    onChange={handlechange}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-success mx-2" onClick={submitform}>
              Submit
            </button>
            <button className="btn btn-danger mx-2" type="reset">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
