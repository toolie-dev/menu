import { useEffect, useState } from 'react'
import Product from './components/Product'
import Category from './components/Category'
import data from './data'

const App = () => {
  const [products, setProducts] = useState(data)
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState('all')

  const changeCategory = (category) => {
    setCategory(category)
  }

  useEffect(() => {
    setCategories(['all', ...new Set(products.map(({ category }) => category))])
  }, [])

  return (
    <main>
      <section className='menu'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='title-underline'></div>
        </div>
        <div className='btn-container'>
          {categories.map((category) => (
            <Category
              key={category}
              name={category}
              changeCategory={() => changeCategory(category)}
            />
          ))}
        </div>
        <div className='section-center'>
          {products
            .filter(
              (product) => product.category == category || category == 'all'
            )
            .map((product) => (
              <Product key={product.id} {...product} />
            ))}
        </div>
      </section>
    </main>
  )
}

export default App
