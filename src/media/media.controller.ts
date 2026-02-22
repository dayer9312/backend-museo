import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseInterceptors, UploadedFile, UploadedFiles, BadRequestException } from '@nestjs/common';
import { MediaService } from './media.service';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { FileInterceptor, AnyFilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  // ENDPOINT OFICIAL PARA SUBIR ARCHIVOS
  @Post('subir')
  @UseInterceptors(FileInterceptor('archivo', {
    storage: diskStorage({
      destination: './uploads', 
      filename: (req, file, cb) => {
        const nombreUnico = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const extension = extname(file.originalname);
        cb(null, `${nombreUnico}${extension}`);
      },
    }),
    fileFilter: (req, file, cb) => {
      if (!file.originalname.match(/\.(jpg|jpeg|png|mp3|wav)$/i)) {
        return cb(new BadRequestException('Formato no permitido. Solo JPG, PNG, MP3, WAV'), false);
      }
      cb(null, true);
    },
  }))
  subirArchivo(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: any 
  ) {
    if (!file) {
      throw new BadRequestException('Debes enviar un archivo en el campo "archivo"');
    }

    const urlPublica = `http://localhost:3000/uploads/${file.filename}`;
    const pesoMB = (file.size / 1024 / 1024).toFixed(2) + ' MB';

    const datosParaBD = {
      id_objeto: parseInt(body.id_objeto),
      tipo: body.tipo, 
      descripcion: body.descripcion,
      url: urlPublica,
      peso: pesoMB,
    };

    return this.mediaService.create(datosParaBD as any);
  }

  @Post()
  create(@Body() createMediaDto: CreateMediaDto) {
    return this.mediaService.create(createMediaDto);
  }

  @Get()
  findAll() {
    return this.mediaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.mediaService.findOne(id); 
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateMediaDto: UpdateMediaDto) {
    return this.mediaService.update(id, updateMediaDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.mediaService.remove(id);
  }
}