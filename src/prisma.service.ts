import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    // 1. Creamos la conexión (Pool) usando la URL de tu .env
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    
    // 2. Creamos el adaptador de Prisma
    const adapter = new PrismaPg(pool);
  
    // 3. Se lo pasamos al padre (super)
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }
}