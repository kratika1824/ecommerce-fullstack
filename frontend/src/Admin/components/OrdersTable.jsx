import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { confirmOrder, deleteOrder, deliveredOrder, getOrders, shipOrder } from '../../State/Admin/Order/Action'
import { Avatar, AvatarGroup, Button, Card, CardHeader, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const OrdersTable = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedOrderId, setSelectedOrderId] = React.useState(null);
  const open = Boolean(anchorEl);
 const handleClick = (event, orderId) => {
  setAnchorEl(event.currentTarget);
  setSelectedOrderId(orderId);
};
 const handleClose = () => {
  setAnchorEl(null);
  setSelectedOrderId(null);
};
  const dispatch=useDispatch()

  const {adminOrder} = useSelector(store=>store)

  useEffect(()=>{
    dispatch(getOrders())
  },[adminOrder.confirmed,adminOrder.shipped,adminOrder.delivered])

  console.log("admin Orders ",adminOrder)
 
  const handleShipedOrder=(orderId)=>{
    dispatch(shipOrder(orderId))
    handleClose()
  }
   const handleConfirmedOrder=(orderId)=>{
    dispatch(confirmOrder(orderId))
    handleClose()
  }

   const handleDeliveredOrder=(orderId)=>{
    dispatch(deliveredOrder(orderId))
    handleClose()
  }

   const handleDeleteOrder=(orderId)=>{
    dispatch(deleteOrder(orderId))
    
  }

  return (
    <div className='p-10'>
       <Card className='mt-2 bg-[#1b1b1b]'>

       <CardHeader title = "All Orders"/>

         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
       <TableHead>
  <TableRow>
    <TableCell sx={{ width: 60 }}>Image</TableCell>
    <TableCell align="left" sx={{ minWidth: 180 }}>Title</TableCell>
    <TableCell align="left">Id</TableCell>
    <TableCell align="left">Price</TableCell>
    <TableCell align="left">Status</TableCell>
  </TableRow>
</TableHead>
        <TableBody>
          {adminOrder.orders?.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="" className=''>
                <AvatarGroup max={3} sx={{justifyContent:"start"}}>
                  {item.orderItems.map((orderItem)=><Avatar src={orderItem.product.imageUrl}></Avatar>)}
                </AvatarGroup>
                
              </TableCell>
              <TableCell component="th" scope="row">
                {item.orderItems.map((orderItem)=><p>
                  {orderItem.product.title}
                </p>)}
                {/* {item.title} */}
              </TableCell>
             
              <TableCell align="left">{item.id}</TableCell>
              <TableCell align="left">{item.totalPrice}</TableCell>
            <TableCell align="left"><span className={`text-white px-3 py-2
            rounded-full
            ${item.orderStatus==="CONFIRMED"?"bg-[#559b55]":
              item.orderStatus==="SHIPPED"?"bg-[#41419c]":
              item.orderStatus==="PLACED"?"bg-[#02B290]":
              item.orderStatus=="PENDING"?"bg-[gray]":
              "bg-[#32642d]"}`}>{item.orderStatus}</span></TableCell>
              <TableCell align="left">
       <Button
  id={`button-${item.id}`}
  aria-haspopup="true"
  onClick={(e) => handleClick(e, item.id)}
>
  Status
</Button>
    <Menu
  id={`menu-${item.id}`}
  anchorEl={anchorEl}
  open={open && selectedOrderId === item.id}
  onClose={handleClose}
  slotProps={{
    list: {
      'aria-labelledby': `button-${item.id}`,
    },
  }}
>
        <MenuItem onClick={()=>handleConfirmedOrder(item.id)}>Confirmed Order</MenuItem>
        <MenuItem onClick={()=>handleShipedOrder(item.id)}>Shipped Order</MenuItem>
        <MenuItem onClick={()=>handleDeliveredOrder(item.id)}>Delivered Order</MenuItem>
      </Menu>
              </TableCell>

              <TableCell align="left">
                <Button onClick={()=>handleDeleteOrder(item.id)} 
                variant='outlined'>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Card>
    </div>
  )
}

export default OrdersTable