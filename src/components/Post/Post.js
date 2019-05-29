import React from 'react';
import Entry from './Entry';
import './PostEntry.css'
import { Spinner} from "react-bootstrap";

const Post = ({postData}) => {

    return(
     <div> 
           { postData.length === 0 ?
            <div className="d-flex justify-content-center" style={{marginTop:"120px"}}>
              <Spinner animation="border" role="status" size="lg">
                <span className="sr-only loading">Loading...</span>
              </Spinner>
             </div>
        
            :
            postData.map((post,i) => {
              return(
                <Entry
                key={i}
                postId={postData[i].id}
                date={postData[i].post_date}
                category={postData[i].category}
                title={postData[i].title}
                description={postData[i].description}
                city={postData[i].city}
                states={postData[i].state}
                />
              )
            })
           }

     </div>

    )
  
}

export default Post;