import { useNavigate } from 'react-router-dom';
import { useGetCurrentUserQuery } from '../store/apiSlice';

/**
 * Custom hook to check authentication and redirect to login if not authenticated
 * @returns {Object} { requireAuth: Function, isAuthenticated: boolean }
 */
export const useAuthRedirect = () => {
  const navigate = useNavigate();
  
  // Get user from API with localStorage fallback
  const { data, isLoading } = useGetCurrentUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  // Get user from API or fallback to localStorage
  const getStoredUser = () => {
    try {
      const stored = localStorage.getItem('user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  };

  const user = data?.user || getStoredUser();
  const isAuthenticated = !!user && !isLoading;

  /**
   * Check if user is authenticated, redirect to login if not
   * @returns {boolean} true if authenticated, false otherwise
   */
  const requireAuth = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return false;
    }
    return true;
  };

  return { requireAuth, isAuthenticated };
};

