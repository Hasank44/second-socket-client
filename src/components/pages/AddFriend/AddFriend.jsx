import React, { useEffect } from 'react'


const requests = [
  {
    _id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com'
  },
  {
    _id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com'
  },
  {
    _id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com'
  },
  {
    _id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com'
  },
  {
    _id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com'
  },
  {
    _id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com'
  },
  {
    _id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com'
  },
  {
    _id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com'
  },
  {
    _id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com'
  },
  {
    _id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com'
  },
  {
    _id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com'
  },
];

const AddFriend = ({ isAddFriendOpen, setIsAddFriendOpen }) => {
  const sideRef = React.useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sideRef.current && !sideRef.current.contains(event.target)) {
        setIsAddFriendOpen(false);
      };
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  })

  return (
    <div
      ref={sideRef}
      className={isAddFriendOpen ? 'block absolute top-12 right-4 bg-[#131222] p-4 rounded-lg shadow-lg z-50' : 'hidden'}>
      <div>
        <h3 className='text-lg font-semibold mb-2 text-gray-200'>Friend Email</h3>
        <input
          type="text"
          placeholder='Enter Friend Email'
          className='w-full p-2 mb-2 rounded bg-gray-700 text-white focus:outline-none'
        />
        <button
          className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded'>
          Send Request
        </button>
      </div>
      <div>
        <p>see all requests</p>
        { requests.length > 0 ? (
            <div className='h-[350px] overflow-y-auto'>
              {requests.map((request) => (
                <div
                  key={request.id}
                  title={request?.email}
                  className="p-2 border-b flex justify-between items-center border-gray-600">
                  <p className="text-gray-200 cursor-pointer">{request?.name}</p>
                  <div className='flex'>
                    <button
                      className='bg-green-600 hover:bg-green-700 text-white py-1 px-2 rounded mr-2'>Accept
                    </button>
                    <button
                      className='bg-red-600 hover:bg-red-700 text-white py-1 px-2 rounded'>Decline
                    </button>
                  </div>
                </div>
              ))}
            </div>) : (
            <p className='text-gray-400'>No pending requests</p>
          )}
      </div>
    </div>
  )
}

export default AddFriend
