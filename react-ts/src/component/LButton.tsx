import React, { useState } from 'react';
const LButton: React.FC = () => {
  const [like, setLike] = useState(0)
  return (
    <button onClick={() => {setLike(like + 1)}}>
      {like} 👍
    </button>
  )
}
export default LButton
