import { Test, TestingModule } from '@nestjs/testing';
import { CodigoQrController } from './codigo-qr.controller';
import { CodigoQrService } from './codigo-qr.service';

describe('CodigoQrController', () => {
  let controller: CodigoQrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CodigoQrController],
      providers: [CodigoQrService],
    }).compile();

    controller = module.get<CodigoQrController>(CodigoQrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
