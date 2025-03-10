import { Request, Response } from "express";
import { injectable } from "inversify";
import { ParkingHistoryService } from "../../libs/parkingHistory/services";

@injectable()
export class ParkingsController {
  constructor(private readonly parkingsService: ParkingHistoryService) {}

  public async getParkings(req: Request, res: Response) {
    const params = req.params as unknown as { id: number };
    const response = await this.parkingsService.findAll(params.id);
    return res.status(response.status).json(response);
  }

  public async startParking(req: Request, res: Response) {
    const response = await this.parkingsService.startNewParking(req.body);
    return res.status(response.status).json(response);
  }

  public async finishParking(req: Request, res: Response) {
    const response = await this.parkingsService.finishParking(req.body);
    return res.status(response.status).json(response);
  }
}
