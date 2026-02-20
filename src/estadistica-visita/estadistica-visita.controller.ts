import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { EstadisticaVisitaService } from './estadistica-visita.service';
import { CreateEstadisticaVisitaDto } from './dto/create-estadistica-visita.dto';
import { UpdateEstadisticaVisitaDto } from './dto/update-estadistica-visita.dto';

@Controller('estadistica-visita')
export class EstadisticaVisitaController {
  constructor(private readonly estadisticaVisitaService: EstadisticaVisitaService) {}

  @Post()
  create(@Body() createEstadisticaVisitaDto: CreateEstadisticaVisitaDto) {
    return this.estadisticaVisitaService.create(createEstadisticaVisitaDto);
  }

  @Get()
  findAll() {
    return this.estadisticaVisitaService.findAll();
  }
}
