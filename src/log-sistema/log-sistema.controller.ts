import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { LogSistemaService } from './log-sistema.service';
import { CreateLogSistemaDto } from './dto/create-log-sistema.dto';
import { UpdateLogSistemaDto } from './dto/update-log-sistema.dto';

@Controller('log-sistema')
export class LogSistemaController {
  constructor(private readonly logSistemaService: LogSistemaService) {}

  @Post()
  create(@Body() createLogSistemaDto: CreateLogSistemaDto) {
    return this.logSistemaService.create(createLogSistemaDto);
  }

  @Get()
  findAll() {
    return this.logSistemaService.findAll();
  }
}
