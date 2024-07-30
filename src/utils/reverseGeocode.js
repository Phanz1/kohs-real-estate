// src/utils/reverseGeocode.js

export const reverseGeocode = async (lat, lng) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error reverse geocoding:', error);
      return null;
    }
  };
  