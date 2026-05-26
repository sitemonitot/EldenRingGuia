// ══════════════════════════════════
// GESTIÓN DE AUTENTICACIÓN
// ══════════════════════════════════

let supabaseClient = null;
let usuarioActual = null;

// Inicializar cliente Supabase y restaurar sesión guardada inmediatamente
async function inicializarSupabase() {
  if (!SUPABASE_CONFIGURADO) return null;
  try {
    supabaseClient = supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    });
    // Restaurar sesión del localStorage ANTES de que el DOM se pinte
    const { data: { session } } = await supabaseClient.auth.getSession();
    usuarioActual = session?.user ?? null;
    return supabaseClient;
  } catch (e) {
    console.error("Error inicializando Supabase:", e);
    return null;
  }
}

// Obtener usuario actual
async function obtenerUsuario() {
  if (!supabaseClient) return null;
  const { data: { user } } = await supabaseClient.auth.getUser();
  return user;
}

// Registrar usuario
async function registrar(email, password, nombre) {
  if (!supabaseClient) return { error: { message: "Supabase no configurado" } };
  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password,
    options: { data: { nombre_usuario: nombre } }
  });
  return { data, error };
}

// Iniciar sesión
async function iniciarSesion(email, password) {
  if (!supabaseClient) return { error: { message: "Supabase no configurado" } };
  const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
  return { data, error };
}

// Cerrar sesión
async function cerrarSesion() {
  if (!supabaseClient) return;
  await supabaseClient.auth.signOut();
  usuarioActual = null;
  actualizarUIAuth(null);
  navegarA("inicio");
  mostrarToast("Sesión cerrada correctamente", "exito");
}

// Escuchar cambios de auth POSTERIORES al init (login, logout, refresh de token)
function escucharAuth(callback) {
  if (!supabaseClient) return;
  supabaseClient.auth.onAuthStateChange((event, session) => {
    usuarioActual = session?.user ?? null;
    callback(event, session?.user ?? null);
  });
}

// Sincronizar nombre de usuario en tabla perfiles_usuario (para búsqueda de amigos)
async function sincronizarPerfil() {
  if (!usuarioActual || !supabaseClient) return;
  const nombre = usuarioActual.user_metadata?.nombre_usuario || usuarioActual.email.split("@")[0];
  try {
    await supabaseClient
      .from("perfiles_usuario")
      .upsert({ user_id: usuarioActual.id, nombre_usuario: nombre }, { onConflict: "user_id" });
  } catch (_) {
    // La tabla puede no existir aún — se ignora silenciosamente
  }
}

// Actualizar UI según estado de autenticación
function actualizarUIAuth(usuario) {
  const btnLogin = document.getElementById("btn-login");
  const userInfo = document.getElementById("user-info");
  const linkPerfil = document.getElementById("link-perfil");
  const loginGate = document.getElementById("login-gate");
  const app = document.getElementById("app");

  if (usuario) {
    const nombre = usuario.user_metadata?.nombre_usuario || usuario.email.split("@")[0];
    if (userInfo) {
      userInfo.style.display = "flex";
      userInfo.querySelector(".user-nombre").textContent = nombre;
    }
    if (btnLogin) btnLogin.style.display = "none";
    if (linkPerfil) linkPerfil.style.display = "flex";
    if (app) app.classList.add("sesion-activa");
    if (loginGate) loginGate.classList.remove("visible");
  } else {
    if (userInfo) userInfo.style.display = "none";
    if (btnLogin) btnLogin.style.display = "inline-flex";
    if (linkPerfil) linkPerfil.style.display = "none";
    if (app) app.classList.remove("sesion-activa");
    if (loginGate) loginGate.classList.add("visible");
    // Redirigir a inicio si estaba en sección protegida
    const seccionActualEl = document.querySelector(".seccion.activa");
    if (seccionActualEl) {
      const id = seccionActualEl.id;
      if (["seccion-guia","seccion-items","seccion-builds","seccion-perfil","seccion-pasos"].includes(id)) {
        document.querySelectorAll(".seccion").forEach(s => s.classList.remove("activa"));
        document.getElementById("seccion-inicio")?.classList.add("activa");
      }
    }
  }
}

// Toast de notificación
function mostrarToast(mensaje, tipo = "exito") {
  let toast = document.getElementById("toast-global");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-global";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = mensaje;
  toast.className = `toast ${tipo} visible`;
  setTimeout(() => { toast.classList.remove("visible"); }, 3500);
}
