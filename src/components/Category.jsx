import React from 'react'

const Category = ({ name, changeCategory }) => {
  return (
    <button onClick={changeCategory} className='btn' type='button'>
      {name}
    </button>
  )
}

export default Category
