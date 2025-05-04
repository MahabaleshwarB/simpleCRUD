import React, { useState, useEffect } from 'react'
import { welcomeString } from "../services/UserServices";

const TempUseComponent = () => {
    const [welcome, setWelcome] = useState('');

    useEffect(() => {
        welcomeString().then((response) => {
                setWelcome(response.data);
            }).catch(error => {
                console.error(error);
            })
        }, []);
   
  return (

   <h2>{welcome}</h2>
  )
}

export default TempUseComponent