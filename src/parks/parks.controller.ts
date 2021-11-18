import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateParkDto } from './dto/create-park.dto';
import { Park } from './park.model';
import { ParksService } from './parks.service';

@Controller('parks')
export class ParksController {

  constructor(private parksService: ParksService) {}

  @Get()
  public getAllParks() {
    return this.parksService.getAllParks();
  }

  @Get('/:id')
  public getParkById(@Param() id: string): Park {
    return this.parksService.getParkById(id);
  }

  @Post()
  public createPark(@Body() createParkDto: CreateParkDto): Park {
    return this.parksService.createPark(createParkDto);
  }
}
