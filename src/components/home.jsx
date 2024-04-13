import { useState, useEffect } from "react";
import axios from "axios";
export default function Home() {
  const [title, setItem] = useState();
  console.log(title);
  const apiUrl =
    "https://f9e208b4-15ef-44d1-b8bb-69dfa307320c-00-2aizsyzbzjp8j.sisko.replit.dev:3000";

  console.log("url : ", `${apiUrl}/addItem`);
  const AddItem = () => {
    try {
      if (title.length > 0) {
        axios.post(`${apiUrl}/addItem`, { title });
        return console.log("add Item successfully");
      } else {
        return alert("Please enter an item");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const [data, setData] = useState([]);
  const fetchdata = async () => {
    try {
      const fetchDataFromDb = await axios.get(`${apiUrl}/fetchItems`);
      console.log("fetch data successfully");
      setData(fetchDataFromDb.data.message);
    } catch (err) {
      console.log(err.message);
      return;
    }
  };
  
  const deleteItem=(id)=>{
    try{
    const delItem=axios.delete(apiUrl+"/deleteItem",{data:{id}});
    console.log("delete item succesfully");
    }catch(err){
      return console.log("give erorr");
    }
  }
  
  const UpdateItem=(id)=>{
    try{
    const delItem=axios.put(apiUrl+"/updateItem",{data:{id},title});
    console.log("update item succesfully");
    }catch(err){
      return console.log("give erorr");
    }
  }

  useEffect(() => {
    fetchdata();
  }, [AddItem,deleteItem,UpdateItem]);    
  // }, [AddItem,deleteItem]);    
  // console.log("fetched data is here : ", data);


  
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          onChange={(event) => setItem(event.target.value)}
          placeholder="add items"
        />
      </div>
      <br />
      <button onClick={AddItem}>Add</button>
      <br />
      <br />
      <br />
      <div>
        {data.length > 0 &&
          data.map((dataItem, index) => (
            <div>
              <br />
              <span>{dataItem.title} </span>
              <span onClick={()=>deleteItem(dataItem._id)} >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  width="16"
                  height="16"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </span>

              <span onClick={()=>UpdateItem(dataItem._id)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="16" height="16">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" />
                </svg>
              
              </span>

            </div>
          ))}
      </div>
    </div>
  );
}
