import { useEffect, useState } from "react";
import { RefreshCw, Maximize2, Minimize2 } from "lucide-react";

const MAP_BASE_URL =
  "https://www.google.com/maps/d/u/0/embed?mid=1rF5337I7j7xk98at6ZPdMul4aglzrLg&hl=en&ehbc=2E312F";

const ContactMapContainer = ({
  coordinates,
  selectedCity,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [mapVersion, setMapVersion] = useState(0);

  const { lat, lng, zoom } = coordinates;

  useEffect(() => {
    setIsLoaded(false);
    setMapVersion((prev) => prev + 1);
  }, [lat, lng, zoom]);

  const mapUrl = `${MAP_BASE_URL}&z=${zoom}&ll=${lat},${lng}`;

  const handleReload = () => {
    setIsLoaded(false);
    setMapVersion((prev) => prev + 1);
  };

  return (
    <div className={`global-map-card${isFullScreen ? " fullscreen" : ""}`}>
      <div className="global-map-header">
        <div>
          <h3>Interactive Global Presence Map</h3>
          {selectedCity && (
            <p>
              Viewing: <span>{selectedCity.name}</span>
            </p>
          )}
        </div>
        <div className="global-map-actions">
          <button type="button" onClick={handleReload} aria-label="Reload map">
            <RefreshCw size={16} />
            <span>Refresh</span>
          </button>
          <button
            type="button"
            onClick={() => setIsFullScreen((prev) => !prev)}
            aria-label={isFullScreen ? "Exit full screen" : "Enter full screen"}
          >
            {isFullScreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            <span>{isFullScreen ? "Compact" : "Expand"}</span>
          </button>
        </div>
      </div>
      <div className="global-map-frame">
        {!isLoaded && (
          <div className="global-map-loading">
            <div className="spinner" />
            <p>Loading map...</p>
          </div>
        )}
        <iframe
          key={mapVersion}
          src={mapUrl}
          title="Interactive Map"
          allowFullScreen
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <div className="global-map-footer">
        <p>© 2025 OECL Global Presence Map — Data updated quarterly</p>
      </div>
    </div>
  );
};

export default ContactMapContainer;
