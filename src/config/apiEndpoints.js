// src/config/apiEndpoints.js

export const ENDPOINTS = {
    CALLS: {
        GET_ALL: "getAllCalls",
        COUNTS_BY_DAY: "getCallCountsByDayOfWeek",
        COUNTS_BY_TYPE: "getCallCountsByIncident",
        COUNTS_BY_AGENCY: "getCallCountsByAgency",
        COUNTS_BY_HOUR: "getCallCountsByHour"
    },
    INCIDENTS: {
        COUNTS_BY_DISTRICT: "getIncidentCountsByDistrict",
        COUNTS_BY_DAY: "getIncidentCountsByDayOfWeek",
        COUNTS_BY_HOUR: "getIncidentCountsByHour",
        COUNTS_BY_TYPE: "getincidentcountsbytype"

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