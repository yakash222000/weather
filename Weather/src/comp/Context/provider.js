import Context from "./Context";
import {useState} from 'react';

const ApiSaver = (props) =>
{

    const [Api , SetApi] = useState("");

    function setApi(argument){
     
        SetApi(arguments);
    }
    


    return (<Context.Provider value={{Api,setApi}}>
        {props.children}
    </Context.Provider>);
}

export default ApiSaver;