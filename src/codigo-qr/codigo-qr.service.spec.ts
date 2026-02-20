import { Test, TestingModule } from '@nestjs/testing';
import { CodigoQrService } from './codigo-qr.service';

describe('CodigoQrService', () => {
  let service: CodigoQrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CodigoQrService],
    }).compile();

    service = module.get<CodigoQrService>(CodigoQrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
