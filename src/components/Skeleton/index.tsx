import SkeletonItem from "components/SkeletonItem";
import './Skeleton.css'
function Skeleton() {
  return (
    <div className="skeleton">
      <SkeletonItem/>
      <SkeletonItem/>
      <SkeletonItem/>
      <SkeletonItem/>
      <SkeletonItem/>
    </div>
  )
}

export default Skeleton;