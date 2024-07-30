// src/utils/findNearbyAgents.js

import agents from '../data/agents';

const haversineDistance = (coords1, coords2) => {
  const toRad = (x) => (x * Math.PI) / 180;

  const R = 6371; // Earth radius in km
  const dLat = toRad(coords2.lat - coords1.lat);
  const dLon = toRad(coords2.lng - coords1.lng);
  const lat1 = toRad(coords1.lat);
  const lat2 = toRad(coords2.lat);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;

  return d;
};

const findNearbyAgents = (propertyLocation, radius = 50) => {
  return agents.filter((agent) => {
    const distance = haversineDistance(propertyLocation, agent.location);
    return distance <= radius;
  });
};

export default findNearbyAgents;
