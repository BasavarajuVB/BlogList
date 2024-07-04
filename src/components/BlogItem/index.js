// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blog} = props
  const {title, description, publishedDate} = blog
  return (
    <li>
      <div>
        <div className="head-time-con">
          <h1>{title}</h1>
          <p>{publishedDate}</p>
        </div>
        <p>{description}</p>
      </div>
      <hr />
    </li>
  )
}
export default BlogItem
