// Write your JS code here
import BlogItem from '../BlogItem/index'

import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <div>
      <ul className="blog-list">
        {blogsList.map(eachBlog => (
          <BlogItem blog={eachBlog} key={eachBlog.id} />
        ))}
      </ul>
    </div>
  )
}
export default BlogList
