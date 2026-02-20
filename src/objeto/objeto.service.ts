import { Injectable } from '@nestjs/common';
import { CreateObjetoDto } from './dto/create-objeto.dto';
import { UpdateObjetoDto } from './dto/update-objeto.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ObjetoService {
  constructor(private prisma: PrismaService) {}

  create(createObjetoDto: CreateObjetoDto) {
    return this.prisma.objetoMuseologico.create({
      data: createObjetoDto,
    });
  }

  findAll() {
    return this.prisma.objetoMuseologico.findMany({
      where: { eliminado: false },
      include: { sala: true }, // <--- ¡Truco! Trae también los datos de la sala
    });
  }

  findOne(id: number) {
    return this.prisma.objetoMuseologico.findUnique({
      where: { id_objeto: id },
      include: { sala: true, multimedia: true },
    });
  }

  update(id: number, updateObjetoDto: UpdateObjetoDto) {
    return this.prisma.objetoMuseologico.update({
      where: { id_objeto: id },
      data: updateObjetoDto,
    });
  }

  remove(id: number) {
    return this.prisma.objetoMuseologico.update({
      where: { id_objeto: id },
      data: { 
        eliminado: true,
        fecha_eliminado: new Date()
      },
    });
  }
}