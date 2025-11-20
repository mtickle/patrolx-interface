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
        COUNTS_BY_DESCRIPTION: "getTrafficStopDescriptionCounts",
        COUNTS_BY_GENDER: "getTrafficStopGenderCounts",
        COUNTS_BY_MAKE: "getTrafficStopMakeCounts",
        COUNTS_BY_RACE: "getTrafficStopRaceCounts"
    },
    CRASHES: {
        COUNTS_BY_TYPE: "getCrashTypeCounts",
        COUNTS_BY_LOCATION: "getCrashesByLocation"
    },
    // Add the rest here as you find them
};