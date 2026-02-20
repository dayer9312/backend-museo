import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TraduccionService } from './traduccion.service';
import { CreateTraduccionDto } from './dto/create-traduccion.dto';
import { UpdateTraduccionDto } from './dto/update-traduccion.dto';

@Controller('traduccion')
export class TraduccionController {
  constructor(private readonly traduccionService: TraduccionService) {}

  @Post()
  create(@Body() createTraduccionDto: CreateTraduccionDto) {
    return this.traduccionService.create(createTraduccionDto);
  }

  @Get()
  findAll() {
    return this.traduccionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.traduccionService.findOne(+id);
  }

  // GET http://localhost:3000/traduccion/objeto/1/idioma/en
  @Get('objeto/:idObjeto/idioma/:idioma')
  findByObjetoEIdioma(
    @Param('idObjeto', ParseIntPipe) idObjeto: number, 
    @Param('idioma') idioma: string
  ) {
    return this.traduccionService.findByObjetoEIdioma(idObjeto, idioma);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateTraduccionDto: UpdateTraduccionDto) {
    return this.traduccionService.update(+id, updateTraduccionDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.traduccionService.remove(+id);
  }
}
