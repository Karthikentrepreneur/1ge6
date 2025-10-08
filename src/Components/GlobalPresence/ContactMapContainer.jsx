import { useEffect, useState } from "react";
import { RefreshCw, Maximize2, Minimize2 } from "lucide-react";

const buildSimpleEmbedUrl = ({ lat, lng, zoom }) =>
  `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;

// Optional: if you use the Embed API (clean, no header), swap mapUrl builder:
// const buildEmbedApiUrl = ({ lat, lng, zoom, key }) =>
//   `https://www.google.com/maps/embed/v1/view?key=${key}&center=${lat},${lng}&zoom=${zoom}`;

const ContactMapContainer = ({
  coordinates,
  selectedCity,
  hideChrome = false,
  cropTop = 64, // 👈 pixels to crop off the top (hides My Maps black header)
}) => {
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
    <div
      className={`global-map-card${isFullScreen ? " fullscreen" : ""}`}
      style={{ "--crop-top": `${cropTop}px` }}
    >
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

        {/* The cropping trick: shift iframe up by --crop-top and extend height */}
        <div className="iframe-cropper">
          <iframe
            key={mapVersion}
            src={mapUrl}
            title="Interactive Map"
            allowFullScreen
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Optional visual mask to hide any remaining sliver; click-through */}
          <div className="crop-mask" aria-hidden />
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

        /* --- CROPPING STYLES --- */
        .iframe-cropper {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden; /* hide the black header area */
        }
        .iframe-cropper iframe {
          position: absolute;
          top: calc(-1 * var(--crop-top, 0px)); /* shift up */
          left: 0;
          width: 100%;
          height: calc(100% + var(--crop-top, 0px)); /* grow to compensate */
          border: 0;
          display: block;
        }
        .iframe-cropper .crop-mask {
          position: absolute;
          top: 0; left: 0; right: 0; height: var(--crop-top, 0px);
          background: #fff; /* match card bg to hide seam */
          pointer-events: none; /* don't block map interactions */
        }

        @media (max-width: 991px) { .global-map-frame { height:420px; } }
      `}</style>
    </div>
  );
};

export default ContactMapContainer;
