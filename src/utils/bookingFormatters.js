/**
 * Standardized date and time formatting utilities for booking displays
 * Ensures consistent formatting across all booking-related pages
 */

/**
 * Formats a date string (ISO format) to "Nov 12, 2025" format
 * @param {string|Date} isoString - ISO date string or Date object
 * @returns {string} Formatted date string or "N/A" if invalid
 */
export const formatBookingDate = (isoString) => {
  if (!isoString) return "N/A";
  
  try {
    const date = isoString instanceof Date ? isoString : new Date(isoString);
    
    if (Number.isNaN(date.getTime())) {
      return "N/A";
    }
    
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch (error) {
    console.error("Date formatting error:", error, isoString);
    return "N/A";
  }
};

/**
 * Formats a time string (ISO format) to "2:30 PM" format (12-hour)
 * @param {string|Date} isoString - ISO datetime string or Date object
 * @returns {string} Formatted time string or "N/A" if invalid
 */
export const formatBookingTime = (isoString) => {
  if (!isoString) return "N/A";
  
  try {
    const date = isoString instanceof Date ? isoString : new Date(isoString);
    
    if (Number.isNaN(date.getTime())) {
      return "N/A";
    }
    
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  } catch (error) {
    console.error("Time formatting error:", error, isoString);
    return "N/A";
  }
};

/**
 * Formats a time range from start and end ISO strings to "2:30 PM - 4:00 PM" format
 * @param {string|Date} start - ISO datetime string or Date object for start time
 * @param {string|Date} end - ISO datetime string or Date object for end time
 * @returns {string} Formatted time range or "N/A" if invalid
 */
export const formatBookingTimeRange = (start, end) => {
  const startTime = formatBookingTime(start);
  const endTime = formatBookingTime(end);
  
  if (startTime === "N/A" && endTime === "N/A") {
    return "N/A";
  }
  
  if (startTime === "N/A") {
    return endTime;
  }
  
  if (endTime === "N/A") {
    return startTime;
  }
  
  return `${startTime} - ${endTime}`;
};

/**
 * Helper function to extract and format date/time from a booking object
 * Handles different booking object structures
 * @param {Object} booking - Booking object with date and timeslot properties
 * @returns {Object} Object with formatted date and time range
 */
export const formatBookingDateTime = (booking) => {
  if (!booking) {
    return {
      date: "N/A",
      timeRange: "N/A",
    };
  }
  
  // Extract date - prefer timeslot.start, fallback to booking.date
  const dateValue = booking?.timeslot?.start || booking?.date;
  const formattedDate = formatBookingDate(dateValue);
  
  // Extract time range
  const start = booking?.timeslot?.start;
  const end = booking?.timeslot?.end;
  const formattedTimeRange = formatBookingTimeRange(start, end);
  
  return {
    date: formattedDate,
    timeRange: formattedTimeRange,
  };
};

