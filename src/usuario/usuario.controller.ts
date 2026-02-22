import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UnauthorizedException } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post('login')
  async login(@Body() credenciales: { correo: string; contrasena: string }) {
    // 1. Buscamos al usuario por su correo
    const usuario = await this.usuarioService.findByEmail(credenciales.correo);

    // 2. Verificamos si existe y si la contraseña coincide
    if (!usuario || usuario.contrasena !== credenciales.contrasena) {
      // Si falla, lanzamos un error 401 (No Autorizado)
      throw new UnauthorizedException('Correo o contraseña incorrectos');
    }

    // 3. Si todo está bien, le damos la bienvenida (sin enviar la contraseña de vuelta por seguridad)
    return {
      mensaje: 'Login exitoso',
      usuario: {
        id: usuario.id_usuario,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        rol: usuario.rol
      }
    };
  }

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usuarioService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usuarioService.remove(id);
  }
}
