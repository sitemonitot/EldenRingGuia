-- ══════════════════════════════════════════════════
-- CONFIGURACIÓN DE BASE DE DATOS PARA ELDEN GUIDE
-- Ejecuta este script en Supabase > SQL Editor
-- ══════════════════════════════════════════════════

-- Tabla de progreso de usuario
CREATE TABLE IF NOT EXISTS progreso_usuario (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  objetivo_id TEXT NOT NULL,
  completado BOOLEAN DEFAULT true,
  fecha_actualizacion TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, objetivo_id)
);

-- Activar Row Level Security (seguridad a nivel de fila)
ALTER TABLE progreso_usuario ENABLE ROW LEVEL SECURITY;

-- Los usuarios solo pueden ver, crear y editar SU PROPIO progreso
CREATE POLICY "Usuarios gestionan su propio progreso"
  ON progreso_usuario
  FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Índice para acelerar consultas por usuario
CREATE INDEX IF NOT EXISTS idx_progreso_user_id ON progreso_usuario(user_id);

-- ══════════════════════════════════════════════════
-- CONFIGURACIÓN DE AUTENTICACIÓN (en Supabase Dashboard)
-- ══════════════════════════════════════════════════
-- 1. Ve a Authentication > Settings
-- 2. Desactiva "Enable email confirmations" si quieres
--    que los usuarios puedan entrar sin confirmar email
--    (más cómodo para pruebas)
-- 3. En "Site URL" pon: https://www.kidsentertaiment.com
-- 4. En "Redirect URLs" añade:
--    https://www.kidsentertaiment.com
--    https://sitemonitot.github.io/EldenGuide/
-- ══════════════════════════════════════════════════
