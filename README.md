# Ghar ka Khana – Hyperlocal Homemade Food Marketplace

*Connecting you to authentic homemade meals from verified kitchens in your neighborhood.*

## Introduction

Ghar ka Khana is a hyperlocal marketplace mobile application designed to bridge the gap between busy urban consumers and local home chefs/tiffin services. It solves the daily dilemma of finding healthy, affordable, and convenient homemade food by leveraging geo-location to discover verified kitchens nearby. For home chefs, it provides a structured platform to monetize their culinary skills, manage their business, and build a loyal customer base, all with a focus on building trust through a rigorous verification process.

## Key Features

### For Customers
*   **Geo-location Search:** Discover kitchens and meal options available near your current location.
*   **Advanced Filtering:** Filter kitchens by dietary preference (Veg/Non-Veg), cuisine type, price range, and ratings.
*   **Flexible Ordering:** Place one-time trial orders or subscribe to convenient weekly/monthly meal plans.
*   **Real-time Order Tracking:** Track your order from confirmation to preparation to delivery.
*   **Trust & Reviews:** Make informed decisions based on user reviews, ratings, and visible "FSSAI Verified" badges.

### For Kitchen Providers (Home Chefs)
*   **Secure Onboarding:** A streamlined process to register and get verified by submitting necessary documents for simulated FSSAI approval.
*   **Management Dashboard:** Manage your menu, update daily specials, set availability, and control order capacity.
*   **Order & Earnings Management:** Easily accept or reject incoming orders and track your earnings and subscription cycles.
*   **Profile Customization:** Build your brand with a customizable profile showcasing your food photos and specialties.

### For Administrators
*   **Web-based Admin Panel:** A centralized dashboard to manage the entire platform.
*   **Kitchen Verification:** Review and approve/revoke kitchen registrations and uploaded documents.
*   **Dispute Resolution:** Handle customer and provider disputes efficiently.
*   **Platform Analytics:** View insights into orders, revenue, user growth, and other key metrics.

## Tech Stack & Architecture

This project follows a client-server architecture. The Flutter mobile app (client) communicates with a Node.js backend via a RESTful API. The backend handles business logic, authentication, and interacts with the database and third-party services.

*   **Frontend (Mobile):** Flutter (Dart)
*   **Backend (Server):** Node.js, Express.js
*   **Database:** MongoDB with Mongoose ODM
*   **Cloud Storage:** AWS S3 (for user uploads, meal images, and documents)
*   **APIs & Services:**
    *   Google Maps API / Geolocation (for location services)
    *   Razorpay API (for payment processing)
    *   Firebase Cloud Messaging (FCM) (for push notifications)
*   **Environment Variables:** Managed using `dotenv`

## Screenshots & Demo

*Screenshots will be added after the UI is finalized.*

| Login & Onboarding | Home & Search | Kitchen Profile |
| :---: | :---: | :---: |
| *[Screenshot will be placed here]* | *[Screenshot will be placed here]* | *[Screenshot will be placed here]* |

| Order Tracking | Admin Panel | Chef Dashboard |
| :---: | :---: | :---: |
| *[Screenshot will be placed here]* | *[Screenshot will be placed here]* | *[Screenshot will be placed here]* |

*A link to a video demo will be provided here.*

## Local Development Setup

Follow these steps to set up the project for development on your local machine.

### Prerequisites
*   **Flutter SDK:** (Latest stable version) [Install Guide](https://docs.flutter.dev/get-started/install)
*   **Node.js & npm:** (v16 or higher) [Download Node.js](https://nodejs.org/)
*   **MongoDB:** (Local instance or MongoDB Atlas cloud URI)
*   **Git**

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Akshit5291/ghar-ka-khana.git
    cd ghar-ka-khana
    ```

2.  **Backend Setup:**
    ```bash
    # Navigate to the backend directory
    cd server

    # Install all dependencies
    npm install

    # Create a .env file from the provided template and configure your variables
    cp .env.example .env
    # Now edit the .env file with your actual values (database URI, API keys, etc.)

    # Start the development server
    npm run dev
    ```
    The backend server should now be running on `http://localhost:3000` (or your specified `PORT`).

3.  **Frontend (Flutter App) Setup:**
    ```bash
    # Open a new terminal and navigate to the mobile app directory from the project root
    cd mobile_app

    # Install the Flutter dependencies (packages)
    flutter pub get

    # (Optional) Generate platform-specific files if needed
    flutter pub run build_runner build --delete-conflicting-outputs

    # Run the app on a connected device/emulator
    flutter run
    ```

### Environment Variables (.env.example)

Create a `.env` file in the `server/` directory using the following template:

```ini
# Server
NODE_ENV=development
PORT=3000

# Database
MONGODB_URI=your_mongodb_connection_string_here

# JWT Secret
JWT_SECRET=your_super_secret_jwt_key_here

# AWS S3 Configuration
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_S3_BUCKET_NAME=your_bucket_name
AWS_REGION=ap-south-1

# API Keys
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
GOOGLE_MAPS_API_KEY=your_google_maps_api_key