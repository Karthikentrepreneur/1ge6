// in parent component
const [coordinates, setCoordinates] = useState({ lat: 20.5937, lng: 78.9629, zoom: 4 }); // default to India-ish view

const handleFocusCountry = ({ center, suggestedZoom /*, bounds, country */ }) => {
  setCoordinates({
    lat: center.lat,
    lng: center.lng,
    zoom: suggestedZoom ?? 4,
  });
};

// ...
<ContactSidebar
  countries={countries}
  expandedCountry={expandedCountry}
  onToggleCountry={setExpandedCountry}
  onSelectCity={(code, city) => setCoordinates({ lat: city.lat, lng: city.lng, zoom: city.zoom ?? 12 })}
  selectedCity={selectedCity}
  selectedCountryCode={selectedCountryCode}
  onFocusCountry={handleFocusCountry}   // 👈 NEW
/>
<ContactMapContainer coordinates={coordinates} /* ...other props */ />
