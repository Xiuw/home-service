import React from 'react';
import Entry from './Entry';
import './PostEntry.css'

const Post = ({postData}) =>{

    return(
     <div> 
     {
      postData.map((post,i) => {
        return(
          <Entry
          key={i}
          budget={postData[i].budget}
          date={postData[i].post_date}
          category={postData[i].category}
          title={postData[i].title}
          description={postData[i].description}
          address={postData[i].address}
          city={postData[i].city}
          state={postData[i].state}
          phone={postData[i].phone}
          email={postData[i].email}
          account={postData[i].account_id}
          />
        )
      })
     }
     </div>

    )
}

export default Post;