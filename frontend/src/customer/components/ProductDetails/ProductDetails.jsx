import Button from "@mui/material/Button";

import { StarIcon } from "@heroicons/react/20/solid";
import { Box, Grid, LinearProgress, Rating } from "@mui/material";
import ProductReviewCard from "./ProductReviewCard";
import { mens_kurta } from "../../../Data/mens_kurta";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProductsById } from "../../../State/Product/Action";
import { addItemToCart } from "../../../State/Cart/Action";
import { data } from "autoprefixer";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192", 
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    {
      id: "white",
      name: "White",
      classes: "bg-white checked:outline-gray-400",
    },
    {
      id: "gray",
      name: "Gray",
      classes: "bg-gray-200 checked:outline-gray-400",
    },
    {
      id: "black",
      name: "Black",
      classes: "bg-gray-900 checked:outline-gray-900",
    },
  ],
  sizes: [
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {

const [selectedSize, setSelectedSize] = useState("");
const navigate = useNavigate();
const params = useParams()
const dispatch = useDispatch();
const {products} = useSelector(store=>store);

console.log("----",params.productId)

const handleAddToCart=()=>{
  const data={productId:params.productId,size:selectedSize}
  console.log("data _", data)
  dispatch(addItemToCart(data))
  navigate("/cart")
}

useEffect(()=>{
  const data = {productId:params.productId}
dispatch(findProductsById(data))
},[params.productId])

  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w[30rem] max-h-[35rem]">
              <img
                src={products?.product?.imageUrl}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-wrap space-x-5 justify-center">
              {product.images.map((item) => (
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] mx-h-[5rem] mt-4">
                  <img
                    alt={item.alt}
                    src={item.src}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:col-span-1 ">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-lg lg:text-xl font-semibold text-gray-900">
                {" "}
                {products.product?.brand}
              </h1>
              <h1 className="text-lg lg:text-xl text-gray-900 opacity-60 pt-1">
                {products.product?.title}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>

              <div className="flex space-x-5 items-center text-lg lg:text-x1 text-gray-900 mt-6">
                <p className="font-semibold ">{products.product?.discountedPrice}</p>

                <p className="opacity-50 line-through">{products.product?.price}</p>
                <p className="text-green-600 font-semibold">{products.product?.discountPersent}%Off</p>
              </div>

              {/* Reviews */}
              <div className="mt-6">
                <div className="flex items-center space-x-3">
                  <Rating name="read-only" value={5.5} readOnly />
                  <p className="opacity-50 text-sm">56070 Ratings</p>
                  <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    3800 Reviews
                  </p>
                </div>
              </div>

              <form className="mt-10">
                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  </div>

                  <fieldset aria-label="Choose a size" className="mt-4">
                    <div className="grid grid-cols-4 gap-3">
                      {product.sizes.map((size) => (
                        <div
                          key={size.name}
                          onClick={() => size.inStock && setSelectedSize(size.name)}
                          className={`group relative flex items-center justify-center rounded-md border p-3 cursor-pointer
                            ${selectedSize === size.name ? "border-indigo-600 bg-indigo-600" : "border-gray-300 bg-white"}
                            ${!size.inStock ? "border-gray-400 bg-gray-200 opacity-25 cursor-not-allowed" : ""}`}
                        >
                          <span
                            className={`text-sm font-medium uppercase
                              ${selectedSize === size.name ? "text-white" : "text-gray-900"}`}
                          >
                            {size.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                </div>

                <Button onClick={handleAddToCart}
                  variant="contained"
                  sx={{ px: "2rem", py: "1rem", bgcolor: "#9155fd" }}
                >
                  Add To Cart
                </Button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Rating and reviews */}
        <section className="mt-10">
          <h1 className="font-semibold text-lg pb-4">
            Recent Review and Rating
          </h1>

          <div className="border p-6">
            <Grid container spacing={6}>
              {/* LEFT SIDE – Reviews */}
              <Grid item xs={12} md={7}>
                <div className="space-y-5">
                  {[1, 1, 1].map((_, i) => (
                    <ProductReviewCard key={i} />
                  ))}
                </div>
              </Grid>
              {/* RIGHT SIDE – Product Ratings */}
              <Grid item xs={12} md={7}>
                <Box
                  sx={{
                    pl: { md: 4 },
                    width: "100%",
                  }}
                >
                  <h1 className="text-lg font-semibold mb-1">
                    Product Ratings
                  </h1>

                  <Box className="flex items-center gap-2 mb-6">
                    <Rating value={4.6} precision={0.5} readOnly />
                    <p className="text-sm text-gray-500">42807 Ratings</p>
                  </Box>

                  {[
                    { label: "Excellent", value: 70, color: "success" },
                    { label: "Very Good", value: 55, color: "success" },
                    { label: "Good", value: 40, color: "warning" },
                    { label: "Average", value: 25, color: "warning" },
                    { label: "Poor", value: 10, color: "error" },
                  ].map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 2,
                        width: "100%",
                      }}
                    >
                      {/* Label */}
                      <Box sx={{ width: 120 }}>
                        <p className="text-sm">{item.label}</p>
                      </Box>

                      {/* Progress Bar – FORCE WIDTH */}
                      <Box sx={{ width: "65%", mx: 2 }}>
                        <LinearProgress
                          variant="determinate"
                          value={item.value}
                          color={item.color}
                          sx={{
                            height: 7, // 👈 THIN
                            borderRadius: 10,
                            backgroundColor: "#e5e7eb",
                            minWidth: 300, // 👈 🔥 BAR VISIBLE FIX
                            "& .MuiLinearProgress-bar": {
                              borderRadius: 10,
                            },
                          }}
                        />
                      </Box>

                      {/* Count */}
                      <Box sx={{ width: 70, textAlign: "right" }}>
                        <p className="text-sm text-gray-500"></p>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </div>
        </section>

        {/* Similar Products */}
        <section className="pt-10">

          <h1 className="py-5 text-xl font-bold">Similar Products</h1>

          <div className="flex flex-wrap space-y-5">

            {mens_kurta.map((item)=><HomeSectionCard product={item}/>)}
          </div>

        </section>
      </div>
    </div>
  );
}
