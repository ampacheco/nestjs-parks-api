import { Injectable } from '@nestjs/common';
import { Park, StatesEnum } from './park.model';
import { v4 as uuid } from 'uuid';
import { CreateParkDto } from './dto/create-park.dto';

@Injectable()
export class ParksService {

  private parks: Park[] = [];

  getParkById(id: string): Park {
    return null;
  }

  // by default public
  public getAllParks(): Park[] {
    return this.parks;
  }

  public createPark(createParkDto: CreateParkDto): Park {
    const {name, description } = createParkDto;
    const park: Park = {
      id: uuid(),
      name,
      description,
      state: StatesEnum.FL,
    };
    this.parks.push(park);
    return park;
  }
}
