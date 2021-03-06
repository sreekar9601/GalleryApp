import React,{useState} from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const[file, setfile] = useState(null);
    const types = ['image/png', 'image/jpeg'];
    const[error, setError] = useState(null);
    const changeHandler = (e) =>{
let selected = e.target.files[0];

if(selected && types.includes(selected.type)){
    setfile(selected);
    setError('');
}else{
    setfile(null);
    setError('Please select an image file');
}
console.log('selected');    
}

    return(
        <form>
            <label>
            <input type = "file" onChange={changeHandler}/> 
            <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setfile={setfile}/>}
            </div>
        </form>
    )
}
export default UploadForm;