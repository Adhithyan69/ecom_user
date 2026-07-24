# Unused Files and Folders Report for User-Drop

This document lists files and folders that appear to be unused by the current app based on the existing source structure, route setup, and import references.

> Note: This is a review report, not an automatic deletion. These items are likely safe to remove if you do not need them for future work.

## High-confidence unused items

### Component files
- [src/components/AdSection/AdSection.jsx](src/components/AdSection/AdSection.jsx)
- [src/components/AdSection/AdSection.css](src/components/AdSection/AdSection.css)
- [src/components/AdSection/PopularProducts.css](src/components/AdSection/PopularProducts.css)
- [src/components/AllProductsSection.jsx](src/components/AllProductsSection.jsx)
- [src/components/BottomNav.jsx](src/components/BottomNav.jsx)
- [src/components/BottomNav.css](src/components/BottomNav.css)
- [src/components/FeaturedProductBanner.jsx](src/components/FeaturedProductBanner.jsx)
- [src/components/HeroSlider.jsx](src/components/HeroSlider.jsx)
- [src/components/HeroSlider.css](src/components/HeroSlider.css)
- [src/components/LatestArrivalsSection.jsx](src/components/LatestArrivalsSection.jsx)
- [src/components/PopularProductsSection.jsx](src/components/PopularProductsSection.jsx)
- [src/components/ServiceBlock.jsx](src/components/ServiceBlock.jsx)
- [src/components/ServiceBlock.css](src/components/ServiceBlock.css)
- [src/components/ImageUploader.jsx](src/components/ImageUploader.jsx)
- [src/components/Header.jsx](src/components/Header.jsx)
- [src/components/Header.css](src/components/Header.css)
- [src/components/Category/CategorySection.jsx](src/components/Category/CategorySection.jsx)
- [src/components/Category/CategoryCard.jsx](src/components/Category/CategoryCard.jsx)
- [src/components/Product/ProductCard.jsx](src/components/Product/ProductCard.jsx)

### Service / config files
- [src/firebase.js](src/firebase.js)
- [src/services/firebase.js](src/services/firebase.js)

### Empty or effectively unused folders
- [src/components/ui](src/components/ui) — empty folder
- [src/services/api](src/services/api) — empty folder

## Why these look unused
These files are not currently connected to the main app flow through:
- route definitions in [src/App.jsx](src/App.jsx)
- page components such as [src/pages/Home.jsx](src/pages/Home.jsx) and [src/pages/Category.jsx](src/pages/Category.jsx)
- the active layout in [src/components/layout/Layout.jsx](src/components/layout/Layout.jsx)

## Optional cleanup suggestion
If you want a cleaner project structure, the items above are the first ones worth removing or archiving.
