import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';
import { useVerifyEmailMutation } from '../store/apiSlice';

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  
  const [verifyEmail] = useVerifyEmailMutation();
  const [status, setStatus] = useState('verifying'); // 'verifying', 'success', 'error'
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!token) {
      setStatus('error');
      setMessage('No verification token provided in the URL.');
      return;
    }

    const verifyToken = async () => {
      try {
        const response = await verifyEmail({ token }).unwrap();
        setStatus('success');
        setMessage(response.message || 'Your email has been verified successfully!');
      } catch (err) {
        setStatus('error');
        setMessage(err.data?.message || err.message || 'Verification failed or link expired.');
      }
    };

    verifyToken();
  }, [token, verifyEmail]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-50 py-20 px-4 sm:px-6 lg:px-8 relative flex items-center justify-center">
      <div className="max-w-md w-full mx-auto">
        <motion.div
          className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {status === 'verifying' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-8"
            >
              <motion.div
                className="w-16 h-16 border-4 border-green-200 border-t-green-600 rounded-full mx-auto mb-6"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Verifying your email</h3>
              <p className="text-gray-600">Please wait while we verify your account...</p>
            </motion.div>
          )}

          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8"
            >
              <motion.div
                className="w-20 h-20 bg-gradient-to-r from-green-600 to-sky-600 rounded-full flex items-center justify-center mx-auto mb-6"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Verified!</h3>
              <p className="text-gray-700 mb-8">{message}</p>
              <Link
                to="/login"
                className="inline-block w-full bg-gradient-to-r from-green-600 to-sky-600 text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-green-600/25 transition-all"
              >
                Go to Login
              </Link>
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8"
            >
              <motion.div
                className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <AlertCircle className="w-10 h-10 text-red-600" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Verification Failed</h3>
              <p className="text-red-700 mb-8">{message}</p>
              <Link
                to="/home"
                className="inline-flex items-center gap-2 justify-center w-full border border-gray-300 text-gray-700 font-bold py-3 px-6 rounded-xl hover:bg-gray-50 transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default VerifyEmail;
