import {apiUrl, filterData} from "./data";
import './App.css';
import Navbar from "./component/Navbar";
import Filter from "./component/Filter";
import Cards from "./component/Cards";
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import Sippiner from "./component/Sippiner";


function App() {

  const [course,setCourse]=useState(null);
  const [loading,setLoading]=useState(true);

  const [category,setCategory] = useState(filterData[0].title);

  const fetchdata = async()=> {
   setLoading(true);
    try{
       const res= await fetch(apiUrl);
       const output =await res.json();
       setCourse(output.data);
    }
    catch(e){
      toast.error("Something went wrong");
    }
    setLoading(false);
   }
    useEffect( () =>{
        fetchdata();
    },[]);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
            

            <div>
            <Navbar/>
            </div>
            
            <div className="bg-bgDark2">
            <div>
            <Filter filterData={filterData}  category={category} setCategory={setCategory}></Filter>
            </div>

            <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center  min-h-[50vh]">

            {
              loading ? (<Sippiner/>):(<Cards course={course} category={category}></Cards>)
            }
            </div>
            </div>

    </div>
  );
}

export default App;
