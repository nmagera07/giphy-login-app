import React, {useState, useEffect} from 'react';
import axios from 'axios'


const FunStuff = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get(`https://cors-anywhere.herokuapp.com/http://api.giphy.com/v1/gifs/random?api_key=P8No5d6CdRkffph6a2z61WPU9FFmXpyY`)
            .then(response => {
                console.log(response.data)
                setData(response.data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const fetchData = () => {
        axios
            .get(`https://cors-anywhere.herokuapp.com/http://api.giphy.com/v1/gifs/random?api_key=P8No5d6CdRkffph6a2z61WPU9FFmXpyY`)
            .then(response => {
                console.log(response.data)
                setData(response.data.data)
            })
            .catch(error => {
                console.log(error.response)
            })
    }
    console.log(data.data)
    return ( 
        <div>
            <h1>Welcome to the GIF Machine!</h1>
            <div className="gif">
                <img src={data.image_url} />
                <button onClick={fetchData}>Find a random GIF</button>
            </div>
        </div>
     );
}
 
export default FunStuff;