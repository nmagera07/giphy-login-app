import React from 'react';

const Home = (props) => {

    const redirect = () => {
        props.history.push('/auth')
    }
    return ( 
        <div>
            <h1>GIF-FY TOWN!!!</h1>
            <div className="homePage">
                <img src="https://media3.giphy.com/media/YJBNjrvG5Ctmo/giphy.gif" atl="giphy logo"></img>
                <button onClick={redirect}>Click to Sign Up or Login!</button>
            </div>
        </div>
     );
}
 
export default Home;