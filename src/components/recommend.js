import one from "../assets/images/c1.jpg"
import two from "../assets/images/c2.jpg"
import three from "../assets/images/c3.jpg"
import four from "../assets/images/c4.jpg"

function Recommend(){
    return(
        <div class="recommended">
        <h1 class="recommended__title">Recommended for you</h1>
        <p>Pick the Best fit</p>
        <div class="recommended__container">

            <div class="course-card">
                <img src={one}></img>
                <h3>2023 Python Data Visaulisation Masterclass</h3>
                <p>Col Steele</p>
                <p>4.9⭐⭐⭐⭐⭐
                </p>
                <p>
                    <i class="fa-solid fa-indian-rupee-sign fa-sm" ></i>
                    449/- <del>999</del>
                </p>
            </div>

            <div class="course-card">
                <img src={two}></img>
                <h3>Web Development Bootcamp 2003</h3>
                <p>Col Steele</p>
                <p>3.2 ⭐⭐⭐
                </p>
                <p>
                    <i class="fa-solid fa-indian-rupee-sign fa-sm" ></i>
                    449/- <del>999</del>
                </p>
            </div>


            <div class="course-card">
                <img src={three}></img>
                <h3>Master UI/UX Designing with Figma</h3>
                <p>Col Steele</p>
                <p>4.0⭐⭐⭐⭐
                </p>
                <p>
                    <i class="fa-solid fa-indian-rupee-sign fa-sm" ></i>
                    449/- <del>999</del>
                </p>
            </div>


            <div class="course-card">
                <img src={four}></img>
                <h3>Basic to Advance programming with EMC</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐⭐
                </p>
                <p>
                    <i class="fa-solid fa-indian-rupee-sign fa-sm" ></i>
                    449/- <del>999</del>
                </p>
            </div>



        </div>
    </div>
    )
}

export default Recommend