import React, { Component } from 'react';
import { config } from './config.js';
import './postForm.css';
import axios from 'axios';
import imageCompression from 'browser-image-compression';



class PostForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            postcontent: '',
            selectedFile: null,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handlePostSubmit = this.handlePostSubmit.bind(this);
        this.fileInput = React.createRef();
    }
    
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    fileChangedHandler = (event) => {
        const file = event.target.files[0];
        imageCompression(file, 2, 500)
        .then(compressedFile => this.setState({selectedFile: compressedFile}));
    }
    
    handlePostSubmit(e) {
        e.preventDefault();
        var isImgPresent = false;
        /* Upload the file to the Object Storage */
        try {
            var timeStampedFileName = new Date(Date.now());
            timeStampedFileName = timeStampedFileName.getTime().toString();
            timeStampedFileName = timeStampedFileName.substr(7,14) + "-";
            var imgUpload_url = config.obj_store_url + timeStampedFileName + this.state.selectedFile.name;
            axios.put(imgUpload_url, this.state.selectedFile);
            isImgPresent = true;
        }
        catch {
            isImgPresent = false;
        }
        /* Upload the post into the SE Backend */
        if(isImgPresent) {
            var imgReadURL = config.obj_store_read_url + timeStampedFileName + this.state.selectedFile.name;
            var payload = JSON.stringify({
                "postContent": this.state.postcontent,
                imgUrls: [ imgReadURL ],
            });
        }
        else {
            var payload = JSON.stringify({
                "postContent": this.state.postcontent,
            });
        }
        fetch(config.api_server + config.path_createMessage, {
            method: 'POST',
            mode: "cors",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + localStorage.getItem("token"),
            },
            body: payload
        })
        .then(this.props.history.push('/newsfeed'));
    }

    render() {
        const { postcontent } = this.state;
        return(
            <div class="post-form">
                <div class="post-form-title">Write a new post</div>
                <form name="form" onSubmit={this.handlePostSubmit}>  
                    <textarea class="form-control" name="postcontent" id="post-content-1" rows="3" maxlength="300" value={postcontent} onChange={this.handleChange}></textarea>
                    <p></p>
                    <p>Add a photo? <input type="file" onChange={this.fileChangedHandler} name="post_picture" accept="image/*"></input> </p>
                    <button type="button" class="btn btn-success post-button" type="submit">Post</button>
                </form>
            </div>
        );
    }
}

export default PostForm