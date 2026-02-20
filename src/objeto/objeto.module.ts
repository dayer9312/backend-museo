import { Module } from '@nestjs/common';
import { ObjetoService } from './objeto.service';
import { ObjetoController } from './objeto.controller';

@Module({
  controllers: [ObjetoController],
  providers: [ObjetoService],
})
export class ObjetoModule {}
