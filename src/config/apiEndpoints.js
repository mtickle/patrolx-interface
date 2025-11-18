// src/config/apiEndpoints.js

export const ENDPOINTS = {
    CALLS: {
        GET_ALL: "getAllCalls",
        COUNTS_BY_DAY: "getCallCountsByDayOfWeek",
        COUNTS_BY_TYPE: "getCallCountsByType", // Guessing you have this
    },
    INCIDENTS: {
        GET_ALL: "getIncidents", // Based on your route names
    },
    TRAFFIC: {
        STOPS: "getTrafficStops",
        CRASHES: "getCrashLocations",
    },
    ROADS: {
        INCIDENTS: "getRoadIncidents",
    },
    // Add the rest here as you find them
};