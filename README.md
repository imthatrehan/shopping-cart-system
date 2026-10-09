# 🛒 Shopping Cart & Product Catalog System

A responsive, interactive e-commerce catalog and cart analysis system built with **Vanilla JavaScript (ES6+)** and **Tailwind CSS**.

![Project Status](https://img.shields.io/badge/Status-Completed-success)
![Day](https://img.shields.io/badge/12--Week--Roadmap-Day%202-blue)

---

## 🌟 Features

- **Live Product Search:** Instant, case-insensitive search filtering across all catalog products.
- **Category Filter:** Filter items dynamically across multiple categories (Electronics, Clothing, Footwear, Accessories).
- **Sort by Price:** Sort products in ascending or descending price orders without mutating original data.
- **Dynamic Cart Summary:** 
  - Cart item count calculation
  - Subtotal & total price accumulation
  - Most expensive cart item detection
- **Responsive Product Grid:** Mobile-first layout with smooth hover transitions.
- **Graceful Empty State:** User-friendly fallback when search/filter returns zero products.

---

## 🧠 Core JavaScript Concepts Practiced

This project focuses on real-world data manipulation without external UI libraries:

1. **`map()` & `find()`:** Merging cart item IDs with catalog metadata to produce complete order line items.
2. **`reduce()`:** 
   - Calculating total cart financial value
   - Accumulating total unit quantities
   - Finding maximum price item in a single pass ($O(N)$)
   - Dynamic frequency distribution/grouping by product category
3. **`every()` & `some()`:** Verifying inventory stock availability across all items in cart.
4. **`filter()` & `toLowerCase().includes()`:** Real-time multi-character search matching.
5. **Immutable Sorting:** `[...products].sort((a, b) => ...)` to avoid mutating baseline data.
6. **Set:** Extracting distinct categories using `[...new Set(categories)]`.

---

## 🛠️ Tech Stack

- **Markup:** HTML5 (Semantic Structure)
- **Styling:** Tailwind CSS (CDN)
- **Logic:** Vanilla JavaScript (ES6+ Modules, Array Methods, DOM Manipulation)

---

## 🚀 How to Run

1. Clone this repository:
   ```bash
   git clone https://github.com/imthatrehan/shopping-cart-system
