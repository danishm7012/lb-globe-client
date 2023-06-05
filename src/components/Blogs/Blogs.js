import React from 'react'
import Meta from '../common/Meta'
import { Container } from 'react-bootstrap'
import Title from '../common/title'
import BlogData from '../../companiesData/BlogsData'
import Blog from './Blog'
const Blogs = () => {
  return (
    <div className='mt-3 section'>
      <Meta title='Blogs - Paradise Group of Companies' />
      <Title title='Blogs'></Title>
      <Container>
        {BlogData.map((blog) => (
          <Blog blog={blog} />
        ))}
      </Container>
    </div>
  )
}

export default Blogs
