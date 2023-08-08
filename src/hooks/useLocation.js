import { useState } from "react";

export const useLocation = () => {
    const [lat, setLat] = useState();
    const [long, setLong] = useState();

    const onSuccess = (pos) => {
        setLat(pos.coords.latitude)
        setLong(pos.coords.longitude)
    }
    navigator.geolocation.getCurrentPosition(onSuccess);

    return {lat, long}
}