import { useMemo } from "react";
import { MapPin, Phone, Mail, Home, ChevronRight, Globe } from "lucide-react";

const FALLBACK_FLAG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='18' viewBox='0 0 24 18'%3E%3Crect width='24' height='18' rx='3' fill='%23E2E8F0'/%3E%3Cpath d='M12 5.25c1.794 0 3.25 1.456 3.25 3.25S13.794 11.75 12 11.75 8.75 10.294 8.75 8.5 10.206 5.25 12 5.25Z' fill='%2328A8CB'/%3E%3C/svg%3E";

const buildCountryFlagAsset = (code = "") => {
  if (typeof code !== "string" || code.length !== 2) {
    return { src: FALLBACK_FLAG, srcSet: undefined };
  }

  const normalized = code.toLowerCase();
  return {
    src: `https://flagcdn.com/w24/${normalized}.png`,
    srcSet: `https://flagcdn.com/w48/${normalized}.png 2x`,
  };
};

const handleFlagError = (event) => {
  event.currentTarget.onerror = null;
  event.currentTarget.src = FALLBACK_FLAG;
  event.currentTarget.removeAttribute("srcset");
};

const formatContacts = (contacts = []) => contacts.filter(Boolean).join(" \u2022 ");

// Compute center & bounds for a country's city list
const getCountryView = (country) => {
  const cities = country?.cities ?? [];
  if (!cities.length) return null;

  let minLat = 90, maxLat = -90, minLng = 180, maxLng = -180;

  cities.forEach((c) => {
    if (typeof c.lat === "number" && typeof c.lng === "number") {
      minLat = Math.min(minLat, c.lat);
      maxLat = Math.max(maxLat, c.lat);
      minLng = Math.min(minLng, c.lng);
      maxLng = Math.max(maxLng, c.lng);
    }
  });

  const center = {
    lat: (minLat + maxLat) / 2,
    lng: (minLng + maxLng) / 2,
  };

  // crude span-based zoom suggestion (tweak in parent if you like)
  const latSpan = Math.max(0.00001, maxLat - minLat);
  const lngSpan = Math.max(0.00001, maxLng - minLng);
  const span = Math.max(latSpan, lngSpan);

  // Rough mapping span -> zoom (smaller span => closer zoom)
  // Feel free to tune these thresholds for your map.
  let suggestedZoom = 4;
  if (span < 0.05) suggestedZoom = 12;
  else if (span < 0.1) suggestedZoom = 11;
  else if (span < 0.2) suggestedZoom = 10;
  else if (span < 0.4) suggestedZoom = 9;
  else if (span < 0.8) suggestedZoom = 8;
  else if (span < 1.6) suggestedZoom = 7;
  else if (span < 3.2) suggestedZoom = 6;
  else if (span < 6.4) suggestedZoom = 5;
  else suggestedZoom = 4;

  const bounds = { minLat, maxLat, minLng, maxLng };
  return { center, bounds, suggestedZoom };
};

const ContactSidebar = ({
  countries,
  expandedCountry,
  onToggleCountry,
  onSelectCity,
  selectedCity,
  selectedCountryCode,
  // NEW: called when user clicks a country (so you can move the map)
  onFocusCountry, // (payload: { center, bounds, suggestedZoom, country }) => void
}) => {
  const selectedCityKey = selectedCity ? `${selectedCity.name}-${selectedCity.lat}-${selectedCity.lng}` : "";

  const emptyState = useMemo(
    () => !countries || countries.length === 0,
    [countries]
  );

  if (emptyState) {
    return (
      <div className="global-sidebar-card">
        <div className="global-sidebar-header">
          <Globe size={18} />
          <h3>Global Locations</h3>
        </div>
        <div className="global-sidebar-empty">
          <p>Location data is currently unavailable. Please try again later.</p>
        </div>
      </div>
    );
  }

  const handleCountryClick = (country) => {
    // Expand/collapse as before
    onToggleCountry?.(country.code);

    // NEW: also move the map to a country-level view
    if (typeof onFocusCountry === "function") {
      const view = getCountryView(country);
      if (view) {
        onFocusCountry({ ...view, country });
      } else {
        // Fallback: if no cities, do nothing; or you could choose a default zoom
      }
    }
  };

  return (
    <div className="global-sidebar-card">
      <div className="global-sidebar-header">
        <Globe size={18} />
        <h3>Global Locations</h3>
      </div>
      <div className="global-sidebar-content">
        {countries.map((country) => {
          const isExpanded = expandedCountry === country.code;
          const isSelectedCountry = selectedCountryCode === country.code;
          const flagAsset = buildCountryFlagAsset(country.code);

          return (
            <div className="global-country" key={country.code}>
              <button
                type="button"
                className={`global-country-trigger${isExpanded ? " expanded" : ""}${isSelectedCountry ? " is-selected" : ""}`}
                onClick={() => handleCountryClick(country)}
                aria-expanded={isExpanded}
              >
                <span className="global-country-identity">
                  <img
                    className="global-country-flag"
                    src={flagAsset.src}
                    srcSet={flagAsset.srcSet}
                    loading="lazy"
                    decoding="async"
                    alt={`${country.name} flag`}
                    onError={handleFlagError}
                  />
                  <span className="global-country-name">{country.name}</span>
                </span>
                <ChevronRight className="global-country-icon" size={18} />
              </button>

              {isExpanded && (
                <div className="global-city-list">
                  {country.cities.map((city) => {
                    const cityKey = `${city.name}-${city.lat}-${city.lng}`;
                    const isActive = cityKey === selectedCityKey;
                    return (
                      <div className="global-city-item" key={cityKey}>
                        <button
                          type="button"
                          className={`global-city-button${isActive ? " active" : ""}`}
                          onClick={() => onSelectCity(country.code, city)}
                        >
                          <MapPin size={16} />
                          <span>{city.name}</span>
                        </button>

                        {isActive && (
                          <div className="global-city-details">
                            {city.address && (
                              <div className="global-city-detail-row">
                                <Home size={16} />
                                <p>{city.address}</p>
                              </div>
                            )}
                            {city.contacts && city.contacts.length > 0 && (
                              <div className="global-city-detail-row">
                                <Phone size={16} />
                                <p>{formatContacts(city.contacts)}</p>
                              </div>
                            )}
                            {city.email && (
                              <div className="global-city-detail-row">
                                <Mail size={16} />
                                <a href={`mailto:${city.email}`}>{city.email}</a>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactSidebar;
