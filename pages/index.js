import SortedSquaredArray from "../component/algorithms/arrays/SortedSquaredArray";
import ValidateSubsequence from "../component/algorithms/arrays/ValidateSubsequence";


export default function Home() {
  return (
    <div>
      <ValidateSubsequence 
      array={[1, 2, 3, 4, 5, 6, 7, 8]}
      subsequence={[2, 5, 6, 8]}
      />
      <SortedSquaredArray 
      array={[1, 5, 8, 43, 65, 678]}
      />
    </div>
  )
}