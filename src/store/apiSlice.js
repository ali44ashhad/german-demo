import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5010/api';

// Base query with credentials for cookies
const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  credentials: 'include', // Important for cookies
  prepareHeaders: (headers, { getState }) => {
    // You can add auth headers here if needed
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['User', 'Service', 'Booking', 'ZoomSession'],
  endpoints: (builder) => ({
    // ==================== AUTH ENDPOINTS ====================
    register: builder.mutation({
      query: (userData) => ({
        url: '/users/auth/register',
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['User'],
    }),

    login: builder.mutation({
      query: (credentials) => ({
        url: '/users/auth/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['User'],
    }),

    logout: builder.mutation({
      query: () => ({
        url: '/users/auth/logout',
        method: 'POST',
      }),
      invalidatesTags: ['User'],
    }),

    getCurrentUser: builder.query({
      query: () => '/users/auth/me',
      providesTags: ['User'],
    }),

    // ==================== USER ENDPOINTS ====================
    getAllUsers: builder.query({
      query: ({ page = 1, limit = 10, role, search } = {}) => ({
        url: '/users/users',
        params: { page, limit, role, search },
      }),
      providesTags: ['User'],
    }),

    getUserById: builder.query({
      query: (id) => `/users/users/${id}`,
      providesTags: (result, error, id) => [{ type: 'User', id }],
    }),

    updateUser: builder.mutation({
      query: ({ id, ...userData }) => ({
        url: `/users/users/${id}`,
        method: 'PUT',
        body: userData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'User', id }, 'User'],
    }),

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['User'],
    }),

    // ==================== SERVICE ENDPOINTS ====================
    getAllServices: builder.query({
      query: ({ page = 1, limit = 10, isActive, search } = {}) => ({
        url: '/services/services',
        params: { page, limit, isActive, search },
      }),
      providesTags: ['Service'],
    }),

    getServiceById: builder.query({
      query: (id) => `/services/services/${id}`,
      providesTags: (result, error, id) => [{ type: 'Service', id }],
    }),

    createService: builder.mutation({
      query: (serviceData) => ({
        url: '/services/services',
        method: 'POST',
        body: serviceData,
      }),
      invalidatesTags: ['Service'],
    }),

    updateService: builder.mutation({
      query: ({ id, ...serviceData }) => ({
        url: `/services/services/${id}`,
        method: 'PUT',
        body: serviceData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Service', id }, 'Service'],
    }),

    deleteService: builder.mutation({
      query: (id) => ({
        url: `/services/services/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Service'],
    }),

    // ==================== BOOKING ENDPOINTS ====================
    getAllBookings: builder.query({
      query: ({ page = 1, limit = 10, status, userId, subAdminId, serviceId, search } = {}) => ({
        url: '/bookings/bookings',
        params: { page, limit, status, userId, subAdminId, serviceId, search },
      }),
      providesTags: ['Booking'],
    }),

    getBookingById: builder.query({
      query: (id) => `/bookings/bookings/${id}`,
      providesTags: (result, error, id) => [{ type: 'Booking', id }],
    }),

    createBooking: builder.mutation({
      query: (bookingData) => ({
        url: '/bookings/bookings',
        method: 'POST',
        body: bookingData,
      }),
      invalidatesTags: ['Booking'],
    }),

    updateBooking: builder.mutation({
      query: ({ id, ...bookingData }) => ({
        url: `/bookings/bookings/${id}`,
        method: 'PUT',
        body: bookingData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Booking', id }, 'Booking'],
    }),

    deleteBooking: builder.mutation({
      query: (id) => ({
        url: `/bookings/bookings/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Booking'],
    }),

    // ==================== ZOOM SESSION ENDPOINTS ====================
    getAllZoomSessions: builder.query({
      query: ({ page = 1, limit = 10, status, bookingId, search } = {}) => ({
        url: '/zoom-sessions/zoom-sessions',
        params: { page, limit, status, bookingId, search },
      }),
      providesTags: ['ZoomSession'],
    }),

    getZoomSessionById: builder.query({
      query: (id) => `/zoom-sessions/zoom-sessions/${id}`,
      providesTags: (result, error, id) => [{ type: 'ZoomSession', id }],
    }),

    createZoomSession: builder.mutation({
      query: (sessionData) => ({
        url: '/zoom-sessions/zoom-sessions',
        method: 'POST',
        body: sessionData,
      }),
      invalidatesTags: ['ZoomSession', 'Booking'],
    }),

    updateZoomSession: builder.mutation({
      query: ({ id, ...sessionData }) => ({
        url: `/zoom-sessions/zoom-sessions/${id}`,
        method: 'PUT',
        body: sessionData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'ZoomSession', id }, 'ZoomSession'],
    }),

    deleteZoomSession: builder.mutation({
      query: (id) => ({
        url: `/zoom-sessions/zoom-sessions/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['ZoomSession'],
    }),

    // ==================== WEBHOOK ENDPOINTS ====================
    handleWebhook: builder.mutation({
      query: (webhookData) => ({
        url: '/zoom/webhook',
        method: 'POST',
        body: webhookData,
      }),
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  // Auth hooks
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useGetCurrentUserQuery,
  // User hooks
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
  // Service hooks
  useGetAllServicesQuery,
  useGetServiceByIdQuery,
  useCreateServiceMutation,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
  // Booking hooks
  useGetAllBookingsQuery,
  useGetBookingByIdQuery,
  useCreateBookingMutation,
  useUpdateBookingMutation,
  useDeleteBookingMutation,
  // Zoom Session hooks
  useGetAllZoomSessionsQuery,
  useGetZoomSessionByIdQuery,
  useCreateZoomSessionMutation,
  useUpdateZoomSessionMutation,
  useDeleteZoomSessionMutation,
  // Webhook hooks
  useHandleWebhookMutation,
} = apiSlice;

