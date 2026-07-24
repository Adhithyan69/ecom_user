import React, { lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import useAuthStore from "./store/useAuthStore";

// Layout
import Layout from "./components/layout/Layout";
import ProtectedRoute from "./routes/ProtectedRoute";

// Static Import (Fast Initial Load)
import Home from "./pages/Home";

/* ===========================
   Lazy Loaded Pages
=========================== */

// Public Pages
const Category = lazy(() => import("./pages/Category"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Cart = lazy(() => import("./pages/Cart"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const Offers = lazy(() => import("./pages/Offers"));
const Support = lazy(() => import("./pages/Support"));
const Notifications = lazy(() => import("./pages/Notifications"));
const Checkout = lazy(() => import("./pages/Checkout"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Authentication Pages
const Login = lazy(() => import("./pages/auth/Login"));
const Signup = lazy(() => import("./pages/auth/Signup"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));

// Protected User Pages
const Dashboard = lazy(() => import("./pages/user/Dashboard"));
const Orders = lazy(() => import("./pages/user/Orders"));
const OrderDetails = lazy(() => import("./pages/user/OrderDetails"));
const Invoice = lazy(() => import("./pages/user/Invoice"));
const Inbox = lazy(() => import("./pages/user/Inbox"));
const Addresses = lazy(() => import("./pages/user/Addresses"));
const Complaints = lazy(() => import("./pages/user/Complaints"));

/* ===========================
   Auth Redirect
=========================== */

const AuthRouteRedirect = ({ children }) => {
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) {
    return <Navigate to="/user/dashboard" replace />;
  }

  return children;
};

/* ===========================
   App
=========================== */

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          <Route index element={<Home />} />
          <Route path="category/:categoryId" element={<Category />} />
          <Route path="product/:productId" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="offers" element={<Offers />} />
          <Route path="support" element={<Support />} />
          <Route path="notifications" element={<Notifications />} />

          {/* Authentication Routes */}
          <Route
            path="auth/login"
            element={
              <AuthRouteRedirect>
                <Login />
              </AuthRouteRedirect>
            }
          />

          <Route
            path="auth/signup"
            element={
              <AuthRouteRedirect>
                <Signup />
              </AuthRouteRedirect>
            }
          />

          <Route
            path="auth/forgot-password"
            element={
              <AuthRouteRedirect>
                <ForgotPassword />
              </AuthRouteRedirect>
            }
          />

          {/* Protected Routes */}
          <Route
            path="checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />

          <Route
            path="user/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="user/orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />

          <Route
            path="user/orders/:orderId"
            element={
              <ProtectedRoute>
                <OrderDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="user/orders/:orderId/invoice"
            element={
              <ProtectedRoute>
                <Invoice />
              </ProtectedRoute>
            }
          />

          <Route
            path="user/inbox"
            element={
              <ProtectedRoute>
                <Inbox />
              </ProtectedRoute>
            }
          />

          <Route
            path="user/addresses"
            element={
              <ProtectedRoute>
                <Addresses />
              </ProtectedRoute>
            }
          />

          <Route
            path="user/complaints"
            element={
              <ProtectedRoute>
                <Complaints />
              </ProtectedRoute>
            }
          />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;