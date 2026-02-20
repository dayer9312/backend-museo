import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ObjetoService } from './objeto.service';
import { CreateObjetoDto } from './dto/create-objeto.dto';
import { UpdateObjetoDto } from './dto/update-objeto.dto';

@Controller('objeto')
export class ObjetoController {
  constructor(private readonly objetoService: ObjetoService) {}

  @Post()
  create(@Body() createObjetoDto: CreateObjetoDto) {
    return this.objetoService.create(createObjetoDto);
  }

  @Get()
  findAll() {
    return this.objetoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.objetoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateObjetoDto: UpdateObjetoDto) {
    return this.objetoService.update(+id, updateObjetoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.objetoService.remove(+id);
  }
}
