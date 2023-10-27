import React, {useState, useEffect} from 'react'
import TopicC from '../components/Topic/TopicC';
const Topic = ({topicViewHandler}) => {


    useEffect(() => {
        topicViewHandler();
    }, [])

  return (
    <div className='topic-container'>
        <TopicC />
    </div>
  )
}

export default Topic