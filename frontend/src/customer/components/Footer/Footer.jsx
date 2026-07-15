import React from "react";
import { Grid, Typography, Button, Link } from "@mui/material";

const Footer = () => {
  return (
    // Background color ko main div par de diya taaki pura area black rahe
    <div className="bg-black text-white mt-10" style={{ backgroundColor: 'black', color: 'white' }}>
      
      {/* 1. PEHLA GRID: Sirf 4 Columns ke liye */}
      <Grid
        container
        justifyContent="space-around"
        sx={{ py: 5, width: "100%", m: 0 }}
      >
        {/* Column 1: Company */}
        <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
          <Typography className="pb-5" variant="h6">Company</Typography>
          <div><Button sx={{color:'white', textTransform:'none'}} variant="text">About</Button></div>
          <div><Button sx={{color:'white', textTransform:'none'}} variant="text">Blog</Button></div>
          <div><Button sx={{color:'white', textTransform:'none'}} variant="text">Press</Button></div>
          <div><Button sx={{color:'white', textTransform:'none'}} variant="text">Jobs</Button></div>
          <div><Button sx={{color:'white', textTransform:'none'}} variant="text">Partners</Button></div>
        </Grid>

        {/* Column 2: Solutions */}
        <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
          <Typography className="pb-5" variant="h6">Solutions</Typography>
          <div><Button sx={{color:'white', textTransform:'none'}} variant="text">Marketing</Button></div>
          <div><Button sx={{color:'white', textTransform:'none'}} variant="text">Analytics</Button></div>
          <div><Button sx={{color:'white', textTransform:'none'}} variant="text">Commerce</Button></div>
          <div><Button sx={{color:'white', textTransform:'none'}} variant="text">Insights</Button></div>
          <div><Button sx={{color:'white', textTransform:'none'}} variant="text">Support</Button></div>
        </Grid>

        {/* Column 3: Documentation */}
        <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
          <Typography className="pb-5" variant="h6">Documentation</Typography>
          <div><Button sx={{color:'white', textTransform:'none'}} variant="text">Guides</Button></div>
          <div><Button sx={{color:'white', textTransform:'none'}} variant="text">API status</Button></div>
        </Grid>

        {/* Column 4: Legal */}
        <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
          <Typography className="pb-5" variant="h6">Legal</Typography>
          <div><Button sx={{color:'white', textTransform:'none'}} variant="text">Claim</Button></div>
          <div><Button sx={{color:'white', textTransform:'none'}} variant="text">Privacy</Button></div>
          <div><Button sx={{color:'white', textTransform:'none'}} variant="text">Terms</Button></div>
        </Grid>
      </Grid>
      

      {/* 2. DOOSRA GRID: Copyright wale section ke liye (Isse ye bottom me center me aayega) */}
      <Grid container justifyContent="center" sx={{ pb: 5, width: "100%", m: 0 }}>
        <Grid item xs={12} textAlign="center">
          <Typography variant="body2" component="p">
            &copy; 2023 My Company. All rights reserved.
          </Typography>
          <Typography variant="body2" component="p">
            Made with love by Me.
          </Typography>
          <Typography variant="body2" component="p">
            Icons made by{" "}
            <Link href="https://www.freepik.com" color="inherit" underline="always">
              Freepik
            </Link>{" "}
            from{" "}
            <Link href="https://www.flaticon.com/" color="inherit" underline="always">
              www.flaticon.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;