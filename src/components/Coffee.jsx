import { IoMdEye } from 'react-icons/io';
import { MdModeEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
function Coffee({ coffee }) {
  const { _id, photo, name, chef } = coffee;
  const handleDelete = _id => {
    console.log('clicked', _id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deleteCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
            }
          });
      }
    });
  };
  return (
    <div className="grid gap-4 grid-cols-6">
      <div className="col-span-2">
        <img src={photo} alt="" />
      </div>
      <div className="col-span-3 flex justify-center items-center flex-col">
        <h2>Name: {name}</h2>
        <p className="">Chef: {chef}</p>
        <p>Price : 930tk</p>
      </div>
      <div className="flex justify-center items-center flex-col gap-2">
        <button>
          <IoMdEye className="border p-2 text-4xl rounded-md bg-[#D2B48C] text-white " />
        </button>
        <Link to={`/updatecoffee/${_id}`}>
          <MdModeEdit className="border p-2 text-4xl rounded-md bg-[#3C393B] text-white " />
        </Link>
        <button onClick={() => handleDelete(_id)}>
          <MdDelete className="border p-2 text-4xl rounded-md bg-[#EA4744] text-white " />
        </button>
      </div>
    </div>
  );
}

export default Coffee;
