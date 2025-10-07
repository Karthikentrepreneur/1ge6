import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router";
import BreadCumb from "../Components/Common/BreadCumb";
import ContactMapContainer from "../Components/GlobalPresence/ContactMapContainer";
import ContactSidebar from "../Components/GlobalPresence/ContactSidebar";
import { COUNTRIES } from "../Components/GlobalPresence/countriesData";
import useIsMobile from "../hooks/useIsMobile";
import "../assets/global-presence.css";

const GlobalPresencePage = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const isIndiaPage = useMemo(
    () => location.pathname.toLowerCase().includes("india"),
    [location.pathname]
  );

  const countries = useMemo(() => {
    const filtered = COUNTRIES.filter(
      (country) => !(isIndiaPage && country.code === "pk")
    );
    return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
  }, [isIndiaPage]);

  const [expandedCountry, setExpandedCountry] = useState(
    countries[0]?.code ?? null
  );
  const [selectedCountryCode, setSelectedCountryCode] = useState(
    countries[0]?.code ?? null
  );
  const [selectedCity, setSelectedCity] = useState(
    countries[0]?.cities?.[0] ?? null
  );
  const [mobileView, setMobileView] = useState("sidebar");

  useEffect(() => {
    if (countries.length) {
      setExpandedCountry(countries[0].code);
      setSelectedCountryCode(countries[0].code);
      setSelectedCity(countries[0].cities[0]);
    }
  }, [countries]);

  useEffect(() => {
    if (!isMobile) {
      setMobileView("combined");
    } else if (mobileView === "combined") {
      setMobileView("sidebar");
    }
  }, [isMobile, mobileView]);

  const handleToggleCountry = (code) => {
    setExpandedCountry((prev) => (prev === code ? null : code));
  };

  const handleSelectCity = (countryCode, city) => {
    setSelectedCountryCode(countryCode);
    setSelectedCity(city);
  };

  const coordinates = useMemo(() => {
    if (selectedCity) {
      return {
        lat: selectedCity.lat,
        lng: selectedCity.lng,
        zoom: 11,
      };
    }
    const fallbackCountry = countries.find((item) => item.code === selectedCountryCode);
    if (fallbackCountry) {
      return { lat: fallbackCountry.lat, lng: fallbackCountry.lng, zoom: 5 };
    }
    return { lat: 1.3521, lng: 103.8198, zoom: 3 };
  }, [countries, selectedCity, selectedCountryCode]);

  return (
    <div className="global-presence-page">
      <BreadCumb
        bgimg="/assets/img/breadcrumb/breadcrumb.jpg"
        Title="Global Presence"
      />
      <section className="global-presence-hero">
        <div className="container">
          <div className="global-presence-intro">
            <h1>Our Global Network</h1>
            <p>
            
            </p>
          </div>
        </div>
      </section>

      {isMobile && (
        <div className="global-mobile-toggle">
          <button
            type="button"
            className={mobileView === "sidebar" ? "active" : ""}
            onClick={() => setMobileView("sidebar")}
          >
            Locations
          </button>
          <button
            type="button"
            className={mobileView === "map" ? "active" : ""}
            onClick={() => setMobileView("map")}
          >
            Map
          </button>
        </div>
      )}

      <section className="global-presence-layout">
        <div
          className={`global-map-section${
            isMobile && mobileView !== "map" ? " hidden-mobile" : ""
          }`}
        >
          <ContactMapContainer
            coordinates={coordinates}
            selectedCity={selectedCity}
          />
        </div>
        <div
          className={`global-sidebar-section${
            isMobile && mobileView !== "sidebar" ? " hidden-mobile" : ""
          }`}
        >
          <ContactSidebar
            countries={countries}
            expandedCountry={expandedCountry}
            onToggleCountry={handleToggleCountry}
            onSelectCity={handleSelectCity}
            selectedCity={selectedCity}
            selectedCountryCode={selectedCountryCode}
          />
        </div>
      </section>
    </div>
  );
};

export default GlobalPresencePage;
