// ══════════════════════════════════
// GESTIÓN DE AUTENTICACIÓN
// ══════════════════════════════════

let supabaseClient = null;
let usuarioActual = null;

// Inicializar cliente Supabase
function inicializarSupabase() {
  if (!SUPABASE_CONFIGURADO) return null;
  try {
    supabaseClient = supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
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
    options: {
      data: { nombre_usuario: nombre }
    }
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
  mostrarToast("Sesión cerrada correctamente", "exito");
}

// Escuchar cambios de auth
function escucharAuth(callback) {
  if (!supabaseClient) return;
  supabaseClient.auth.onAuthStateChange((event, session) => {
    usuarioActual = session?.user || null;
    callback(event, session?.user || null);
  });
}

// Actualizar UI según estado de autenticación
function actualizarUIAuth(usuario) {
  const btnLogin = document.getElementById("btn-login");
  const btnPerfil = document.getElementById("btn-perfil");
  const userInfo = document.getElementById("user-info");
  const linkPerfil = document.getElementById("link-perfil");

  if (usuario) {
    const nombre = usuario.user_metadata?.nombre_usuario || usuario.email.split("@")[0];
    if (btnLogin) btnLogin.style.display = "none";
    if (btnPerfil) btnPerfil.style.display = "inline-flex";
    if (userInfo) {
      userInfo.style.display = "flex";
      userInfo.querySelector(".user-nombre").textContent = nombre;
    }
    if (linkPerfil) linkPerfil.style.display = "flex";
  } else {
    if (btnLogin) btnLogin.style.display = "inline-flex";
    if (btnPerfil) btnPerfil.style.display = "none";
    if (userInfo) userInfo.style.display = "none";
    if (linkPerfil) linkPerfil.style.display = "none";
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
  setTimeout(() => {
    toast.classList.remove("visible");
  }, 3500);
}
