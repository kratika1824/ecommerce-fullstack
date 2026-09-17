const AdressCard = ({address}) => {
  if(!address) return null;

  return (
    <div>
      <div className='space-y-3'>
        <p className='font-semibold'>{address.firstName + " " + address.lastName}</p>
        
        <div>
          <p>{address.state}, {address.city}, {address.streetAddress}, {address.zip_code}</p>
        </div>

        <div className='space-y-1'>
          <p className='font-semibold'>Phone Number</p>
          <p>{address.mobile}</p>
        </div>
      </div>
    </div>
  )
}

export default AdressCard