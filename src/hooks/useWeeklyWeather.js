import { useState } from "react";
import { useQuery } from "react-query";
import { getWeeklyWeather } from "../api/weather";

export const useWeeklyWeather = () => {
    const [isWeekActive, setIsWeekActive] = useState(false)

    const { data, isLoading } = useQuery({
        queryKey: ['weeklyWeather'],
        queryFn: () => getWeeklyWeather(0, 0),
        enabled: !!isWeekActive
    })

    return { data, isLoading, isWeekActive, setIsWeekActive }

}