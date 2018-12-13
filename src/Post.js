import React, { Component } from 'react';
import './Post.css';
import Img from 'react-image';

class Post extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            liked: true
        };
        this.likeToggle = this.likeToggle.bind(this);
    }
    /* This is definitely a buggy code */
    timeSince(post_date) {
        post_date = new Date(post_date);
        var date_now = new Date(Date.now());
        var datesince_string;
        if(date_now.getDate() === post_date.getDate()) {
            datesince_string = "";
            if(date_now.getHours() > post_date.getHours()) {
                var hourDifference = date_now.getHours() - post_date.getHours();
                datesince_string = datesince_string + " " + hourDifference;
                if(hourDifference === 1) {
                    datesince_string = datesince_string + " hr ago";
                } 
                else {
                    datesince_string = datesince_string + " hrs ago";
                }
            }
            else if(date_now.getHours() === post_date.getHours()) {
                datesince_string = "Just now";
            }
        }
        if(date_now.getDate() > post_date.getDate()) {
            datesince_string = "Yesterday at " + post_date.getHours() + " Hrs";
        }
        return datesince_string;
    }

    likeToggle(e) {
        const { curr_liked } = this.state;
        console.log(curr_liked + " " + !curr_liked);
        this.setState({ liked: !curr_liked });
    }
    
    render() {
        const { liked } = this.state;
        return(
            <div class="card card-post">                
                <div class="card-body card-post-body">
                    <p class="card-text post-author">{ this.props.value.createdBy.firstName + " " + this.props.value.createdBy.lastName } <span class="post-timestamp"> - { this.timeSince(this.props.value.createdDate) }</span></p>
                    <p class="card-text post-content">{ this.props.value.postContent }</p>
                    { this.props.value.imgUrls[0] && <img class="img-thumbnail newsfeed-picture" src={ this.props.value.imgUrls[0] }  /> }
                </div>
                <div class="card-footer card-post-footer text-muted ro">
                    <label class="like-switch col-xs-3">
                        <input type="checkbox" checked={ this.props.value.isLiked }/>
                        <i class="material-icons icon-liked">favorite</i>
                    </label>
                    <span class="col-xs-2">{ this.props.value.likeCount }</span>
                    { this.props.value.isOwned && <i class="col-xs-2 material-icons icon-deletepost">delete_sweep</i> }
                </div>                
            </div>
        );
    }
}

export default Post


