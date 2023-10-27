import { Request, Response } from 'express';
import { getUserById } from '../helpers/api/getUserFromId';
import { getWeatherInfoFromCoords } from '../helpers/api/weatherApiCall';
import { ClimateResponse } from '../helpers/types/Climate';

export const GetClimateByUserId = async (req: Request, res: Response) => {
    const { id } = req.params;

    const { units } = req.body;

    const user = await getUserById(Number(id));

    if (!user) {
        return res.status(404).json({
            ok: false,
            msg: 'User not Found',
        });
    }

    const lat = Number(user.address.geo.lat);
    const lon = Number(user.address.geo.lng);

    const weather = await getWeatherInfoFromCoords(lat, lon, units);

    const response: ClimateResponse = {
        coord: {
            lat,
            lon,
        },
        weather,
    };

    return res.json(response);
};
export const HealthCheck = async (req: Request, res: Response) => {
    return res.status(200).json({
        status: 'ok',
    });
};
