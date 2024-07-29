import Dashboard from "./Dashboard";
import { useState, useEffect } from "react";
import AddCat from "./AddCat";
function Categories() {
  const [isopen, setIsopen] = useState({ addcategory: false });
  const [categories,setCataegories]=useState([]);
  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch("http://127.0.0.1:8000/api/category/");
      const data = await response.json().catch((err) => console.log(err));
      console.log(data);
      if(response.ok){
        setCataegories(data)
      }
    }
    fetchCategories();
  }, []);
  return (
    <Dashboard>
      <div className="ml-7">
        <h2 className="font-bold text-2xl">Categories</h2>
        <div className=" mt-7">
          <ul className="flex flex-col gap-6 text-xl">
           {
            categories&&categories.map(category=>{
              return <li key={category.id}>{category.name}</li>
            })
           }
          </ul>
        </div>
        {isopen.addcategory ? (
          <AddCat setIsopen={setIsopen} isopen={isopen} />
        ) : null}
        <div className="text-center mt-[5em]">
          <button
            className="py-4 border px-[3em] rounded-2xl border-none text-white  bg-[#6180f0]"
            onClick={() =>
              setIsopen((prev) => ({ ...prev, addcategory: true }))
            }
          >
            Add Category
          </button>
        </div>
      </div>
    </Dashboard>
  );
}

export default Categories;
