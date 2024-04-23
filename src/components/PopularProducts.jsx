 import { Link } from 'react-router-dom';
import coffee from '../assets/images/icons/1.png'
import Coffee from './Coffee';
function PopularProducts({ coffees }) {
  return (
    <>
      <div className="text-center">
        <p>--- Sip & Savor ---</p>
        <h2 className="text-3xl font-semibold text-[#331A15] ">
          Our Popular Products
        </h2>
        <div className="flex justify-center">
          <Link to='/addcoffee'>
            <button className="flex gap-2 items-center text-xl border-2 border-[#331A15] px-4 py-2  mt-3 rounded-md bg-[#E3B577] text-white">
              Add Coffee <img className="w-6" src={coffee} alt="" />
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 max-w-6xl mx-auto mt-6 md:mt-10">
        {coffees.map(coffee => (
          <Coffee key={coffee._id} coffee={coffee} />
        ))}
      </div>
    </>
  );
}

export default PopularProducts