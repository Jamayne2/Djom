import React, { useState } from "react";
import { Component } from "react";
import ReactDom from "react-dom";
import { useMoralis, useMoralisQuery } from "react-moralis";
import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import { Table, Tag, Space } from "antd";
import { PolygonCurrency} from "./Chains/Logos";
import moment from "moment";
import { render } from "@testing-library/react";
import {post} from "axios";
import axios from "axios"

class CreateItem extends Component{
  constructor(props) {
    super(props);
    this.state = {
      image : ''
    }
  }

  onChange(e)
  {
    let files = e.target.files;
    
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    
    reader.onload=(e)=>{
      

      const url = "http://127.0.0.1:8000/api/service";
      const formData ={file:e.target.result}
      return post(url , formData)
      .then(response=>console.warn("result" ,response))
    }


  }


  render(){
    return(

     <div onSubmit={this.onFormSubmit}>
       <h1>Upload</h1>
       <input type="file" name="file" onChange={(e)=>this.onChange(e)}/>

     </div>
    )
    }
  }

export default CreateItem;