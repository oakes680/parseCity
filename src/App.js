import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ExcelRenderer } from "react-excel-renderer";
import excelToJson from "convert-excel-to-json";
import axios from 'axios'
// const excelToJson = require('convert-excel-to-json');


function App() {
  const [excel2, setExcel] = useState([]);
  const [sendObj, setSendObj] = useState({})
  const [name, setName] = useState('chris')
  const [customerId, setCustomerId] = useState('')
  const [customers, setCustomers] = useState([])



  let email = "sales@kingclothing.com";
  let token = "snk_Qx9LxLJMPyrsgiebgA";
  let query = "larry";
  let apiAddress = "https://www.printavo.com/api/v1/customers/search";
  let version = "v1";


  const testObj2 = {
    user_id: 10784,
    customer_id: '', //1966096,
    orderstatus_id: 1547,
    formatted_due_date: "12/11/2020",
    formatted_customer_due_date: "11/11/2020",
    //formatted_invoice_date: "11/11/2020",
    // formatted_payment_due_date: "12/11/2020",
    sales_tax: "8.6",
    discount: "0",
    lineitems_attributes: [],
  };

  let ob = {
    style_number: null,
    style_description: null,  //30
    product_price: null, //24/25
    category_id: null,
    unit_cost: null,
    alteration_location_1: null,
    color: null,
    size_other: null,
    size_3t: null,
    size_4t: null,
    size_yxs: null,
    size_ys: null,
    size_ym: null,
    size_yl: null,
    size_yxl: null,
    size_xs: null,
    size_s: null,
    size_m: null,
    size_l: null,
    size_xl: null,
    size_2xl: null,
    size_3xl: null,
    size_4xl: null,
    size_5xl: null,
  };


  let letters = /^[A-Za-z]+$/;

  const hashmap2 = {
    YXS: "size_yxs",
    YS: "size_ys",
    YM: "size_ym",
    YL: "size_yl",
    YXL: "size_yxl",
    XS: "size_xs",
    S: "size_s",
    M: "size_m",
    L: "size_l",
    XL: "size_xl",
    "2XL": "size_2xl",
    "3XL": "size_3xl",
    "4XL": "size_4xl",
    "5XL": "size_5xl",
  };


  function theOne(size, count) {
    if (ob[hashmap2[size]] === null) {
      ob[hashmap2[size]] = count;
    } else if (ob[hashmap2[size]] > 0) ob[hashmap2[size]] += count;
  }

  function getSplitSize(theOne, i) {
    let splitSize = excel2.rows[i][36].split(",");
    let size = "";
    let count = 0;
    for (let i = 0; i < splitSize.length; i++) {
      for (let k = 0; k < splitSize[i].length; k++) {
        if (splitSize[i][k].match(letters)) {
          size += splitSize[i][k];
        }
        let num = parseInt(splitSize[i][k]);
        if (Number.isInteger(num)) {
          count = parseInt(splitSize[i][k]);
        }
      }

      theOne(size, count);

      size = "";
      count = 0;
    }


  }




  const upload = (e) => {

    console.log("con", excel2.rows);

    for (let i = 1; i < excel2.rows.length; i++) {

      let exists = false

      for (let b = 0; b < testObj2["lineitems_attributes"].length; b++) {
        if (testObj2["lineitems_attributes"][b].style_number === excel2.rows[i][33] && testObj2["lineitems_attributes"][b].color === excel2.rows[i][31]) {
          exists = true
        }
      }

      if (exists === true) {
        continue
      }

      if (ob["style_number"] === null) {
        ob["style_number"] = excel2.rows[i][33];
      }
      if (ob["style_description"] === null) {
        ob["style_description"] = excel2.rows[i][30];
      }
      if (ob["color"] === null) {
        ob["color"] = excel2.rows[i][31];
      }
      if (ob["unit_cost"] === null) {
        ob["unit_cost"] = excel2.rows[i][25];
      }


      getSplitSize(theOne, i)

      for (let r = 1; r < excel2.rows.length; r++) {
        if (r === i) {
          continue
        }
        if (ob["style_number"] === excel2.rows[r][33] && ob["color"] === excel2.rows[r][31]) {
          getSplitSize(theOne, r)
        }
      }

      console.log("before testobj2", testObj2);

      testObj2["lineitems_attributes"].push({ ...ob });

      for (let key in ob) {
        ob[key] = null;
      }

      // console.log('testobj2', testObj2)
    }
    console.log("testobj2", testObj2);
    setSendObj(testObj2)


  };




  ////////////////////////////////////********************************************************* */////////////////////////

  const fileHandler = (event) => {
    let fileObj = event.target.files[0];
    console.log("dude", fileObj);

    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        setExcel({
          cols: resp.cols,
          rows: resp.rows,
        });
      }
    });
  };

  function sendIt() {
    console.log(testObj2)
    console.log(sendObj)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(sendObj)

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://www.printavo.com/api/v1/orders?version=v1&email=sales@kingclothing.com&token=snk_Qx9LxLJMPyrsgiebgA", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  // setName('bob')

  function customerSearch(e) {
    console.log('this is customer search', e.target.value)

    axios.get(`https://www.printavo.com/api/v1/customers/search?version=v1&email=sales@kingclothing.com&token=snk_Qx9LxLJMPyrsgiebgA&query=${e.target.value}`)
      .then(res => setCustomers(res.data.data))
      .catch(error => console.log('error', error));

  }



  function onChangeDrop(e) {
    sendObj["customer_id"] = e.target.value
  }

  function onChangeDate(e) {

    let oldDate = e.target.value.replace(/-/g, "/")
    let splitDate = e.target.value.split("-")
    let arr = []
    arr.push(splitDate[1])
    arr.push(splitDate[2])
    arr.push(splitDate[0])
    let finalDate = arr.join('/')
    sendObj["formatted_due_date"] = finalDate
    sendObj["formatted_customer_due_date"] = finalDate
    console.log('hi')
    console.log(sendObj)
  }




  return (
    <div className="App">

      <input className="custom-file-input" onChange={fileHandler} type="file" id="file" multiple></input>
      <label htmlFor="file">choose a file</label>
      <div>
        <button onClick={upload}>Upload!</button>
      </div>


      <input onChange={customerSearch} type="text" />
      <select name="" id="" onChange={onChangeDrop}>
        {customers.map(x => <option value={x.id} >{x.company},  {x.first_name} {x.last_name} </option>)}
      </select>

      <div>
        <button onClick={sendIt}>Send it</button>
      </div>
      <input onChange={onChangeDate} type="date" id="meeting-time"
        name="meeting-time"
      ></input>


    </div >
  );
}

export default App;
