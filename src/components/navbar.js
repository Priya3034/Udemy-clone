function Navbar(){
    return(
       
    <div className="navbar">

        <div class="navbar__s1">
            <h1 class="navbar__s1__title">Udemy</h1>
        </div>

        <div class="navbar__s2">
            <i class="fa-solid fa-magnifying-glass" ></i>
            <input placeholder="Search for anything here. Tech, Business, Art...."></input>

        </div>

        <div class="navbar__s3">
            <p>Courses</p>
            <p>My Learning</p>
            <i class="fa-solid fa-cart-shopping" ></i>
            <i class="fa-solid fa-bell" ></i>
            <i class="fa-solid fa-user" ></i>

        </div>
    </div>
        
    )
}

export default Navbar