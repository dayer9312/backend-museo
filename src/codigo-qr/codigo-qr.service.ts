import { Injectable } from '@nestjs/common';
import { CreateCodigoQrDto } from './dto/create-codigo-qr.dto';
import { UpdateCodigoQrDto } from './dto/update-codigo-qr.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CodigoQrService {
  constructor(private prisma: PrismaService) {}

  create(createCodigoQrDto: CreateCodigoQrDto) {
    return this.prisma.codigoQR.create({
      data: createCodigoQrDto,
    });
  }

  findAll() {
    return this.prisma.codigoQR.findMany({
      where: { eliminado: false },
      include: { objeto: true }
    });
  }

  // ¡Importante! Buscamos por código de texto (el que lee la cámara), no solo por ID numérico
  findByCodigo(codigoTexto: string) {
    return this.prisma.codigoQR.findUnique({
      where: { codigo: codigoTexto, eliminado: false },
      include: { objeto: true } // Al escanear, devolvemos toda la info del objeto
    });
  }

  findOne(id: number) {
    return this.prisma.codigoQR.findUnique({
      where: { id_qr: id },
    });
  }

  update(id: number, updateCodigoQrDto: UpdateCodigoQrDto) {
    return this.prisma.codigoQR.update({
      where: { id_qr: id },
      data: updateCodigoQrDto,
    });
  }

  remove(id: number) {
    return this.prisma.codigoQR.update({
      where: { id_qr: id },
      data: { eliminado: true, fecha_eliminado: new Date() },
    });
  }
}