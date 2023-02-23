import Hotel from "../models/Hotel";
import Rooms
    from "../models/Rooms";

export const createHotel = async (req, res, next) => {
    const newHotell = new Hotel(req.body);
    }