import React, { useRef, useState } from 'react';
import { RefreshCw, Maximize2, Minimize2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

const MAP_URL =
  "https://www.google.com/maps/d/embed?mid=1CGPTRpMsSQAva-KitDXZTYiMv1mHnDA&ehbc=2E312F&noprof=1";

const ContactMapContainer = () => {
  const iframeRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleReload = () => {
    if (!iframeRef.current) return;
    const currentSrc = iframeRef.current.src;
    iframeRef.current.src = "";
    setTimeout(() => {
      if (iframeRef.current) iframeRef.current.src = currentSrc;
    }, 100);
    setIsLoaded(false);
  };

  return (
    <div className="w-full h-full flex justify-center items-stretch bg-transparent">
      {/* transparent container with same radius as the map to avoid white bleed */}
      <div
        className={`relative w-full flex-1 rounded-3xl overflow-hidden transition-all duration-300 ease-in-out ${
          isFullScreen ? "max-w-full" : "max-w-6xl"
        } bg-transparent shadow-none`}
        style={{ background: "transparent" }}
      >
        {/* Header (transparent) */}
        <div className="flex justify-between items-center p-3 bg-transparent border-0">
          <h3 className="font-medium text-slate-700">
            <span className="hidden sm:inline">Interactive Global Presence Map</span>
            <span className="sm:hidden">Global Map</span>
          </h3>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleReload}
              className="border-slate-200 text-slate-700 hover:bg-slate-100/40"
            >
              <RefreshCw className="h-3.5 w-3.5 mr-1" />
              <span className="hidden sm:inline">Refresh</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsFullScreen((v) => !v)}
              className="border-slate-200 text-slate-700 hover:bg-slate-100/40"
            >
              {isFullScreen ? (
                <>
                  <Minimize2 className="h-3.5 w-3.5 mr-1" />
                  <span className="hidden sm:inline">Compact</span>
                </>
              ) : (
                <>
                  <Maximize2 className="h-3.5 w-3.5 mr-1" />
                  <span className="hidden sm:inline">Expand</span>
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Map area (transparent) */}
        <div
          className={`relative transition-all duration-300 ${
            isFullScreen ? "aspect-[16/9]" : "aspect-[4/3]"
          } bg-transparent`}
        >
          <iframe
            ref={iframeRef}
            src={MAP_URL}
            title="Interactive Map"
            className="w-full h-full border-0 bg-transparent"
            loading="eager"
            style={{
              backgroundColor: "transparent",
              filter: "contrast(1.05) saturate(1.1)",
            }}
            onLoad={() => setIsLoaded(true)}
            allowFullScreen
          />
          {!isLoaded && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/5">
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-slate-600" />
                <p className="mt-3 text-sm text-slate-600">Loading map...</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer (transparent) */}
        <div className="py-2 px-4 text-center text-xs text-slate-500 bg-transparent border-0">
          © 2025 Global Presence Map — Data updated quarterly
        </div>
      </div>
    </div>
  );
};

export default ContactMapContainer;
