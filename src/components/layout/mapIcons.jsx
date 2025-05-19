// src/lib/mapIcons.js
import L from 'leaflet';

import redIconImg from '@/components/layout/map_markers/red-24.png';
import yellowIconImg from '@/components/layout/map_markers/yellow-24.png';
import blueIconImg from '@/components/layout/map_markers/blue-24.png';
import greenIconImg from '@/components/layout/map_markers/green-24.png';

// Central icon factory to keep icon styling consistent
const createIcon = (iconUrl) =>
    L.icon({
        iconUrl,
        iconSize: [24, 24],      // width, height
        iconAnchor: [12, 24],    // point of the icon which will correspond to marker's location
        popupAnchor: [0, -24],   // point from which the popup should open relative to the iconAnchor
    });

// Exporting all icons for reuse
export const mapIcons = {
    red: createIcon(redIconImg),
    yellow: createIcon(yellowIconImg),
    blue: createIcon(blueIconImg),
    green: createIcon(greenIconImg),
};
