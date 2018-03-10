import GoogleMaps from '@google/maps';

const googleMapsClient = GoogleMaps.createClient({ key: '' });

class Geo {
  geoCode (address) {
    return new Promise (( resolve , reject ) => {
      return googleMapsClient.geocode(
        { 'address': address },
        ( err , response ) => {
          if (!err) {
            return resolve(response.json.results);
          } else {
            return reject(err);
          }
        });
    });
  };
};

const GeoService = new Geo();

export default GeoService;
