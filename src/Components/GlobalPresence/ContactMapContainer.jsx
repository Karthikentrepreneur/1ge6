import { useEffect, useState } from "react";
import { RefreshCw, Maximize2, Minimize2 } from "lucide-react";

const MAP_BASE_URL =
  "https://www.google.com/maps/d/u/0/embed?mid=1rF5337I7j7xk98at6ZPdMul4aglzrLg&hl=en&ehbc=2E312F";

const ContactMapContainer = ({
  coordinates,
  selectedCity,
  cropHeight = 80,     // height of black bar to hide (adjust if needed)
  maskColor = "#fff",  // color of the white overlay
  hideChrome = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [mapVersion, setMapVersion] = useState(0);

  const { lat, lng, zoom } = coordinates;

  useEffect(() => {
    setIsLoaded(false);
    setMapVersion(v => v + 1);
  }, [lat, lng, zoom]);

  return (
    <div className={`global-map-card${isFullScreen ? " fullscreen" : ""}`}>
      {!hideChrome && (
        <div className="global-map-header">
          <div>
            <h3>Interactive Global Presence Map</h3>
            {selectedCity && <p>Viewing: <span>{selectedCity.name}</span></p>}
          </div>
          <div className="global-map-actions">
            <button onClick={() => setMapVersion(v => v + 1)}>
              <RefreshCw size={16} /><span>Refresh</span>
            </button>
            <button onClick={() => setIsFullScreen(f => !f)}>
              {isFullScreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
              <span>{isFullScreen ? "Compact" : "Expand"}</span>
            </button>
          </div>
        </div>
      )}

      <div className="global-map-frame">
        {!isLoaded && (
          <div className="global-map-loading">
            <div className="spinner" /><p>Loading map...</p>
          </div>
        )}

        <div className="iframe-wrapper">
          <iframe
            key={mapVersion}
            src={MAP_BASE_URL}
            title="Global Map"
            allowFullScreen
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* 🔥 WHITE BOX MASK TO HIDE BLACK HEADER */}
          <div
            className="iframe-mask"
            style={{
              height: `${cropHeight}px`,
              background: maskColor,
            }}
          />
        </div>
      </div>

      <div className="global-map-footer">
        <p>© 2025 OECL Global Presence Map — Data updated quarterly</p>
      </div>

      <style>{`
        .global-map-card { border-radius: 16px; overflow: hidden; background: #fff; }
        .global-map-header { display:flex; align-items:center; justify-content:space-between; padding:14px 16px; }
        .global-map-actions button { display:inline-flex; align-items:center; gap:8px; margin-left:8px; }
        .global-map-frame { position:relative; height:520px; }
        .global-map-loading { position:absolute; inset:0; display:grid; place-items:center; background:#fff; }
        .global-map-card.fullscreen { position:fixed; inset:16px; z-index:1000; background:#fff; }
        .global-map-card.fullscreen .global-map-frame { height: calc(100% - 96px); }

        .iframe-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .iframe-wrapper iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
        }

        /* 👇 Overlay that hides the black header */
        .iframe-mask {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          pointer-events: none; /* keeps map interactive */
          z-index: 9999;
        }

        @media (max-width: 991px) {
          .global-map-frame { height:420px; }
        }
      `}</style>
    </div>
  );
};

export default ContactMapContainer;
