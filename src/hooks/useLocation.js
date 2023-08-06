import { useState } from "react";
import { useQuery } from "react-query";

export const useLocation = () => {
    const [lat, setLat] = useState();
    const [long, setLong] = useState();
    const [loading, setLoading] = useState(false)

    const onSuccess = (pos) => {
        setLat(pos.coords.latitude)
        setLong(pos.coords.longitude)
        setLoading(true)
    }
    navigator.geolocation.getCurrentPosition(onSuccess);

    return {lat, long}
}