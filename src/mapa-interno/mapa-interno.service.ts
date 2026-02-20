import { Injectable } from '@nestjs/common';
import { CreateMapaInternoDto } from './dto/create-mapa-interno.dto';
import { UpdateMapaInternoDto } from './dto/update-mapa-interno.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class MapaInternoService {
  constructor(private prisma: PrismaService) {}

  // Nota: Prisma convierte el campo JSON automáticamente si le pasamos un objeto.
  create(createMapaInternoDto: CreateMapaInternoDto) {
    return this.prisma.mapaInterno.create({
      data: {
        ...createMapaInternoDto,
        // Forzamos a que si viene vacío, no falle el tipo de dato Json
        coordenadas_interactivas: createMapaInternoDto.coordenadas_interactivas ?? {},
      }
    });
  }

  findAll() {
    return this.prisma.mapaInterno.findMany({
      where: { eliminado: false },
      include: { sala: true },
    });
  }

  findOne(id: number) {
    return this.prisma.mapaInterno.findUnique({ where: { id_mapa: id } });
  }

  update(id: number, updateMapaInternoDto: UpdateMapaInternoDto) {
    return this.prisma.mapaInterno.update({
      where: { id_mapa: id },
      data: updateMapaInternoDto,
    });
  }

  remove(id: number) {
    return this.prisma.mapaInterno.update({
      where: { id_mapa: id },
      data: { eliminado: true, fecha_eliminado: new Date() },
    });
  }
}