import React, { useEffect, useState } from 'react';
import "./List.css";
import axios from 'axios';
import { toast } from 'react-toastify';

const List = () => {
  const url = "http://localhost:3000";
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/Food/List`);
      // console.log('Full response:', response);
      // console.log('Response data:', response.data);
      
      // Assuming response.data is an array
      if (Array.isArray(response.data)) {
        console.log('Setting list data:', response.data);
        setList(response.data);
      } else {
        // console.error('Unexpected response format');
        toast.error("Unexpected response format");
      }
    } catch (error) {
      console.error('Fetch error:', error);
      toast.error("Failed to fetch list");
    }
  };

  const removeFood = async (foodId) => {
    try {
      const response = await axios.delete(`${url}/Food/remove`, {
        params: { id: foodId }
      });
      if (response.data.success) {
        toast.success("Food item removed successfully");
        await fetchList();
      } else {
        toast.error(response.data.message || "Failed to remove food item");
      }
    } catch (error) {
      console.error('Remove food error:', error);
      toast.error("Failed to remove food item");
    }
  };
  useEffect(() => {
    fetchList();
  }, []);

  useEffect(() => {
    // console.log('List state:', list);
  }, [list]);

  return (
    <div className='List add flex-col'>
      <p>Food List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.length > 0 ? (
          list.map((item, index) => (
            <div className="list-table-format " key={index}>
              <img src={`${url}/uploads/` + item.Image} alt={item.name} />
              <p>{item.Name}</p>
              <p>{item.Category}</p>
              <p>${item.Price}</p>
              <p onClick={()=>removeFood(item.id)} className='cursor'>X</p>
            </div>
          ))
        ) : (
          <p>No items found</p>
        )}
      </div>
    </div>
  );
};

export default List;
