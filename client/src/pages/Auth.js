import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Auth() {

  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    password: "",
    role_id: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      // ======================
      // LOGIN
      // ======================
      const response = await API.post(
        "/auth/login",
        {
          email: form.email,
          password: form.password
        }
      );

      // SAFE STORAGE
      localStorage.setItem("token", response.data.token);

      // IMPORTANT: ensure user exists
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user || {})
      );

      navigate("/dashboard");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Login failed"
      );

    }

  };

  return (

    <div style={styles.container}>

      <div style={styles.overlay}></div>

      <div style={styles.authWrapper}>

        {/* LEFT PANEL */}
        <div style={styles.leftPanel}>
          <div style={styles.leftContent}>

            <h1 style={styles.brand}>
              ARS Monitor
            </h1>

            <p style={styles.brandSubtitle}>
              Plateforme numérique de suivi et d’évaluation
              de la conformité aux normes ARS 1000.
            </p>

            <div style={styles.features}>
              <div style={styles.feature}>✓ Monitoring Agricole</div>
              <div style={styles.feature}>✓ Évaluation Durable</div>
              <div style={styles.feature}>✓ Audits de Conformité</div>
              <div style={styles.feature}>✓ Traçabilité du Cacao</div>
            </div>

          </div>
        </div>

        {/* RIGHT PANEL */}
        <div style={styles.rightPanel}>

          <div style={styles.card}>

            <div style={{ marginBottom: "20px" }}>
              <h2 style={styles.title}>
                {isLogin ? "Connexion" : "Créer un compte"}
              </h2>

              <p style={styles.subtitle}>
                {isLogin
                  ? "Accédez à votre espace de travail sécurisé"
                  : "Rejoignez la plateforme ARS Monitor"}
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit}>

              {/* FULL NAME (REGISTER ONLY) */}
              {!isLogin && (
                <input
                  name="full_name"
                  placeholder="Nom complet"
                  value={form.full_name}
                  onChange={handleChange}
                  style={styles.input}
                />
              )}

              {/* EMAIL */}
              <input
                name="email"
                placeholder="Adresse e-mail"
                value={form.email}
                onChange={handleChange}
                style={styles.input}
              />

              {/* PHONE */}
              {!isLogin && (
                <input
                  name="phone"
                  placeholder="Téléphone"
                  value={form.phone}
                  onChange={handleChange}
                  style={styles.input}
                />
              )}

              {/* ROLE */}
              {!isLogin && (
                <select
                  name="role_id"
                  value={form.role_id}
                  onChange={handleChange}
                  style={{
                    ...styles.input,
                    color: "#191818",
                    background: "rgba(255,255,255,0.08)"
                  }}
                >
                  <option value="">Sélectionner un rôle</option>
                  <option value="1">Admin</option>
                  <option value="2">Auditeur</option>
                  <option value="3">Gestionnaire Coopérative</option>
                  <option value="4">Agriculteur</option>
                </select>
              )}

              {/* PASSWORD */}
              <div style={styles.passwordContainer}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Mot de passe"
                  value={form.password}
                  onChange={handleChange}
                  style={styles.passwordInput}
                />

                <button
                  type="button"
                  style={styles.eyeButton}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁"}
                </button>
              </div>

              {/* LOGIN OPTIONS */}
              {isLogin && (
                <div style={styles.optionsRow}>
                  <label style={styles.checkboxLabel}>
                    <input type="checkbox" />
                    Se souvenir de moi
                  </label>

                  <span style={styles.forgot}>
                    Mot de passe oublié ?
                  </span>
                </div>
              )}

              {/* SUBMIT */}
              <button type="submit" style={styles.button}>
                {isLogin ? "Se connecter" : "Créer le compte"}
              </button>

            </form>

            {/* SWITCH */}
            <p style={styles.switchText}>
              {isLogin ? "Pas encore de compte ?" : "Déjà un compte ?"}

              <span
                style={styles.switchLink}
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? " S'inscrire" : " Se connecter"}
              </span>
            </p>

          </div>
        </div>

      </div>

    </div>

  );
}

const styles = {

  container: {
    minHeight: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1600&auto=format&fit=crop')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
    fontFamily: "Segoe UI, sans-serif"
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.65)"
  },

  authWrapper: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    maxWidth: "1200px",
    display: "grid",
    gridTemplateColumns: "1fr 480px",
    borderRadius: "28px",
    overflow: "hidden",
    backdropFilter: "blur(12px)"
  },

  leftPanel: {
    display: "flex",
    alignItems: "center",
    padding: "60px",
    color: "white"
  },

  leftContent: {
    maxWidth: "500px"
  },

  brand: {
    fontSize: "64px",
    marginBottom: "20px",
    color: "#C9A227"
  },

  brandSubtitle: {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#EAEAEA",
    marginBottom: "40px"
  },

  features: {
    display: "flex",
    flexDirection: "column",
    gap: "18px"
  },

  feature: {
    fontSize: "16px"
  },

  rightPanel: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  card: {
    width: "100%",
    background: "rgba(20, 20, 20, 0.75)",
    backdropFilter: "blur(18px)",
    padding: "45px",
    borderRadius: "24px",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "white",
    boxShadow: "0 10px 40px rgba(0,0,0,0.6)"
  },

  title: {
    fontSize: "32px",
    marginBottom: "10px"
  },

  subtitle: {
    color: "#EAEAEA",
    marginBottom: "25px"
  },

  input: {
    width: "100%",
    padding: "14px",
    marginBottom: "14px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(0,0,0,0.35)",
    color: "white",
    boxSizing: "border-box",
    outline: "none"
  },

  passwordContainer: {
    display: "flex",
    marginBottom: "14px"
  },

  passwordInput: {
    flex: 1,
    padding: "14px",
    borderRadius: "12px 0 0 12px",
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(255,255,255,0.08)",
    color: "white"
  },

  eyeButton: {
    border: "none",
    padding: "0 15px",
    borderRadius: "0 12px 12px 0",
    cursor: "pointer",
    background: "#C9A227"
  },

  optionsRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    fontSize: "13px"
  },

  checkboxLabel: {
    display: "flex",
    gap: "8px",
    alignItems: "center"
  },

  forgot: {
    cursor: "pointer",
    color: "#C9A227"
  },

  button: {
    width: "100%",
    padding: "15px",
    border: "none",
    borderRadius: "12px",
    background:
      "linear-gradient(135deg,#1B5E20,#2E7D32)",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "15px"
  },

  switchText: {
    marginTop: "25px",
    textAlign: "center",
    fontSize: "14px"
  },

  switchLink: {
    color: "#C9A227",
    cursor: "pointer",
    fontWeight: "600"
  }

};

export default Auth;
