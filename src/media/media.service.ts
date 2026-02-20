import { Injectable } from '@nestjs/common';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class MediaService {
  constructor(private prisma: PrismaService) {}

  create(createMediaDto: CreateMediaDto) {
    return this.prisma.media.create({
      data: createMediaDto,
    });
  }

  findAll() {
    return this.prisma.media.findMany({
      where: { eliminado: false },
      include: { objeto: { select: { titulo: true } } }, // Trae el título del objeto para saber de qué es la foto
    });
  }

  findOne(id: number) {
    return this.prisma.media.findUnique({
      where: { id_medio: id },
    });
  }

  update(id: number, updateMediaDto: UpdateMediaDto) {
    return this.prisma.media.update({
      where: { id_medio: id },
      data: updateMediaDto,
    });
  }

  remove(id: number) {
    return this.prisma.media.update({
      where: { id_medio: id },
      data: { eliminado: true, fecha_eliminado: new Date() },
    });
  }
}