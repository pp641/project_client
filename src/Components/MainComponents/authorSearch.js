

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAuthors } from '../../Redux/actions';
import { getSelectedAuthor, getSelectedCategory , getSearchQuery } from "../../Redux/actions";
export default function ComboBox() {
  const dispatch = useDispatch();
const details =  useSelector((state) => state)
const [countries, setCountries] = React.useState(JSON.parse(localStorage.getItem("recordArray")));
const [selectedAuthor, setSelectedAuthor] = React.useState("");
const [  newCountries ,setNewCountries] = React.useState([]);
const [categoryLevel , setCategoryLevel] = React.useState([ "easy", "medium", "hard", "expert"])
const [selectedCategory , setSelectedCategory] = React.useState("");


React.useEffect(()=>{
  countries.map((x)=>{
    setTimeout(()=>{
    setNewCountries(countries => [...countries , x])
    },1)
  })

},[])
     
  return (
    <React.Fragment>
<div style={{"margin" :"1em"}}>
<TextField id="outlined-basic" onChange={(e)=> {
  dispatch(getSearchQuery(e.target.value))
}}  label="Outlined" variant="outlined" />
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      onChange={(event,value)=>{
        console.log(value)
        setSelectedAuthor(value)
        dispatch(getSelectedAuthor(value))
      }}
      options={countries}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Current Author" />}
    />
    </div>
    <div style={{"margin" :"1em"}}>
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      onChange={(event,value)=>{
        console.log(value)
        setSelectedCategory(value)
        dispatch(getSelectedCategory(value));
      }}
      options={categoryLevel}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Current Category" />}
    />
    </div>
    <div>{selectedAuthor}</div><br/>
    <div>{selectedCategory}</div>
    </React.Fragment>
  );
}
