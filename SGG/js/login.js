const usuarios = [
  { usuario: "arthur", password: "5678" },
  { usuario: "luciano", password: "2026" }
];

const form = document.getElementById("loginForm");
const mensaje = document.getElementById("mensaje");
const temaBtn = document.getElementById("temaBtn");
const mostrarPass = document.getElementById("mostrarPass");
const password = document.getElementById("password");
const idioma = document.getElementById("idioma");

// LOGIN
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const usuario = document.getElementById("usuario").value;
  const clave = password.value;

  const valido = usuarios.find(
    u => u.usuario === usuario && u.password === clave
  );

  if (valido) {
    mensaje.textContent = "Inicio de sesión exitoso";
    mensaje.className = "exito";
  } else {
    mensaje.textContent = "Usuario o contraseña incorrectos";
    mensaje.className = "error";
  }
});

// MOSTRAR CONTRASEÑA
mostrarPass.addEventListener("change", () => {
  password.type = mostrarPass.checked ? "text" : "password";
});

// MODO OSCURO
if (localStorage.getItem("tema") === "dark") {
  document.body.classList.add("dark");
  temaBtn.textContent = "☀️";
}

temaBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("tema", "dark");
    temaBtn.textContent = "☀️";
  } else {
    localStorage.setItem("tema", "light");
    temaBtn.textContent = "🌙";
  }
});

// IDIOMAS
const textos = {
  es: {
    titulo: "Arthur Inicio",
    subtitulo: "Administrador de Gastos",
    usuario: "Usuario",
    password: "Contraseña",
    ingresar: "Ingresar",
    mostrar: "Mostrar contraseña"
  },

  en: {
    titulo: "Arthur Home",
    subtitulo: "Expense Manager",
    usuario: "Username",
    password: "Password",
    ingresar: "Sign In",
    mostrar: "Show password"
  },

  pt: {
    titulo: "Arthur Início",
    subtitulo: "Gerenciador de Despesas",
    usuario: "Usuário",
    password: "Senha",
    ingresar: "Entrar",
    mostrar: "Mostrar senha"
  },

  fr: {
    titulo: "Arthur Accueil",
    subtitulo: "Gestionnaire de Dépenses",
    usuario: "Utilisateur",
    password: "Mot de passe",
    ingresar: "Connexion",
    mostrar: "Afficher le mot de passe"
  },

  it: {
    titulo: "Arthur Home",
    subtitulo: "Gestore delle Spese",
    usuario: "Utente",
    password: "Password",
    ingresar: "Accedi",
    mostrar: "Mostra password"
  },

  de: {
    titulo: "Arthur Start",
    subtitulo: "Ausgabenmanager",
    usuario: "Benutzer",
    password: "Passwort",
    ingresar: "Anmelden",
    mostrar: "Passwort anzeigen"
  },

  ru: {
    titulo: "Arthur Главная",
    subtitulo: "Менеджер расходов",
    usuario: "Пользователь",
    password: "Пароль",
    ingresar: "Войти",
    mostrar: "Показать пароль"
  },

  zh: {
    titulo: "Arthur 首页",
    subtitulo: "费用管理器",
    usuario: "用户名",
    password: "密码",
    ingresar: "登录",
    mostrar: "显示密码"
  },

  ja: {
    titulo: "Arthur ホーム",
    subtitulo: "支出管理",
    usuario: "ユーザー名",
    password: "パスワード",
    ingresar: "ログイン",
    mostrar: "パスワードを表示"
  },

  ar: {
    titulo: "Arthur الرئيسية",
    subtitulo: "مدير المصروفات",
    usuario: "اسم المستخدم",
    password: "كلمة المرور",
    ingresar: "تسجيل الدخول",
    mostrar: "إظهار كلمة المرور"
  }
};

idioma.addEventListener("change", () => {
  const lang = idioma.value;

  document.getElementById("titulo").textContent =
    textos[lang].titulo;

  document.getElementById("subtitulo").textContent =
    textos[lang].subtitulo;

  document.getElementById("usuario").placeholder =
    textos[lang].usuario;

  document.getElementById("password").placeholder =
    textos[lang].password;

  document.getElementById("btnLogin").textContent =
    textos[lang].ingresar;

  document.querySelector('label[for="mostrarPass"]').textContent =
    textos[lang].mostrar;
});