import Category from './Category/Category'
import Company from './Company/Company'
import Country from './Country/Country'
import './filter.css'

export const Filter = () => {
  return (
    <>
        <div className='fiter'>
        <Category />
        <Country />
        <Company />
        </div>
    </>
  )
}

export default Filter