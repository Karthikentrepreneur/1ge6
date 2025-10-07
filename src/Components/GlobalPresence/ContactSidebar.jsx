import { useMemo } from "react";
import { MapPin, Phone, Mail, Home, ChevronRight, Globe } from "lucide-react";

const formatContacts = (contacts = []) =>
  contacts.filter(Boolean).join(" \u2022 ");

const ContactSidebar = ({
  countries,
  expandedCountry,
  onToggleCountry,
  onSelectCity,
  selectedCity,
  selectedCountryCode,
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

          return (
            <div className="global-country" key={country.code}>
              <button
                type="button"
                className={`global-country-trigger${
                  isExpanded ? " expanded" : ""
                }${isSelectedCountry ? " is-selected" : ""}`}
                onClick={() => onToggleCountry(country.code)}
              >
                <span className="global-country-name">{country.name}</span>
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
                          className={`global-city-button${
                            isActive ? " active" : ""
                          }`}
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
