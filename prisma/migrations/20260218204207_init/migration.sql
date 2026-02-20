-- CreateEnum
CREATE TYPE "Rol" AS ENUM ('ADMIN', 'CURADOR', 'EDITOR', 'VISITANTE');

-- CreateEnum
CREATE TYPE "EstadoQR" AS ENUM ('ACTIVO', 'EXPIRADO');

-- CreateEnum
CREATE TYPE "TipoMedio" AS ENUM ('IMAGEN', 'AUDIO', 'VIDEO');

-- CreateTable
CREATE TABLE "Usuario" (
    "id_usuario" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "contrasena" TEXT NOT NULL,
    "rol" "Rol" NOT NULL DEFAULT 'VISITANTE',
    "fecha_creacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ultimo_ingreso" TIMESTAMP(3),
    "eliminado" BOOLEAN NOT NULL DEFAULT false,
    "fecha_eliminado" TIMESTAMP(3),
    "eliminado_por" INTEGER,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "Sala" (
    "id_sala" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "ubicacion" TEXT,
    "orden" INTEGER NOT NULL,
    "imagen_portada" TEXT,
    "eliminado" BOOLEAN NOT NULL DEFAULT false,
    "fecha_eliminado" TIMESTAMP(3),
    "eliminado_por" INTEGER,

    CONSTRAINT "Sala_pkey" PRIMARY KEY ("id_sala")
);

-- CreateTable
CREATE TABLE "ObjetoMuseologico" (
    "id_objeto" SERIAL NOT NULL,
    "id_sala" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "anio" TEXT,
    "autor" TEXT,
    "categoria" TEXT,
    "estado_conservacion" TEXT,
    "fecha_registro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "visible" BOOLEAN NOT NULL DEFAULT true,
    "eliminado" BOOLEAN NOT NULL DEFAULT false,
    "fecha_eliminado" TIMESTAMP(3),
    "eliminado_por" INTEGER,

    CONSTRAINT "ObjetoMuseologico_pkey" PRIMARY KEY ("id_objeto")
);

-- CreateTable
CREATE TABLE "CodigoQR" (
    "id_qr" SERIAL NOT NULL,
    "id_objeto" INTEGER NOT NULL,
    "codigo" TEXT NOT NULL,
    "fecha_creacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "estado" "EstadoQR" NOT NULL DEFAULT 'ACTIVO',
    "eliminado" BOOLEAN NOT NULL DEFAULT false,
    "fecha_eliminado" TIMESTAMP(3),
    "eliminado_por" INTEGER,

    CONSTRAINT "CodigoQR_pkey" PRIMARY KEY ("id_qr")
);

-- CreateTable
CREATE TABLE "Media" (
    "id_medio" SERIAL NOT NULL,
    "id_objeto" INTEGER NOT NULL,
    "tipo" "TipoMedio" NOT NULL,
    "url" TEXT NOT NULL,
    "descripcion" TEXT,
    "peso" TEXT,
    "duracion" INTEGER,
    "eliminado" BOOLEAN NOT NULL DEFAULT false,
    "fecha_eliminado" TIMESTAMP(3),
    "eliminado_por" INTEGER,

    CONSTRAINT "Media_pkey" PRIMARY KEY ("id_medio")
);

-- CreateTable
CREATE TABLE "Traduccion" (
    "id_traduccion" SERIAL NOT NULL,
    "id_objeto" INTEGER NOT NULL,
    "idioma" TEXT NOT NULL,
    "titulo_traducido" TEXT NOT NULL,
    "descripcion_traducida" TEXT NOT NULL,
    "eliminado" BOOLEAN NOT NULL DEFAULT false,
    "fecha_eliminado" TIMESTAMP(3),
    "eliminado_por" INTEGER,

    CONSTRAINT "Traduccion_pkey" PRIMARY KEY ("id_traduccion")
);

-- CreateTable
CREATE TABLE "MapaInterno" (
    "id_mapa" SERIAL NOT NULL,
    "id_sala" INTEGER NOT NULL,
    "imagen_mapa" TEXT NOT NULL,
    "coordenadas_interactivas" JSONB,
    "eliminado" BOOLEAN NOT NULL DEFAULT false,
    "fecha_eliminado" TIMESTAMP(3),
    "eliminado_por" INTEGER,

    CONSTRAINT "MapaInterno_pkey" PRIMARY KEY ("id_mapa")
);

-- CreateTable
CREATE TABLE "LogSistema" (
    "id_log" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "accion" TEXT NOT NULL,
    "tabla_afectada" TEXT,
    "id_tabla" INTEGER,
    "fecha_hora" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LogSistema_pkey" PRIMARY KEY ("id_log")
);

-- CreateTable
CREATE TABLE "EstadisticaVisita" (
    "id_visita" SERIAL NOT NULL,
    "id_objeto" INTEGER NOT NULL,
    "fecha_hora" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dispositivo" TEXT,
    "version_app" TEXT,
    "tiempo_visualizacion" INTEGER,

    CONSTRAINT "EstadisticaVisita_pkey" PRIMARY KEY ("id_visita")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_correo_key" ON "Usuario"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "CodigoQR_id_objeto_key" ON "CodigoQR"("id_objeto");

-- CreateIndex
CREATE UNIQUE INDEX "CodigoQR_codigo_key" ON "CodigoQR"("codigo");

-- AddForeignKey
ALTER TABLE "ObjetoMuseologico" ADD CONSTRAINT "ObjetoMuseologico_id_sala_fkey" FOREIGN KEY ("id_sala") REFERENCES "Sala"("id_sala") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CodigoQR" ADD CONSTRAINT "CodigoQR_id_objeto_fkey" FOREIGN KEY ("id_objeto") REFERENCES "ObjetoMuseologico"("id_objeto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_id_objeto_fkey" FOREIGN KEY ("id_objeto") REFERENCES "ObjetoMuseologico"("id_objeto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Traduccion" ADD CONSTRAINT "Traduccion_id_objeto_fkey" FOREIGN KEY ("id_objeto") REFERENCES "ObjetoMuseologico"("id_objeto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MapaInterno" ADD CONSTRAINT "MapaInterno_id_sala_fkey" FOREIGN KEY ("id_sala") REFERENCES "Sala"("id_sala") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LogSistema" ADD CONSTRAINT "LogSistema_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EstadisticaVisita" ADD CONSTRAINT "EstadisticaVisita_id_objeto_fkey" FOREIGN KEY ("id_objeto") REFERENCES "ObjetoMuseologico"("id_objeto") ON DELETE RESTRICT ON UPDATE CASCADE;
