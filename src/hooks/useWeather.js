import { useState } from "react";
import { useLocation } from "./useLocation";
import { useQuery } from "react-query";
import { getCurrentWeather } from "../api/weather";

export const useWeather = () => {
    const { lat, long } = useLocation()
    const [loading, setLoading] = useState(true)
    const { data } = useQuery({
        queryKey: ['weather'],
        queryFn: () => getCurrentWeather(lat, long),
        enabled: !!long,
        onSuccess: () => {
            setTimeout(() => {
                setLoading(false)

            }, 1000);
        }
    })

    return {loading, data}
}