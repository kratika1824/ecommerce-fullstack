export const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "/",
          imageSrc:
            "https://images.unsplash.com/photo-1525845859779-54d477ff291f?w=800&q=80",
          imageAlt: "Women ethnic fashion clothing",
        },
        {
          name: "Basic Tees",
          href: "/",
          imageSrc:
            "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=800&q=80",
          imageAlt: "Women casual modern outfits",
        },
      ],

      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", id: "top", href: `{women/clothing/tops}` },
            { name: "Dresses", id: "women_dress", href: "#" },
            { name: "Women Jeans", id: "women_jeans" },
            { name: "Lengha Choli", id: "lengha_choli" },
            { name: "Sweaters", id: "sweater" },
            { name: "T-Shirts", id: "t-shirt" },
            { name: "Jackets", id: "jacket" },
            { name: "Gouns", id: "gouns" },
            { name: "Sarees", id: "saree" },
            { name: "Kurtas", id: "kurtas" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", id: "watch" },
            { name: "Wallets", id: "wallet" },
            { name: "Bags", id: "bag" },
            { name: "Sunglasses", id: "sunglasse" },
            { name: "Hats", id: "hat" },
            { name: "Belts", id: "belt" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Full Nelson", id: "#" },
            { name: "My Way", id: "#" },
            { name: "Re-Arranged", id: "#" },
            { name: "Counterfeit", id: "#" },
            { name: "Significant Other", id: "#" },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "/",
          imageSrc:
            "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80",
          imageAlt: "Men stylish casual outfit",
        },
        {
          name: "Artwork Tees",
          href: "/",
          imageSrc:
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80",
          imageAlt: "Men trendy t-shirt fashion",
        },
      ],

      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Mens Kurtas", id: "mens_kurta" },
            { name: "Shirt", id: "shirt" },
            { name: "Men Jeans", id: "men_jeans" },
            { name: "Sweaters", id: "#" },
            { name: "T-Shirts", id: "t-shirt" },
            { name: "Jackets", id: "#" },
            { name: "Activewear", id: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", id: "#" },
            { name: "Wallets", id: "#" },
            { name: "Bags", id: "#" },
            { name: "Sunglasses", id: "#" },
            { name: "Hats", id: "#" },
            { name: "Belts", id: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Re-Arranged", id: "#" },
            { name: "Counterfeit", id: "#" },
            { name: "Full Nelson", id: "#" },
            { name: "My Way", id: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Company", id: "/" },
    { name: "Stores", id: "/" },
  ],
};
