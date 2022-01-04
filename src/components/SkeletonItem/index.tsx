import ContentLoader from "react-content-loader"
import './SkeletonItem.css'
const SkeletonItem = () => (
  <div className="skeleton__item-wrapper">
    <ContentLoader
      speed={2}
      width={500}
      height={50}
      viewBox="0 0 500 50"
      backgroundColor="#f3f3f3"
      foregroundColor="gray"
    >
      <rect x="60" y="12" rx="3" ry="3" width="406" height="8" />
      <rect x="60" y="32" rx="3" ry="3" width="250" height="8" />
      <circle cx="30" cy="25" r="20" />
    </ContentLoader>
  </div>

)

export default SkeletonItem;