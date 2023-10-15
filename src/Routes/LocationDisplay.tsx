import { FC } from "react";
import { Outlet, useLocation } from "react-router-dom"

interface LocationDisplayProps {
}

const LocationDisplay: FC<LocationDisplayProps> = () => {
  const location = useLocation();

  return <>
    <div data-testid="location-display" className="d-none">{location.pathname}</div>
    <Outlet />
  </>
}

export default LocationDisplay
