import react from 'react'
import { Link } from 'react-router-dom';
function Table(){
    return (
        <>
  <div class="container mt-4">
    <h2>Inventory Table</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th scope="col">Category</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Item Name</td>
          <td>Item Description</td>
          <td>100</td>
          <td>$50.00</td>
          <td>Category 1</td>
          <td >
            <button class="btn btn-primary btn-sm ">Edit</button>
            <button class="btn btn-danger btn-sm pr-5">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

        </>
    )
}


export default Table;