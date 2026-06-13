import Navbar from "../components/Navbar";

function Contact() {

  return (

    <div style={styles.container}>

      <Navbar />

      {/* HERO */}
      <section style={styles.hero}>

        <div style={styles.overlay}></div>

        <div style={styles.heroContent}>

          <span style={styles.badge}>
            Contact & Support
          </span>

          <h1 style={styles.title}>
            Entrer en contact avec ARS Monitor
          </h1>

          <p style={styles.subtitle}>
            Assistance plateforme, suivi de conformité ARS 1000,
            et support pour les acteurs de la chaîne cacao.
          </p>

        </div>

      </section>

      {/* MAIN SECTION */}
      <section style={styles.contactSection}>

        <div style={styles.contactGrid}>

          {/* LEFT PANEL */}
          <div style={styles.infoPanel}>

            <span style={styles.sectionBadge}>
              Support & Informations
            </span>

            <h2 style={styles.sectionTitle}>
              Assistance intelligente pour le suivi agricole
            </h2>

            <p style={styles.sectionText}>
              ARS Monitor accompagne les coopératives, auditeurs et gestionnaires
              dans la surveillance, l’évaluation et la conformité des exploitations
              agricoles selon les normes ARS 1000.
            </p>

            <div style={styles.infoCards}>

              <div style={styles.infoCard}>
                <div style={styles.iconCircle}>📍</div>
                <div>
                  <h3 style={styles.infoTitle}>Localisation</h3>
                  <p style={styles.infoText}>Centre de supervision agricole ARS</p>
                </div>
              </div>

              <div style={styles.infoCard}>
                <div style={styles.iconCircle}>📧</div>
                <div>
                  <h3 style={styles.infoTitle}>Email</h3>
                  <p style={styles.infoText}>support@arsmonitor.com</p>
                </div>
              </div>

              <div style={styles.infoCard}>
                <div style={styles.iconCircle}>📞</div>
                <div>
                  <h3 style={styles.infoTitle}>Téléphone</h3>
                  <p style={styles.infoText}>+237 6XX XXX XXX</p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT FORM */}
          <div style={styles.formCard}>

            <h2 style={styles.formTitle}>
              Envoyer un message
            </h2>

            <p style={styles.formSubtitle}>
              Décrivez votre besoin et recevez une réponse rapide de l’équipe ARS Monitor.
            </p>

            <form style={styles.form}>

              <div style={styles.row}>

                <input style={styles.input} placeholder="Nom complet" />
                <input style={styles.input} placeholder="Email" />

              </div>

              <input style={styles.input} placeholder="Organisation / Coopérative" />

              <select style={styles.input}>
                <option>Type de demande</option>
                <option>Support plateforme</option>
                <option>Conformité ARS 1000</option>
                <option>Audit & évaluation</option>
                <option>Traçabilité cacao</option>
              </select>

              <textarea
                style={styles.textarea}
                placeholder="Votre message..."
                rows="6"
              />

              <button style={styles.button}>
                Envoyer →
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* BOTTOM BANNER */}
      <section style={styles.imageSection}>

        <div style={styles.imageOverlay}></div>

        <div style={styles.imageContent}>

          <h2 style={styles.imageTitle}>
            Une agriculture plus transparente et durable
          </h2>

          <p style={styles.imageText}>
            ARS Monitor centralise la surveillance, l’évaluation et la conformité
            pour renforcer la durabilité du secteur cacao.
          </p>

        </div>

      </section>

    </div>
  );
}

const styles = {

  container: {
    minHeight: "100vh",
    background: "#F6F7F9",
    fontFamily: "Segoe UI, sans-serif",
    color: "#2E2E2E"
  },

  /* HERO */
  hero: {
    position: "relative",
    minHeight: "60vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "100px 10%"
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.65)"
  },

  heroContent: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    maxWidth: "800px"
  },

  badge: {
    display: "inline-block",
    padding: "8px 16px",
    borderRadius: "30px",
    background: "rgba(255,255,255,0.1)",
    color: "#C9A227",
    fontSize: "13px",
    marginBottom: "20px"
  },

  title: {
    fontSize: "52px",
    color: "white",
    marginBottom: "15px"
  },

  subtitle: {
    color: "#EAEAEA",
    fontSize: "16px",
    lineHeight: "1.8"
  },

  /* MAIN */
  contactSection: {
    padding: "90px 10%"
  },

  contactGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px"
  },

  /* LEFT */
  infoPanel: {
    paddingRight: "20px"
  },

  sectionBadge: {
    display: "inline-block",
    padding: "6px 14px",
    borderRadius: "20px",
    background: "#E8F5E9",
    color: "#1B5E20",
    fontSize: "12px",
    fontWeight: "600",
    marginBottom: "15px"
  },

  sectionTitle: {
    fontSize: "36px",
    color: "#1B5E20",
    marginBottom: "15px"
  },

  sectionText: {
    color: "#555",
    lineHeight: "1.8",
    marginBottom: "30px"
  },

  infoCards: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },

  infoCard: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
    background: "white",
    padding: "18px",
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.06)"
  },

  iconCircle: {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    background: "#1B5E20",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white"
  },

  infoTitle: {
    fontSize: "14px",
    color: "#1B5E20",
    marginBottom: "4px"
  },

  infoText: {
    fontSize: "13px",
    color: "#666"
  },

  /* FORM */
  formCard: {
    background: "white",
    padding: "35px",
    borderRadius: "20px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.08)"
  },

  formTitle: {
    fontSize: "28px",
    color: "#1B5E20",
    marginBottom: "10px"
  },

  formSubtitle: {
    color: "#666",
    fontSize: "14px",
    marginBottom: "25px",
    lineHeight: "1.7"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },

  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px"
  },

  input: {
    padding: "14px",
    borderRadius: "12px",
    border: "1px solid #DDD",
    outline: "none",
    background: "#FAFAFA",
    fontSize: "14px"
  },

  textarea: {
    padding: "14px",
    borderRadius: "12px",
    border: "1px solid #DDD",
    background: "#FAFAFA",
    resize: "none",
    fontSize: "14px"
  },

  button: {
    padding: "14px",
    border: "none",
    borderRadius: "12px",
    background: "linear-gradient(135deg,#1B5E20,#2E7D32)",
    color: "white",
    fontWeight: "600",
    cursor: "pointer"
  },

  /* BOTTOM */
  imageSection: {
    position: "relative",
    minHeight: "40vh",
    backgroundImage:
      "url('https://t4.ftcdn.net/jpg/05/33/54/05/360_F_533540585_SLJKH9BO52zAmiHC6hJ7lgHtTcrJfAOg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "60px 10%"
  },

  imageOverlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.6)"
  },

  imageContent: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    maxWidth: "700px"
  },

  imageTitle: {
    color: "white",
    fontSize: "36px",
    marginBottom: "15px"
  },

  imageText: {
    color: "#EAEAEA",
    lineHeight: "1.8"
  }

};

export default Contact;