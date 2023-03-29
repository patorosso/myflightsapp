export const API_KEYS_MAP = 'AIzaSyA5-NodWlPPJw82cCKpKYKHAZx0xYD4UFw';

export const URL_MAPS = (
    lat,
    lng,
    zoom = 14
) => `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=600x300&maptype=roadmap
&markers=color:blue%7Clabel:S%7C${lat},${lng}&key=${API_KEY_MAPS}`