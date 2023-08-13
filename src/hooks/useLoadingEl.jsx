import { Puff, useLoading } from '@agney/react-loading';

export const useLoadingEl = (loading) => {
    const {indicatorEl} = useLoading({
        loading,
        indicator: <Puff width="100" color="rgb(93, 61, 255)" />
    })

    return { indicatorEl }
}