import DropDown from "./DropDown";
import { Link } from 'react-router-dom';


const Home = () => {


    return(
        <div className="Home">

            <div className="click">
                {/* <Link to={'/'}> */}
                <div>
                <span>
                <img className="img"
                src="https://cdn-icons-png.flaticon.com/128/2609/2609370.png"
                width={15}
                alt=""
                />

                In Focus</span>
                </div>
                {/* </Link> */}
           
            </div>

            <div className="DropDown">
                <DropDown/>
            </div>
            
             <div>
             <h2> Artificial Intelligence</h2>
             </div>

            <div className="text">
            From health care to education, policy to art, artificial intelligence is  rapidly <br/> 
            changing our world and our daily lives.<br/>
             Are we ready?
            </div>

        </div>
    )
}


export default Home;