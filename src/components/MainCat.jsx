import React from 'react'
import CategoriesSidebar from './CategorisSidebar'
import CategoriesProducts from './CategoriesProducts'

function MainCat() {
  return (
    <div className="container flex gap-6">
        <CategoriesSidebar/>
        <CategoriesProducts />
    </div>
  )
}

export default MainCat