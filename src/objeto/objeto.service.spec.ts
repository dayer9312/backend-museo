import { Test, TestingModule } from '@nestjs/testing';
import { ObjetoService } from './objeto.service';

describe('ObjetoService', () => {
  let service: ObjetoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ObjetoService],
    }).compile();

    service = module.get<ObjetoService>(ObjetoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
