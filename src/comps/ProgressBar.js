import React,{ useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({file, setFile})=>{
    const{url, progress} = useStorage(file);//useStorage is a hook

    useEffect(() => {
        
        if (url) {
          setFile(null);
        }
      }, [url, setFile]);//triggered when url changes

    return(
        <div className ="progress-bar" style={{ width:progress + '%' }}></div>
        
        )
}
export default ProgressBar;