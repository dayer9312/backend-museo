import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { MapaInternoService } from './mapa-interno.service';
import { CreateMapaInternoDto } from './dto/create-mapa-interno.dto';
import { UpdateMapaInternoDto } from './dto/update-mapa-interno.dto';

@Controller('mapa-interno')
export class MapaInternoController {
  constructor(private readonly mapaInternoService: MapaInternoService) {}

  @Post()
  create(@Body() createMapaInternoDto: CreateMapaInternoDto) {
    return this.mapaInternoService.create(createMapaInternoDto);
  }

  @Get()
  findAll() {
    return this.mapaInternoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.mapaInternoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateMapaInternoDto: UpdateMapaInternoDto) {
    return this.mapaInternoService.update(id, updateMapaInternoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.mapaInternoService.remove(id);
  }
}
