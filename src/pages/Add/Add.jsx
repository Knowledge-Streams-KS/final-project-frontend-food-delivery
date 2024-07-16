import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/admin_assets/assets'
import { toast } from 'react-toastify'
import axios from 'axios'
import "./Add.css"

const Add = () => {
  const url = "http://localhost:3000"
  const [image, setImage] = useState(false)
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category:"Salad"
  })

  const onChangeHandler = async (event)=>{
  const name = event.target.name;
  const value = event.target.value;
  setData(data=>({...data, [name]:value}))
} 

const onSubmitHandler = async(event)=>{     // Handling the submission loading
  event.preventDefault();
  
  const formData = new FormData();     // Append the data into DB
  formData.append("Name", data.name);
  formData.append("Description", data.description);
  formData.append("Price", Number (data.price));
  formData.append("Category", data.category);
  formData.append("Image", image);

  const response = await axios.post(`${url}/Food/add`, formData);
  try {
           // To reset the values of form Data after inserting
      setData({
       name: "",
     description: "",
     price: "",
     category:"Salad"
      })
      setImage(false)
      toast.success(response.data.message)
   }
  catch (error) {
   
      console.error("Adding food item:", response.data.message);
      toast.error(response.data.message || "Error adding food item");
    }
  }   // As Admin fill the data, it will be add into the Db
 
// catch(error){
//  console.log("Error: ",error.response?.data?.message || error.message)
// }

// useEffect(()=>{
//   console.log(data)
// },[data])

return (
    <div className='add'> 
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-image-upload flex-col">
              <p>Image Upload</p>
                  <label htmlFor="image">
                  <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                  </label>
              <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required/>
        </div>
        <div className="add-product-name  flex-col">
             <p>Product Name</p>
             <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type Here' />
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea name="description" onChange={onChangeHandler} value={data.description}  rows="6" placeholder='Write Content Here' required></textarea>
        </div>
        <div className="add-category-price">
                   <div className="add-category flex-col">
                    <p>Product Category</p>
                    <select name="category" onChange={onChangeHandler}  >
                      <option value="Salad">Salad</option>
                      <option value="Rolls">Rolls</option>
                      <option value="Deserts">Deserts</option>
                      <option value="Sandwitch">Sandwitch</option>
                      <option value="Cake">Cake</option>
                      <option value="Pure Veg">Pure Veg</option>
                      <option value="Pasta">Pasta</option>
                      <option value="Noodles">Noodles</option>
                    </select>
                   </div>
            <div className="add-price flex-col">
              <p>Product Price</p>
              <input type="Number" onChange={onChangeHandler} value={data.price}  name="price" placeholder='$20' />
            </div>  
            </div>
            <button type='submit' className='add-btn' >ADD</button>    
        
      </form>
    </div>
  )
}

export default Add
