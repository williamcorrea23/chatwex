/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
/**  experimental: { serverActions: true },*/
  images: {
    domains: ['github.com', 'lh3.googleusercontent.com', 'images.unsplash.com'],
  },
  env: {
    DEMO_USER_PASSWORD: 'fodase24', // Substitua por uma senha segura
  FIREBASE_API_KEY: "AIzaSyDwNC4QWaBQYqvayl98oMArcGdYV0JuqSk",
  FIREBASE_AUTH_DOMAIN: "elearning-568mbq.firebaseapp.com",
  FIREBASE_PROJECT_ID: "elearning-568mbq",
  FIREBASE_STORAGE_BUCKET: "elearning-568mbq.appspot.com",
  FIREBASE_MESSAGING_SENDER_ID: "956581108104",
  FIREBASE_APP_ID: "1:956581108104:web:2be9a9b0c5978cd4b3823d",
  FIREBASE_MEASUREMENT_ID: "G-WLB4FBXE9R",
    STRIPE_PRO_MEMBERSHIP_PRODUCT_ID: "prod_QSXdaODLiJU66u",
 },
}

module.exports = nextConfig
