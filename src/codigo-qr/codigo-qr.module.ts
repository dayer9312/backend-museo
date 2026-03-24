import { Module } from '@nestjs/common';
import { CodigoQrService } from './codigo-qr.service';
import { CodigoQrController } from './codigo-qr.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [CodigoQrController],
  providers: [CodigoQrService, PrismaService],
})
export class CodigoQrModule {}
