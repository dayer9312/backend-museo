import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CodigoQrService } from './codigo-qr.service';
import { CreateCodigoQrDto } from './dto/create-codigo-qr.dto';
import { UpdateCodigoQrDto } from './dto/update-codigo-qr.dto';

@Controller('codigo-qr')
export class CodigoQrController {
  constructor(private readonly codigoQrService: CodigoQrService) {}

  @Post()
  create(@Body() createCodigoQrDto: CreateCodigoQrDto) {
    return this.codigoQrService.create(createCodigoQrDto);
  }

  @Get()
  findAll() {
    return this.codigoQrService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.codigoQrService.findOne(+id);
  }

  // GET http://localhost:3000/codigo-qr/escanear/QR-ACTA-001
  @Get('escanear/:codigo')
  escanear(@Param('codigo') codigo: string) {
    return this.codigoQrService.findByCodigo(codigo);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateCodigoQrDto: UpdateCodigoQrDto) {
    return this.codigoQrService.update(+id, updateCodigoQrDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.codigoQrService.remove(+id);
  }
}
