import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Img  from 'react-image';

import './execMessage.css'
class execMessage extends Component {
    render() {
        return(
            <div>
                <div class="container">
                    <div class="author-card border-bottom">
                        <div class="row align-items-center justify-content-center">
                                <Img class="avatar col-xs-3" src="vaibhav_g.jpg" />
                                <div class="col-9"><span class="author-name">Vaibhav Gawde</span><br /><span class="author-title">Head - India Sales Consulting</span></div>
                        </div>
                    </div>
                    <div class="exec-message-content">
                        <p>Hello { localStorage.getItem("firstname") },</p>
                        <p>Welcome to the SE Symposium!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna leo. Maecenas maximus ipsum sit amet risus aliquet auctor. Praesent at commodo nisi. Etiam maximus laoreet turpis id ultricies. Etiam mattis nisl non leo rutrum, sed elementum massa tempus. Maecenas pretium tellus nunc, ut tristique orci rutrum ut. Maecenas gravida mollis nunc, quis vehicula orci malesuada at. Quisque et fermentum odio.</p><p>Proin sapien nisi, dictum non lectus ut, lobortis faucibus ipsum. Suspendisse scelerisque, urna sed consequat luctus, nibh quam posuere sapien, quis dictum mauris felis eget diam. Mauris vehicula diam odio, eu pharetra ex feugiat nec. Fusce dolor eros, luctus quis finibus non, mattis et turpis. Fusce ut mi elementum, volutpat nulla sit amet, molestie nisi. Quisque egestas luctus orci vitae mollis.</p>
                        <p>Phasellus fermentum imperdiet mauris vitae viverra. Curabitur vulputate posuere urna in semper. Aenean finibus est nisl, eu placerat quam posuere eu. Nunc tempus augue eu metus laoreet, in eleifend risus feugiat. Phasellus vestibulum faucibus mauris vitae sodales. Vestibulum ac mi a libero convallis fermentum. Etiam ultricies, est ut sollicitudin tristique, nisi ipsum tincidunt neque, tempor consequat magna ipsum at ante. Phasellus congue ex eget erat ultricies laoreet. </p>
                        <p>- Vaibhav Gawde</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default execMessage