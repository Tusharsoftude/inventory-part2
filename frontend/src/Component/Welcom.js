import { useNavigate } from 'react-router-dom';
import './Welcome.css'
import { Link } from 'react-router-dom';
const Welcome=()=>{
   
    const navigate = useNavigate();
    return (
        <>
        <div className='welcome'> 
    <header class="bg-primary text-white text-center py-5">
        <div class="container">
            <h1 class="display-4">Welcome to the Inventory Management System</h1>
            <p class="lead">Manage your inventory efficiently and effectively.</p>
        </div>
    </header>

    <main class="container text-center my-5">
        <h2 class="mb-4">Features</h2>
        <div class="row">
            <div class="col-md-4 mb-4">
                <div class="card shadow-sm">
                    <div class="card-body" >
                        <h5 class="card-title">Track Inventory</h5>
                        <p class="card-text">Monitor and manage your inventory levels with ease.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">Add New Items</h5>
                        <p class="card-text">Quickly add new items to your inventory.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">Generate Reports</h5>
                        <p class="card-text">Create detailed reports to analyze your inventory.</p>
                    </div>
                </div>
            </div>
        </div>
        
       <Link to="/signin"><button type="button" class="btn btn-primary" >SignIn</button></Link> 
        
       <Link to="/signup"> <button type="button" class="btn btn-primary" >SignUp </button></Link>
       
    </main>
   
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
    <footer class="bg-dark text-white text-center py-3 ">
        <p>&copy; 2024 Inventory Management System. All rights reserved.</p>
    </footer>

    {/* <!-- Bootstrap JS and dependencies --> */}
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</div>
        </>
    )
}
export default Welcome;