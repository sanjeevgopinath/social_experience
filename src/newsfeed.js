import React, { Component } from 'react';
import Post from './Post.js';
import { config } from './config.js';
import './newsfeed.css';
import { Link } from 'react-router-dom';
import { authService } from './authService.js'
class newsfeed extends Component {
    
    constructor(props) {
        super(props);
        if(localStorage.posts) {
            this.state = {
                postsReady: true,
                posts: JSON.parse(localStorage.posts)
            }
        }
        else {
            this.state = {
                postsReady: false,
                posts: []
            }
        }

    }
    
    getAllPosts() {
        var self = this;
        var last_timestamp;
        try {
            last_timestamp = self.state.posts[0].createdDate;
        }
        catch {
            last_timestamp = '2018-12-09T20:54:25.902Z';
        }
        fetch(config.api_server + config.path_getLatestPosts + last_timestamp, {
            method: 'GET',
            mode: "cors",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token"),
            },
        })
        .then(response => response.json())
//        .then(function(response) { self.setState({ postsReady: true, posts: response }); return response; })
        .then(response => {
                                if(localStorage.getItem("posts")) {
                                var postsFromStorage = localStorage.getItem("posts");
                                postsFromStorage = JSON.parse(postsFromStorage);
                                response = response.reverse();
                                response.forEach(function(element) {
                                    postsFromStorage.unshift(element);
                                });
                                localStorage.setItem("posts", JSON.stringify(postsFromStorage))
                                return postsFromStorage;
                            } else {
                                localStorage.setItem("posts", JSON.stringify(response));
                                return response;
                            }
                          
                        }   
             )
        .then(postsJSON => self.setState({ postsReady: true, posts: postsJSON }))
        .catch(error => console.log(error))
    }

    componentDidMount() {
        this.getAllPosts();
        this.autoRefreshInterval = setInterval(() => this.getAllPosts(), 10000)
    }

    componentWillUnmount() {
        clearInterval(this.autoRefreshInterval);
    }

    render() {
        try {
                const posts = this.state.posts.map((post, index) =>
                <Post key={index} value={post} />
                );
                return(
                    <div class="newsfeed container-fluid">
                        <div class="hashtag-filter">All Posts</div>
                        { this.state.postsReady && posts }
                        <div class="post-icon"><Link to={`/postForm`} style={{color: 'white'}}>+ Join Conversation</Link></div>
                    </div>
                )
        }
        catch {
            // TODO
            return (
                <div class="newsfeed">
                    No Posts To Show!
                    <div class="post-icon"><Link to={`/postForm`} style={{color: 'white'}}>+ Join Conversation</Link></div>
                </div>
            );
        }        
    }
}

export default newsfeed