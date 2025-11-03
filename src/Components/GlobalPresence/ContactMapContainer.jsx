import React, { useRef, useState } from 'react';
import { RefreshCw, Maximize2, Minimize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MAP_URL = 'https://www.google.com/maps/d/embed?mid=1CGPTRpMsSQAva-KitDXZTYiMv1mHnDA&ehbc=2E312F&noprof=1';

const ContactMapContainer = () => {
  const iframeRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleReload = () => {
    if (!iframeRef.current) return;
    const currentSrc = iframeRef.current.src;
    iframeRef.current.src = '';
    setTimeout(() => {
      if (iframeRef.current) iframeRef.current.src = currentSrc;
    }, 100);
    setIsLoaded(false);
  };

  return (
    <div className="w-full h-full flex justify-center bg-transparent">
      <div className={`rounded-2xl overflow-hidden relative w-full transition-all duration-300 ease-in-out ${isFullScreen ? 'max-w-full' : 'max-w-6xl'} my-3 bg-transparent shadow-none`}>
        {/* Header */}
        <div className="flex justify-between items-center p-3 border-b border-red-100 bg-gradient-to-r from-red-50/50 to-transparent backdrop-blur-sm">
          <h3 className="font-medium text-red-700">
            <span className="hidden sm:inline">Interactive Global Presence Map</span>
            <span className="sm:hidden">Global Map</span>
          </h3>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleReload} className="border-red-200 hover:bg-red-50/40">
              <RefreshCw className="h-3.5 w-3.5 mr-1" />
              <span className="hidden sm:inline">Refresh</span>
            </Button>
            <Button variant="outline" size="sm" onClick={() => setIsFullScreen(v => !v)} className="border-red-200 hover:bg-red-50/40">
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

        {/* Map */}
        <div className={`relative transition-all duration-300 ${isFullScreen ? 'aspect-[16/9]' : 'aspect-[4/3]'} bg-transparent`}>
          <iframe
            ref={iframeRef}
            src={MAP_URL}
            title="Interactive Map"
            className="w-full h-full border-0"
            loading="eager"
            style={{ marginTop: '-125px', backgroundColor: 'transparent', filter: 'contrast(1.05) saturate(1.1)' }}
            onLoad={() => setIsLoaded(true)}
          />
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/10 backdrop-blur-sm z-10">
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-red-500" />
                <p className="mt-3 text-sm text-gray-600">Loading map...</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="py-2 px-4 border-t border-red-100 bg-gradient-to-r from-transparent via-white/20 to-transparent text-xs text-gray-500 text-center backdrop-blur-sm">
          <p>© 2025 OECL Global Presence Map | Data updated quarterly</p>
        </div>
      </div>
    </div>
  );
};

export default ContactMapContainer;
