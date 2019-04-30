import React, { Component } from 'react'
import postData from '../data/postData.json';
import '../style/PostBlock.css';
class PostBlock extends Component {
    componentWillMount() {
        this.setState({
            postData: postData
        });
    }
    render() { 
        const oThis = this;
        const title = oThis.state.postData.post.title;
        const content = oThis.state.postData.post.content;
        return ( 
        <div className="post-block">
        <div className="post-content">
            <div className="title">
                {title}
            </div>
            <div className="content">
                {content}
            </div>
        </div>
        </div> );
    }
}
 
export default PostBlock;