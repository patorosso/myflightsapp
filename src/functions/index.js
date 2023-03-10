export function getRotation(flightLatitude,flightLongitude,airportLatitude,airportLongitude) {
    // helper function to convert degrees to radians
    function toRadians(degrees) {
      return degrees * Math.PI / 180;
    }
    // helper function to convert radians to degrees
    function toDegrees(radians) {
      return radians * 180 / Math.PI;
    }
    const radLat1 = toRadians(flightLatitude);
    const radLong1 = toRadians(flightLongitude);
    const radLat2 = toRadians(airportLatitude);
    const radLong2 = toRadians(airportLongitude);
    const deltaLong = radLong2 - radLong1;
    const y = Math.sin(deltaLong) * Math.cos(radLat2);
    const x = Math.cos(radLat1) * Math.sin(radLat2) - Math.sin(radLat1) * Math.cos(radLat2) * Math.cos(deltaLong);
    const bearing = toDegrees(Math.atan2(y, x));
    const rotation = 90 - bearing;
    // round the rotation value to 2 decimal places
    const roundedRotation = parseFloat(rotation.toFixed(2));
  
    return roundedRotation;
  }

  