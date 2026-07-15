"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import FilterListIcon from "@mui/icons-material/FilterList";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import ProductCard from "./ProductCard";
import { mens_kurta } from "../../../Data/mens_kurta";
import { filters, singleFilter } from "./FilterData";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  FormControl,
  FormControlLabel,
  Pagination,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { findProducts } from "../../../State/Product/Action";

const sortOptions = [
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

export default function Product() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const param = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);

  const decodedQueryString = decodeURIComponent(location.search);
  const searchParams = new URLSearchParams(decodedQueryString);
  const colorValue = searchParams.get("color");
  const sizeValue = searchParams.get("size");
  const priceValue = searchParams.get("price");
  const disccount = searchParams.get("disccount");
  const sortvalue = searchParams.get("sort");
  const pageNumber = searchParams.get("page") || 1;
  const stock = searchParams.get("stock");

  const handlePaginationChange = (event, value) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", value);
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };

  /* ================= MULTI FILTER (CHECKBOX) ================= */
  const handleFilter = (value, sectionId) => {
    const searchParams = new URLSearchParams(location.search);

    let currentValues = searchParams.get(sectionId);
    let valuesArray = currentValues ? currentValues.split(",") : [];

    if (valuesArray.includes(value)) {
      valuesArray = valuesArray.filter((item) => item !== value);
    } else {
      valuesArray.push(value);
    }

    if (valuesArray.length > 0) {
      searchParams.set(sectionId, valuesArray.join(","));
    } else {
      searchParams.delete(sectionId);
    }

    navigate({ search: `?${searchParams.toString()}` });
  };

  /* ================= SINGLE FILTER (RADIO) ================= */
  const handleRadioFilterChange = (e, sectionId) => {
    const searchParams = new URLSearchParams(location.search);

    searchParams.set(sectionId, e.target.value);

    const query = searchParams.toString();
    navigate({ search: `?${query}` }); // ✅ FIXED
  };

  useEffect(() => {
    const [minPrice, maxPrice] =
      priceValue === null ? [0, 10000] : priceValue.split("-").map(Number);

    const data = {
      category: param.lavelThree,
      colors: colorValue || [],
      sizes: sizeValue || [],
      minPrice,
      maxPrice,
      minDiscount: disccount || 0,
      sort: sortvalue || "price_low",
      pageNumber: pageNumber - 1,
      pageSize: 1,
      stock: stock,
    };
    dispatch(findProducts(data));
  }, [
    param.lavelThree,
    colorValue,
    sizeValue,
    priceValue,
    disccount,
    sortvalue,
    pageNumber,
    stock,
  ]);

  return (
    <div className="bg-white">
      {/* ================= MOBILE FILTER ================= */}
      <Dialog
        open={mobileFiltersOpen}
        onClose={setMobileFiltersOpen}
        className="relative z-40 lg:hidden"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/25" />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel className="relative ml-auto flex size-full max-w-xs flex-col overflow-y-auto bg-white pt-4 pb-6 shadow-xl">
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-2 text-gray-400"
              >
                <XMarkIcon className="size-6" />
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* ================= MAIN ================= */}
      <main className="mx-auto px-4 sm:px-6 lg:px-20">
        {/* HEADER */}
        <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
          <h1 className="text-4xl font-bold text-gray-900">New Arrivals</h1>

          <div className="flex items-center gap-4">
            <Menu as="div" className="relative">
              <MenuButton className="flex items-center text-sm font-medium text-gray-700">
                Sort
                <ChevronDownIcon className="ml-1 size-5 text-gray-400" />
              </MenuButton>
              <MenuItems className="absolute right-0 z-10 mt-2 w-40 bg-white shadow-lg">
                {sortOptions.map((option) => (
                  <MenuItem key={option.name}>
                    <button className="w-full px-4 py-2 text-left text-sm">
                      {option.name}
                    </button>
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>

            <button className="text-gray-400">
              <Squares2X2Icon className="size-5" />
            </button>

            <button
              className="text-gray-400 lg:hidden"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <FunnelIcon className="size-5" />
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <section className="pt-6 pb-24">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
            {/* FILTERS */}
            <div>
              <div className="py-10 flex justify-between items-center">
                <h1 className="text-lg opacity-50 font-bold">Filters</h1>
                <FilterListIcon />
              </div>

              <form className="hidden lg:block">
                {/* MULTI FILTER */}
                {filters.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-b py-6"
                  >
                    {({ open }) => (
                      <>
                        <DisclosureButton className="flex w-full justify-between">
                          <span className="font-medium">{section.name}</span>
                          {open ? (
                            <MinusIcon className="size-5" />
                          ) : (
                            <PlusIcon className="size-5" />
                          )}
                        </DisclosureButton>

                        <DisclosurePanel className="pt-4 space-y-3">
                          {section.options.map((option, idx) => (
                            <div key={idx} className="flex gap-3">
                              <input
                                type="checkbox"
                                checked={
                                  new URLSearchParams(location.search)
                                    .get(section.id)
                                    ?.split(",")
                                    .includes(option.value) || false
                                }
                                onChange={() =>
                                  handleFilter(option.value, section.id)
                                }
                              />
                              <label>{option.label}</label>
                            </div>
                          ))}
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                ))}

                {/* SINGLE FILTER (FIXED – NO DUPLICATE) */}
                {singleFilter.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-b py-6"
                  >
                    {({ open }) => (
                      <>
                        <DisclosureButton className="flex w-full justify-between">
                          <span className="font-medium">{section.name}</span>
                          {open ? (
                            <MinusIcon className="size-5" />
                          ) : (
                            <PlusIcon className="size-5" />
                          )}
                        </DisclosureButton>

                        <DisclosurePanel className="pt-4">
                          <FormControl>
                            <RadioGroup
                              value={
                                new URLSearchParams(location.search).get(
                                  section.id,
                                ) || ""
                              }
                              onChange={(e) =>
                                handleRadioFilterChange(e, section.id)
                              }
                            >
                              {section.options.map((option) => (
                                <FormControlLabel
                                  key={option.value}
                                  value={option.value}
                                  control={<Radio />}
                                  label={option.label}
                                />
                              ))}
                            </RadioGroup>
                          </FormControl>
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>
            </div>

            {/* PRODUCTS */}
            <div className="lg:col-span-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.products &&
                  products?.products?.content?.map((item) => (
                    <ProductCard key={item.id} product={item} />
                  ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px=[3.6rem]">
          <div className="px-4 py-5 flex justify-center">
            <Pagination
              count={products.products?.totalPages}
              color="secondary"
              onChange={handlePaginationChange}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
