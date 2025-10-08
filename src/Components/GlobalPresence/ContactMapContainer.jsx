import { useEffect, useState } from "react";
import { RefreshCw, Maximize2, Minimize2 } from "lucide-react";

const buildSimpleEmbedUrl = ({ lat, lng, zoom }) =>
  `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;

const ContactMapContainer = ({ coordinates, selectedCity, hideChrome = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [mapVersion, setMapVersion] = useState(0);

  const { lat, lng, zoom } = coordinates;

  useEffect(() => {
    setIsLoaded(false);
    setMapVersion((v) => v + 1);
  }, [lat, lng, zoom]);

  const mapUrl = buildSimpleEmbedUrl({ lat, lng, zoom });

  return (
    <div className={`global-map-card${isFullScreen ? " fullscreen" : ""}`}>
      {!hideChrome && (
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
            <button onClick={() => setMapVersion((v) => v + 1)}>
              <RefreshCw size={16} />
              <span>Refresh</span>
            </button>
            <button onClick={() => setIsFullScreen((f) => !f)}>
              {isFullScreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
              <span>{isFullScreen ? "Compact" : "Expand"}</span>
            </button>
          </div>
        </div>
      )}

      <div className="global-map-frame">
        {!isLoaded && (
          <div className="global-map-loading">
            <div className="spinner" />
            <p>Loading map...</p>
          </div>
        )}

        {/* 👇 Pure Google Maps embed — no black header */}
        <iframe
          key={mapVersion}
          src={mapUrl}
          title="Interactive Map"
          allowFullScreen
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="global-map-footer">
        <p>© 2025 Global Presence Map — Data updated quarterly</p>
      </div>

      <style>{`
        .global-map-card { 
          border-radius: 16px; 
          overflow: hidden; 
          background: #fff; 
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        .global-map-header { 
          display:flex; 
          align-items:center; 
          justify-content:space-between; 
          padding:14px 16px; 
          color:#c44b0a;
        }
        .global-map-header h3 { margin:0; font-size:1rem; font-weight:600; }
        .global-map-header span { font-weight:600; color:#c44b0a; }
        .global-map-actions button { 
          display:inline-flex; 
          align-items:center; 
          gap:8px; 
          margin-left:8px; 
          border:1px solid #c44b0a; 
          border-radius:8px; 
          padding:6px 10px; 
          background:none; 
          color:#c44b0a; 
          cursor:pointer; 
          font-size:0.85rem;
        }
        .global-map-actions button:hover { background:#fff1ea; }
        .global-map-frame { position:relative; height:520px; }
        .global-map-frame iframe { width:100%; height:100%; border:0; display:block; }
        .global-map-loading { 
          position:absolute; 
          inset:0; 
          display:grid; 
          place-items:center; 
          background:#fff; 
        }
        .global-map-card.fullscreen { 
          position:fixed; 
          inset:16px; 
          z-index:1000; 
          background:#fff; 
        }
        .global-map-card.fullscreen .global-map-frame { height: calc(100% - 96px); }
        @media (max-width: 991px) { .global-map-frame { height:420px; } }
      `}</style>
    </div>
  );
};

export default ContactMapContainer;
