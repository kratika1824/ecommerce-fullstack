import { Card, CardContent, styled, Typography, Button } from '@mui/material'
import React from 'react'

const TrignleImg = styled("img")({
    right: 0,
    bottom: 0,
    height: 170,
    position: "absolute",
})

const TrophyImg = styled("img")({
    right: 36,
    bottom: 20,
    height: 98,
    position: "absolute",
})

const Achivement = () => {
  return (
   <Card sx={{position:"relative"}}>
     <CardContent>
        <Typography variant='h6' sx={{letterSpacing:".25px"}}>
            Shop with fenty
        </Typography>
        <Typography variant='body2'>Congratulations 🥳</Typography>
        <Typography variant='h5' sx={{my:3.1}}> 420.8k </Typography>

        <Button size='small' variant='contained'>View Sales</Button>

        <TrignleImg src=''></TrignleImg>
        <TrophyImg src='https://img.magnific.com/free-vector/trophy_78370-345.jpg?semt=ais_test_b&w=740&q=80'></TrophyImg>
     </CardContent>
   </Card>
  )
}

export default Achivement