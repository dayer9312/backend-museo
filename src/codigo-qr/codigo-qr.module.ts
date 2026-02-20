import { Module } from '@nestjs/common';
import { CodigoQrService } from './codigo-qr.service';
import { CodigoQrController } from './codigo-qr.controller';

@Module({
  controllers: [CodigoQrController],
  providers: [CodigoQrService],
})
export class CodigoQrModule {}
