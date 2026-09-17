import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import AdressCard from "../AdressCard/AdressCard";
import { Box, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { createOrder } from "../../../State/Order/Action";
import { useNavigate } from "react-router-dom";

const DeliveryAddressForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    mobile: "",
  });

  // ✅ ab har field apni state-key seedhe pass karegi, name attribute se koi matlab nahi
  const handleChange = (field) => (e) => {
    setAddress({
      ...address,
      [field]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    // ✅ yeh wapas original names hain - jo TextField ke actual "name" attr se match karte hain
    const addressData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zip_code: data.get("zip"),
      mobile: data.get("phoneNumber"),
    };
    const orderData = { address: addressData, navigate };
    dispatch(createOrder(orderData));
    console.log("address", orderData);
  };

  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          lg={5}
          className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
          width={550}
          height={475}
        >
          <div className="p-4 py-7 border-b cursor-pointer">
            <AdressCard address={address} />

            <Button
              sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large"
              variant="contained"
            >
              Deliver Here
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5" width={700}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3.5}>
                <Grid item xs={12} sm={6} width={310}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                    onChange={handleChange("firstName")}
                  />
                </Grid>

                <Grid item xs={12} sm={6} width={310}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="given-name"
                    onChange={handleChange("lastName")}
                  />
                </Grid>

                <Grid item xs={12} sm={6} width={650}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="given-name"
                    multiline
                    rows={4}
                    onChange={handleChange("streetAddress")}
                  />
                </Grid>

                <Grid item xs={12} sm={6} width={310}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="given-name"
                    onChange={handleChange("city")}
                  />
                </Grid>

                <Grid item xs={12} sm={6} width={310}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                    autoComplete="given-name"
                    onChange={handleChange("state")}
                  />
                </Grid>

                <Grid item xs={12} sm={6} width={310}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal code"
                    fullWidth
                    autoComplete="shipping postal-code"
                    onChange={handleChange("zipCode")}
                  />
                </Grid>

                <Grid item xs={12} sm={6} width={310}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    autoComplete="given-name"
                    onChange={handleChange("mobile")}
                  />
                </Grid>

                <Grid item xs={12} sm={6} width={700}>
                  <Button
                    sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;