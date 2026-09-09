# Purabi Insurance API

MongoDB + Node.js + Express.js backend for the Purabi Insurance frontend.

## Install
```bash
npm install
```

## Environment
Copy `.env.example` to `.env` and set your MongoDB URI and JWT secret.

## Run
```bash
npm run dev
```
Production:
```bash
npm start
```

API base URL: `http://localhost:5000/api`

## Authentication
Register: `POST /api/auth/register`
Verify OTP: `POST /api/auth/verify-otp`
Resend OTP: `POST /api/auth/resend-otp`
Login: `POST /api/auth/login`
Current user: `GET /api/auth/me`

In development, OTP is printed in the terminal and returned as `developmentOtp`. Replace `utils/sendOTP.js` with your real email/SMS provider for production.

## Frontend integration
Send the JWT returned by login/verify in:
`Authorization: Bearer YOUR_TOKEN`

The API includes customer, agent and admin role protection for quotes, claims, policies, blogs, contact messages and agent profiles.

## Sample blogs
After MongoDB is connected:
```bash
npm run seed:blogs
```

No `.env` or `node_modules` is included in this package.
