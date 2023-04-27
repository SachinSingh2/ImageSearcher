import { useState } from 'react';
import SearchImages from './Api';
import './App.css';
import ImageList from './components/ImageList';
import Searchbar from './components/Searchbar';

function App() {

  const [Images , setImages] = useState([])

//Creating a function by which searchimages function is going to run
const handleSubmitApp = async (term)=>{
// console.log("This is the " + term)
 const result = await  SearchImages(term)
 console.log(result)

 setImages(result)
};

  return (
    <>
<Searchbar Searching={handleSubmitApp} />
<ImageList fetchedImages={Images} />

    </>
  );
}

export default App;
