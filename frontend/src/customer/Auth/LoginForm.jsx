import { Button, Grid, TextField, Snackbar, Alert } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../State/Auth/Action'

const LoginForm = () => {
  const dispatch=useDispatch();
    const {auth}=useSelector(store=>store)
    const navigate=useNavigate();
    
    const handleSubmit = (event) => {
      event.preventDefault()

      const data = new FormData(event.currentTarget);

      const userData={
      
        email:data.get("email"),
        password:data.get("password")
      }

      dispatch(login(userData))
      console.log("userData", userData)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                
                <Grid item xs={12} >
                    <TextField
                    required
                    id='email'
                    name='email'
                    label="Email"
                    fullWidth
                    autoComplete='email'
                    />
                </Grid>

                <Grid item xs={12} >
                    <TextField
                    required
                    id='password'
                    name='password'
                    label="Password"
                    fullWidth
                    autoComplete='password'
                    />
                </Grid>

                <Grid item xs={12} >
                   <Button
                   className='bg-brand-burgundy w-full'
                   type='submit'
                   variant='contained'
                   size='large'
                   sx={{padding:".8rem 0",bgcolor:"#4a0e18"}}
                   >
                       Login
                   </Button>
                </Grid>
            </Grid>
        </form>
        <div className='flex justify-center flex-col items-center'>
                    <div className='py-3 flex items-center'>
                        <p>if you don't have account ? </p>
                        <Button onClick={()=>navigate("/register")} className='ml-5 ' size='small'>
                          Register
                        </Button>
                    </div>
        <Snackbar open={Boolean(auth.error)} autoHideDuration={4000}>
          <Alert severity="error" sx={{ width: "100%" }}>{auth.error}</Alert>
        </Snackbar>
                </div>
    </div>
  )
}

export default LoginForm