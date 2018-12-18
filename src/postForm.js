import React, { Component } from 'react';
import { config } from './config.js';
import './postForm.css';
import axios from 'axios';
import { loadProgressBar } from 'axios-progress-bar';
import './nprogress.css';

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
        this.addToPost = this.addToPost.bind(this);
    }
    
    addToPost(val) {
        var postcontentNew = this.state.postcontent + " " + val;
        this.setState({ postcontent: postcontentNew });
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    fileChangedHandler = (event) => {
        const file = event.target.files[0];
        this.setState({selectedFile: file});
        
        /* 
        var compressorSettings = {  
            quality: .6,
            mimeType: 'auto',
            checkOrientation: true,
        };
        imageCompressor.run(file, {
            compressorSettings,
            success(result) {
                this.setState({selectedFile: result});
            },
            error(e) {
              console.log(e.message);
            }
        }); 
        
        imageCompression(file, 2, 500)
        .then(compressedFile => this.setState({selectedFile: compressedFile})); */
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
            axios.put(imgUpload_url, this.state.selectedFile)
            .then(response => {
                var imgReadURL = timeStampedFileName + this.state.selectedFile.name;
                var payload = JSON.stringify({
                    "postContent": this.state.postcontent,
                    imgUrls: [ imgReadURL ],
                });
                fetch(config.api_server + config.path_createMessage, {
                    method: 'POST',
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                        "Authorization": "Bearer " + localStorage.getItem("token"),
                    },
                    body: payload
                });
            })
            .then(this.props.history.push('/newsfeed'));
            isImgPresent = true;
        }
        catch {
            isImgPresent = false;
        }
        /* Upload the post into the SE Backend */
        if(!isImgPresent) {
            var payload = JSON.stringify({
                "postContent": this.state.postcontent,
            });
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
        
    }

    render() {
        const { postcontent } = this.state;
        loadProgressBar();
        return(
            <div class="post-form">
                <div class="post-form-title">Write a new post</div>
                <form name="form" onSubmit={this.handlePostSubmit}>  
                    <textarea class="form-control" name="postcontent" id="post-content-1" rows="3" maxlength="300" value={postcontent} onChange={this.handleChange}></textarea>
                    <p></p>
                    <p>Add a photo? <input type="file" onChange={this.fileChangedHandler} name="post_picture" accept="image/*"></input></p>
                    <div class="hashtags-box container row">
                    
                        <span class="usable-hashtags col-xs-4" onClick={this.addToPost.bind(this, "#appdev")}>#appdev</span>
                        <span class="usable-hashtags col-xs-4" onClick={this.addToPost.bind(this, "#AwesomeSession")}>#AwesomeSession</span>
                        <span class="usable-hashtags col-xs-4" onClick={this.addToPost.bind(this, "#naturewalk")}>#naturewalk</span>
                        <span class="usable-hashtags col-xs-4" onClick={this.addToPost.bind(this, "#cycling")}>#cycling</span>
                        <span class="usable-hashtags col-xs-4" onClick={this.addToPost.bind(this, "#yoga")}>#yoga</span>
                        <span class="usable-hashtags col-xs-4" onClick={this.addToPost.bind(this, "#gym")}>#gym</span>
                        <span class="usable-hashtags col-xs-4" onClick={this.addToPost.bind(this, "#CityTour")}>#CityTour</span>
                        <span class="usable-hashtags col-xs-4" onClick={this.addToPost.bind(this, "#SymposiumRocks")}>#SymposiumRocks</span>
                        <span class="usable-hashtags col-xs-4" onClick={this.addToPost.bind(this, "#OurSelfie")}>#OurSelfie</span>
                        <span class="usable-hashtags col-xs-4" onClick={this.addToPost.bind(this, "#AboutYesterday")}>#AboutYesterday</span>
                    
                    </div>
                    <button type="button" class="btn btn-success post-button" type="submit">Post</button>
                </form>
            </div>
        );
    }
}

export default PostForm