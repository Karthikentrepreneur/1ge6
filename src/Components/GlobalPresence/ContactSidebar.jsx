import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { X, MapPin, Globe, ExternalLink, Phone, Mail, Home, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useIsMobile } from "@/hooks/use-mobile";

/* --- countries data: keep exactly as you pasted (omitted here for brevity) --- */
import countriesData from "./countries.data"; // or paste the array inline if you prefer

interface ContactSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactSidebar: React.FC<ContactSidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const isMobile = useIsMobile();

  const isIndiaPage = location.pathname.startsWith("/india");
  const [expandedCountry, setExpandedCountry] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<any | null>(null);

  // Track selected city per country (by country.name)
  const [selectedCityIndexes, setSelectedCityIndexes] = useState<Record<string, number>>({});

  // sort & filter
  const sortedCountries = [...countriesData]
    .filter((c) => !(isIndiaPage && c.code === "pk"))
    .sort((a, b) => a.name.localeCompare(b.name));

  // Find the map iframe
  const mapIframe = () =>
    (document.querySelector('iframe[title="Interactive Map"]') ||
      document.querySelector("iframe")) as HTMLIFrameElement | null;

  // Navigate map
  const navigateToLocation = (lat: number, lng: number, city: any | null = null) => {
    const iframe = mapIframe();
    if (!iframe) return;

    const zoomLevel = city ? 12 : 9;
    const baseUrl =
      "https://www.google.com/maps/d/u/0/embed?mid=1rF5337I7j7xk98at6ZPdMul4aglzrLg";
    const newSrc = `${baseUrl}&z=${zoomLevel}&ll=${lat},${lng}&hl=en&ehbc=2E312F&output=embed`;

    iframe.src = newSrc;

    if (city) setSelectedLocation(city);
  };

  // Helper: focus a country's first (or last-selected) city
  const focusFirstCity = (country: any) => {
    if (!country?.cities?.length) return;

    const idx = selectedCityIndexes[country.name] ?? 0; // last chosen, else first
    const firstCity = country.cities[idx];

    // remember selection
    setSelectedCityIndexes((prev) => ({ ...prev, [country.name]: idx }));
    setSelectedLocation(firstCity);

    // fly to city
    navigateToLocation(firstCity.lat, firstCity.lng, firstCity);
  };

  // City click
  const handleCitySelection = (country: any, cityIndex: number) => {
    setSelectedCityIndexes((prev) => ({ ...prev, [country.name]: cityIndex }));
    const selectedCity = country.cities[cityIndex];
    setSelectedLocation(selectedCity);
    navigateToLocation(selectedCity.lat, selectedCity.lng, selectedCity);
  };

  // Initial boot: pick very first country & its first city
  useEffect(() => {
    if (!sortedCountries.length) return;
    const firstCountry = sortedCountries[0];
    setExpandedCountry(firstCountry.name);
    setSelectedCityIndexes((prev) => ({ ...prev, [firstCountry.name]: 0 }));
    focusFirstCity(firstCountry);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isSelectedCity = (countryName: string, cityIndex: number) =>
    selectedCityIndexes[countryName] === cityIndex;

  return (
    <>
      {isOpen && isMobile && (
        <div className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm transition-opacity duration-300" onClick={onClose} />
      )}

      <div className={`my-3 w-full ${isMobile ? "max-w-[95%]" : "max-w-[520px]"} mx-auto px-2 md:px-0`}>
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-xl shadow-sm">
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            <h2 className="font-bold text-lg">Global Locations</h2>
          </div>
          {isMobile && (
            <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-red-500/20">
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Content */}
        <ScrollArea className="h-[calc(100vh-10rem)] md:h-[calc(100vh-8rem)] bg-white rounded-b-xl shadow-md">
          <div className="p-4">
            <div className="mt-4 space-y-3">
              <Accordion type="single" collapsible value={expandedCountry || ""} className="w-full space-y-3">
                {sortedCountries.map((country) => (
                  <AccordionItem
                    key={country.name}
                    value={country.name}
                    className="border border-red-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all bg-white"
                  >
                    <AccordionTrigger
                      onClick={() => {
                        const willExpand = expandedCountry !== country.name;
                        setExpandedCountry(willExpand ? country.name : null);
                        // 👉 always jump to the first/last-selected city on country click
                        focusFirstCity(country);
                      }}
                      className="rounded-t-md hover:bg-amber-50 transition-colors px-3 py-2"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={`/${country.code}.svg`}
                          alt={`${country.name} flag`}
                          className="w-6 h-6 rounded-sm object-cover shadow-sm"
                        />
                        <span className="font-medium">{country.name}</span>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="bg-gradient-to-b from-red-50/30 to-white px-3 py-2">
                      <div className="space-y-2">
                        {country.cities.map((city: any, index: number) => (
                          <div key={index} className="w-full">
                            <Button
                              variant="ghost"
                              className={cn(
                                "w-full justify-start text-sm p-2 h-auto rounded-md border transition-all shadow-sm",
                                isSelectedCity(country.name, index)
                                  ? "bg-red-100 hover:bg-red-150 border-red-300 text-red-800"
                                  : "bg-white hover:bg-red-50 border-gray-100 hover:border-red-200"
                              )}
                              onClick={() => handleCitySelection(country, index)}
                            >
                              <MapPin className="w-4 h-4 mr-2 text-red-600 flex-shrink-0" />
                              <span className="font-medium truncate">{city.name}</span>
                              <ChevronRight className="w-4 h-4 ml-auto text-red-300" />
                            </Button>

                            {/* City details when selected */}
                            {isSelectedCity(country.name, index) && city.address && (
                              <div className="mt-2 p-3 bg-gradient-to-br from-red-50 to-white rounded-lg border border-red-200 shadow text-sm animate-in fade-in duration-300 w-full">
                                <h4 className="font-semibold text-red-700 mb-2 pb-1 border-b border-red-100">
                                  <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                                    {city.name} Office
                                  </span>
                                </h4>

                                <div className="flex items-start mb-2 p-2 rounded-md w-full">
                                  <Home className="w-4 h-4 mr-2 text-red-500 mt-1 flex-shrink-0" />
                                  <p className="text-gray-700 text-sm break-words w-full overflow-hidden">{city.address}</p>
                                </div>

                                {city.contacts?.length > 0 && (
                                  <div className="flex items-start mb-2 p-2 rounded-md w-full">
                                    <Phone className="w-4 h-4 mr-2 text-red-500 mt-1 flex-shrink-0" />
                                    <div className="space-y-1 w-full overflow-hidden">
                                      {city.contacts.map((contact: string, idx: number) => (
                                        <p key={idx} className="text-gray-700 text-sm break-words">
                                          {contact}
                                        </p>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {city.email && (
                                  <div className="flex items-start p-2 rounded-md w-full">
                                    <Mail className="w-4 h-4 mr-2 text-red-500 mt-1 flex-shrink-0" />
                                    <a
                                      href={`mailto:${city.email}`}
                                      className="text-red-600 hover:text-red-800 hover:underline flex items-center text-sm break-words w-full overflow-hidden"
                                    >
                                      {city.email}
                                      <ExternalLink className="ml-1 h-3 w-3" />
                                    </a>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </ScrollArea>
      </div>
    </>
  );
};

export default ContactSidebar;
