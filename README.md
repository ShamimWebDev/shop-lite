# ShopLite

ShopLite is a premium, minimalist e-commerce application built with Next.js and Express. It streamlines the product listing experience for local sellers and provides a curated gallery for curious buyers.

## Features

- **Landing Page**: 7+ professional sections with high-impact visuals.
- **Product Gallery**: Dynamic listing of products fetched from an Express API.
- **Product Details**: Deep-dive view into individual products with rich UI.
- **Mock Authentication**: Secure-ready login flow using cookies and mock credentials.
- **Protected Routes**: Middleware-based protection for the "Add Item" flow.
- **Professional Aesthetics**: Custom-designed UI with framer-motion animations and studio-quality imagery.

## Technologies

- **Frontend**: Next.js 15 (App Router), Tailwind CSS, Framer Motion, Lucide React.
- **Backend**: Express.js, Cookie Parser, CORS, Dotenv.
- **Styling**: Vanilla CSS with Tailwind v4 features.

## Getting Started

### 1. Backend Setup

```bash
cd server
npm install
npm run dev # Starts on http://localhost:5000
```

### 2. Frontend Setup

```bash
# Root directory
npm install
npm run dev # Starts on http://localhost:3000
```

### 3. Usage

- Browse the landing page.
- Visit `/items` to see the product gallery.
- Use `demo@example.com` / `password` to sign in.
- Once signed in, visit `/add-item` to list new products.

## Route Summary

| Route         | Accessibility | Description                        |
| :------------ | :------------ | :--------------------------------- |
| `/`           | Public        | Professional Landing Page          |
| `/items`      | Public        | Product Gallery                    |
| `/items/[id]` | Public        | Detailed Product View              |
| `/login`      | Public        | Authentication Page                |
| `/add-item`   | **Protected** | List New Products (Requires Login) |

---

_Built with ❤️ for a seamless marketplace experience._
