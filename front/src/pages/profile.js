import React, {Component} from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class Profile extends Component {
    state = {
        selectedFile: null
    }

    fileSelectedHandler = (event) => {
        console.log(event);
        console.log('hello handler')
        //console.log(e.target);
        //console.log(e.target[0]);
        //this.setState({
        //    selectedFile: e.target.files[0]
        //})
    }

    fileUploadHAndler = () => {
        const fd = new FormData();
        /*fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
        axios.post('http://localhost/internship/api/upload_profile_image.php', fd).then(
            res => {
                console.log(res);
            }
        );*/
    }

    render(){
        return (
            <>
                Protected Profile!
                <div>
                    <h1>logged in</h1>
                    <input name="selectedFile" type="file" onChange={this.fileSelectedHandler} />
                    <button onClick={this.fileUploadHAndler}>Upload</button>
                </div>
            </>
        )
    }

}

export default Profile;