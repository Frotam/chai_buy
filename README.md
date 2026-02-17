# 🍵 Chai Buy - Indian Creator Support Platform

An Indian version of "Buy Me a Coffee" integrated with Razorpay payment gateway. A platform designed for content creators to receive support and donations from their audience.

## 📋 Project Description

Chai Buy is a web application that allows content creators (YouTubers, bloggers, podcasters, etc.) to receive monetary support from their fans. Similar to "Buy Me a Coffee", but tailored for the Indian market with Razorpay integration for seamless payment processing in Indian rupees.

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15.3.1
- **UI Library**: React 19.0.0
- **Styling**: 
  - Tailwind CSS 4
  - Sass 1.87.0
  - CSS
- **Icons**: FontAwesome 6.7.2
- **Animations**: AOS (Animate On Scroll) 3.0.0-beta.6
- **3D Graphics**: Spline React 4.0.0
- **Language**: TypeScript 5
- **Hot Toast**: React Hot Toast 2.5.2

### Backend & Database
- **Authentication**: NextAuth.js 4.24.11
- **MongoDB Adapter**: @auth/mongodb-adapter 3.9.0
- **Database**: MongoDB 6.16.0
- **ODM**: Mongoose 8.14.1
- **HTTP Client**: Axios 1.9.0

### Payment Integration
- **Razorpay**: razorpay 2.9.6 (Payment gateway for Indian payments)

### Media Management
- **Cloudinary**: next-cloudinary 6.16.0 (Image hosting and optimization)

### Development Tools
- **Linting**: ESLint 9
- **Build Tool**: Tailwind CSS PostCSS 4
- **Type Safety**: TypeScript 5

### Package Manager
- **pnpm** (as specified in lock file)

## 📊 Project Structure

```
chai_buy/
├── src/                    # Source code
├── public/                 # Static assets
├── app/                    # Next.js app directory
├── eslint.config.mjs       # ESLint configuration
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.mjs      # PostCSS configuration
├── package.json            # Project dependencies
└── pnpm-lock.yaml          # Dependency lock file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- pnpm package manager
- MongoDB instance (local or cloud)
- Razorpay account
- Cloudinary account (for image hosting)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Frotam/chai_buy.git
   cd chai_buy
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory and add:
   ```env
   # MongoDB
   MONGODB_URI=your_mongodb_connection_string
   
   # NextAuth.js
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   
   # Razorpay
   NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   
   # Cloudinary
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. **Run the development server**:
   ```bash
   pnpm dev
   ```

5. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

```bash
# Development server
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

## 🌟 Key Features

- **Creator Profiles**: Creators can set up their unique profile page
- **Support Tiers**: Multiple support options for donors
- **Razorpay Integration**: Secure payment processing in INR
- **Authentication**: Secure user login with NextAuth.js
- **Image Upload**: Cloudinary integration for profile pictures and branding
- **Responsive Design**: Mobile-first, responsive UI with Tailwind CSS
- **Animations**: Smooth animations with AOS
- **3D Elements**: Interactive 3D elements with Spline

## 🔐 Authentication

This project uses NextAuth.js for secure authentication with MongoDB as the adapter for storing user sessions and credentials.

## 💳 Payment Processing

Razorpay is integrated for handling payments securely. The Razorpay SDK handles:
- Payment creation
- Payment verification
- Transaction management
- Indian payment methods support

## 🎨 UI/UX

- Built with Tailwind CSS for rapid development
- Sass support for advanced styling
- FontAwesome icons for consistent iconography
- Scroll animations with AOS
- 3D visual effects with Spline React

## 📱 Responsive Design

The application is fully responsive and works seamlessly on:
- Desktop browsers
- Tablets
- Mobile devices

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a new branch for your feature
3. Make your changes
4. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Razorpay Documentation](https://razorpay.com/docs)
- [MongoDB Documentation](https://docs.mongodb.com)
- [NextAuth.js Documentation](https://next-auth.js.org)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📧 Support

For support, please open an issue on GitHub or contact the maintainer.

---

Made with ❤️ for Indian content creators