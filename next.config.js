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
  FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCzXNctPngzhq4N\nslEseCRiqw5UvuAmsX0L73VRkT8Q0+LGBiU/w8JUwHKSCOXwQdQyxkl1lyKYdUSw\nKf/4+9SIPmuO0lYq2RJY3qjmT+bZWwR5OF8qh7n7I1ZmaKv9iZnQyEcVXGtM8rVQ\n0npvFP3hmTf+lLKomlzu4NxwMLTLG2Mi3oKJiyUpaokNNv7j/bqwGJ2X1BuF3HpH\nTtlqSuvdk0RFklTCVX+wlHAWUVsr40hBey0d/B0XLph+hLZeWVEYJ5+UTiLGUPQj\nkSSHR7GHztDlJXhHn8NOWemCGedCaMbbQxMW4EjZBnk3bjoFLizv27ufzfIT889e\nysS6R4Q1AgMBAAECggEAKEkyC3d8iBY4AduLX/GcOo0xKte0gPxcmdGvCCMXhzAQ\nP2oh87CEdYTENwjInK4sezsORNstahDs3KSSWdo2YmOixPF5aSZYeJ2KUjCgKTHI\nT3HZ7jOOElpdjaL0/n1pjvts+99GOoJJN14PIeQVIhbH/OZpOnVxajYXTRujf/rG\nhPKsqU3f46GeQYc/XV+Prgj8p79fuyWt60Wob/UB4q+fdejFCqGRqwS4tYmT/uyP\ngsdQs/1kEa+t5AJ4ZBQDvRna21hjbZhAPhE3w6YbYu1DjoH2xg1L17htCIZSMSs4\nBwWVYZajqw8Yb+sJg6vTrEu7uLJeOhXHMp9jRE/gAQKBgQDZI46FH6P6ZWrpmh2u\nAh2gV2namIzKUZ8Puxe/WlXvz4y9OgNH0mafNHoJPZ7cQKeRYHcrSKdmOpVea7PH\nSOsCdNE0ddHrIz6OF0oQZ2g7CSeu4b2tQ9RmtFYiG4+332bNjsnwwXvHci1QcDD2\nLipQjRPundkYPYsWhfjZXLADpQKBgQDTdobHgEJG2AHQ7OGl8yVw7WbI0/Bep+b/\nZpZ7E+Wl8DmwsCVmMyhDU6TpLCK/U9mD9/4aZuT91ZOrQvLxwJ+zoJjIzXRyhjU4\nBmilkf8zjhXEl1geWop+dlK46hlNlkCzapEgig2YvwJH9e09dl2chdoGzxFkMeMi\ncKLKd2pZUQKBgQCF4KVjsNFydgtIAmygN8+6Z4rtazcLGu3+TfVjVrg7hnUYymbx\nZmk9aaaAggyrcfWe7aIr/ryvjBlCQRd0HKJBPnMqbCZEWtOb2gIhQRCDra5Y5fgD\nlxmjRTcCCoo+7S++N3aMyU6e9ue3e6TEdExEo+cRLSOIDZHvDiUTJ1GivQKBgAbR\nXn0WLIzeMAjNamUQVteyP8sf0jMrFK6NXzKurIvSF/oTY9FMuvKYwstlyeUDThMM\nLtwpDx8EANPXv799p2iCOArZXPTIUPTyd/NGpsTBwv/opUWtQ6PaKsadfZ1bx9BB\nElbLPK79EZTCYBjINTJzuljX2kaxuRIGMal3ei1RAoGBAK8zRDJVFbUL1qPusEqD\n4lma1PTgd8JbCIS5qoOQTk6gtKlB7pjsxOr+JGXKHCHOOqSDmBHjI/dc90NGdF4e\nwl+74++KnzjQRVpwJpGbPsTp4CqcPMcHp7AFl+NFPtvD4jKczu3T8I76UQgk32JR\nQsuVNcxDnipe0vjEdBL62uK/\n-----END PRIVATE KEY-----\n",

  },
}

module.exports = nextConfig
