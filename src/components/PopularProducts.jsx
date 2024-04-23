 import coffee from '../assets/images/icons/1.png'
function PopularProducts() {
  return (
    <div className="text-center">
      <p>--- Sip & Savor ---</p>
      <h2 className="text-3xl font-semibold text-[#331A15] ">
        Our Popular Products
      </h2>
      <div className="flex justify-center">
        <button className="flex gap-2 items-center text-xl border-2 border-[#331A15] px-4 py-2  mt-3 rounded-md bg-[#E3B577] text-white">
          Add Coffee <img className="w-6" src={coffee} alt="" />
        </button>
      </div>
    </div>
  );
}

export default PopularProducts