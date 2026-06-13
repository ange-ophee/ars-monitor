import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {

  const navigate = useNavigate();

  const objectives = [
    {
      title: "Surveillance de la Ferme",
      text: "Suivi des inspections agricoles, des conditions de production et des observations en matière de durabilité dans les plantations de cacao."
    },
    {
      title: "Évaluation de la Conformité",
      text: "Évaluer les niveaux de conformité sur la base des normes de durabilité agricole ARS 1000."
    },
    {
      title: "Suivi de la Durabilité",
      text: "Surveillez en temps réel les pratiques environnementales et les activités agricoles durables."
    },
    {
      title: "Intelligence Agricole",
      text: "Générer des analyses, des rapports et des tendances de conformité pour faciliter la prise de décision."
    }
  ];

  const benefits = [
    "Surveillance Centralisée",
    "Évaluations en Temps Réel",
    "Notation de Conformité",
    "Rapports Prêts pour l'Audit"
  ];

  const modules = [
    "Tableau de Bord",
    "Agriculteurs",
    "Fermes",
    "Surveillance",
    "Évaluations",
    "Rapports"
  ];

  const stats = [
    {
      number: "250+",
      label: "Fermes Enregistrées"
    },
    {
      number: "120+",
      label: "Évaluations de Conformité"
    },
    {
      number: "98%",
      label: "Précision de la Surveillance"
    },
    {
      number: "15+",
      label: "Coopératives Agricoles"
    }
  ];

  return (

    <div style={styles.container}>

      <Navbar />

      {/* HERO */}
      <section style={{ ...styles.hero, paddingTop: "100px" }}>

        <div style={styles.overlay}></div>

        <div style={styles.heroContent} className="fade-up">

          <div style={styles.badge}>
            ARS 1000 Intelligence en Durabilité
          </div>

          <h1 style={styles.title}>
            ARS Monitor
          </h1>

          <p style={styles.subtitle}>
            Plateforme de Suivi et d'Évaluation Agricole
          </p>

          <p style={styles.description}>
            Une plateforme professionnelle d'intelligence en matière de durabilité conçue
            pour soutenir le suivi des exploitations cacaoyères, l'évaluation de la conformité,
            l'évaluation environnementale et la mise en œuvre de la norme ARS 1000.
          </p>

          <div style={styles.heroButtons}>

            <button
              style={styles.primaryBtn}
              onClick={() => navigate("/login")}
            >
              Se connecter
            </button>

            <button
              style={styles.secondaryBtn}
              onClick={() => navigate("/login")}
            >
              S'inscrire
            </button>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section style={styles.statsSection}>

        <div style={styles.statsGrid}>

          {stats.map((stat, index) => (

            <div
              key={index}
              style={styles.statCard}
              className="card-hover"
            >

              <h2 style={styles.statNumber}>
                {stat.number}
              </h2>

              <p style={styles.statLabel}>
                {stat.label}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* OBJECTIVES */}
      <section style={styles.section}>

        <div style={styles.sectionHeader}>

          <h2 style={styles.sectionTitle}>
            Objectifs de la plateforme
          </h2>

          <p style={styles.sectionText}>
           ARS Monitor centralise la surveillance agricole,
           l'évaluation de la durabilité et les informations sur la conformité.
          </p>

        </div>

        <div style={styles.grid}>

          {objectives.map((item, index) => (

            <div
              key={index}
              style={styles.card}
              className="card-hover fade-up"
            >

              <div style={styles.cardIcon}></div>

              <h3 style={styles.cardTitle}>
                {item.title}
              </h3>

              <p style={styles.cardText}>
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* ARS OVERVIEW */}
      <section style={styles.darkSection}>

        <div style={styles.overviewContainer}>

          <div className="fade-up">

            <h2 style={styles.lightTitle}>
              Normes de Durabilité ARS 1000
            </h2>

            <p style={styles.lightText}>
              ARS Monitor soutient la mise en œuvre de normes agricoles
              durables grâce à un suivi structuré des exploitations agricoles,
              des inspections environnementales, une notation de conformité et
              des renseignements d'évaluation.
            </p>

            <div style={styles.overviewBox}>

              <div style={styles.overviewItem}>
                Conformité en Développement Durable
              </div>

              <div style={styles.overviewItem}>
                Surveillance du Cacao
              </div>

              <div style={styles.overviewItem}>
                Évaluation Environnementale
              </div>

              <div style={styles.overviewItem}>
                Audit Agricole
              </div>

            </div>

          </div>

          <img
            src="https://www.idhsustainabletrade.com/uploaded/2016/04/Cocoa-pods-e1534499992924-1440x450-c-default.jpg?x51159&x51159"
            alt="Cocoa Farm"
            style={styles.overviewImage}
            className="fade-up"
          />

        </div>

      </section>

      {/* BENEFITS */}
      <section style={styles.section}>

        <div style={styles.sectionHeader}>

          <h2 style={styles.sectionTitle}>
            Avantages de la Plateforme
          </h2>

          <p style={styles.sectionText}>
            Des outils intelligents conçus pour une agriculture durable,
            d'évaluation et de suivi de l'excellence.
          </p>

        </div>

        <div style={styles.benefitsGrid}>

          {benefits.map((benefit, index) => (

            <div
              key={index}
              style={styles.benefitCard}
              className="card-hover fade-up"
            >

              <div style={styles.benefitIcon}></div>

              <h3 style={styles.benefitText}>
                {benefit}
              </h3>

            </div>

          ))}

        </div>

      </section>

      {/* MODULES */}
      <section style={styles.modulesSection}>

        <div style={styles.sectionHeader}>

          <h2 style={styles.whiteTitle}>
            Modules Système
          </h2>

          <p style={styles.whiteText}>
            Des modules intelligents alimentant les flux de travail de surveillance et d'évaluation.
          </p>

        </div>

        <div style={styles.moduleGrid}>

          {modules.map((module, index) => (

            <div
              key={index}
              style={styles.moduleCard}
              className="card-hover fade-up"
            >

              <h3 style={styles.moduleTitle}>
                {module}
              </h3>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}
      <section style={styles.ctaSection}>

        <div style={styles.ctaOverlay}></div>

        <div style={styles.ctaContent}>

          <h2 style={styles.ctaTitle}>
            Prêt à accéder à la plateforme ARS Monitor ?
          </h2>

          <p style={styles.ctaText}>
            Accédez en toute sécurité aux tableaux de bord de suivi,
            aux systèmes d'évaluation, aux analyses de durabilité,
            et aux outils de veille agricole.
          </p>

          <div style={styles.heroButtons}>

            <button
              style={styles.primaryBtn}
              onClick={() => navigate("/login")}
            >
              Se connecter
            </button>

            <button
              style={styles.secondaryBtn}
              onClick={() => navigate("/login")}
            >
              S'inscrire
            </button>

          </div>

        </div>

      </section>

    </div>

  );

}

const styles = {

  container: {
    background: "#F6F7F9",
    fontFamily: "Segoe UI, sans-serif",
    color: "#2E2E2E",
    overflowX: "hidden"
  },

  hero: {
    position: "relative",
    minHeight: "100vh",
    background: `
      linear-gradient(
        rgba(10, 20, 10, 0.78),
        rgba(20, 20, 20, 0.82)
      ),
      url("https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1974&auto=format&fit=crop")
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px 10%",
    overflow: "hidden"
  },

  overlay: {
    position: "absolute",
    width: "550px",
    height: "550px",
    background: "rgba(255,255,255,0.05)",
    borderRadius: "50%",
    top: "-120px",
    right: "-120px"
  },

  heroContent: {
    position: "relative",
    zIndex: 2,
    maxWidth: "850px",
    textAlign: "center",
    color: "white"
  },

  badge: {
    display: "inline-block",
    padding: "10px 18px",
    background: "rgba(255,255,255,0.12)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "50px",
    marginBottom: "25px",
    fontSize: "14px",
    backdropFilter: "blur(10px)"
  },

  title: {
    fontSize: "82px",
    fontWeight: "700",
    marginBottom: "15px",
    color: "#C9A227",
    letterSpacing: "1px"
  },

  subtitle: {
    fontSize: "26px",
    marginBottom: "25px"
  },

  description: {
    fontSize: "17px",
    lineHeight: "1.9",
    color: "#EAEAEA",
    maxWidth: "720px",
    margin: "0 auto 40px auto"
  },

  heroButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "18px",
    flexWrap: "wrap"
  },

  primaryBtn: {
    padding: "15px 34px",
    border: "none",
    borderRadius: "12px",
    background: "#C9A227",
    color: "#1B1B1B",
    fontWeight: "700",
    cursor: "pointer",
    fontSize: "15px",
    transition: "0.3s"
  },

  secondaryBtn: {
    padding: "15px 34px",
    border: "1px solid rgba(255,255,255,0.25)",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.08)",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
    backdropFilter: "blur(10px)"
  },

  statsSection: {
    marginTop: "-70px",
    padding: "0 10% 90px 10%",
    position: "relative",
    zIndex: 5
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "25px"
  },

  statCard: {
    background: "white",
    padding: "35px",
    borderRadius: "24px",
    textAlign: "center",
    boxShadow: "0 20px 40px rgba(0,0,0,0.08)"
  },

  statNumber: {
    fontSize: "44px",
    color: "#1B5E20",
    marginBottom: "10px",
    fontWeight: "700"
  },

  statLabel: {
    color: "#666",
    fontSize: "15px"
  },

  section: {
    padding: "100px 10%",
    background: `
      linear-gradient(
        rgba(10, 20, 10, 0.82),
        rgba(10, 20, 10, 0.85)
      ),
      url("https://static.vecteezy.com/system/resources/thumbnails/069/923/282/small/raw-cocoa-beans-in-industrial-vat-with-workers-in-food-processing-factory-photo.jpeg")
    `,
    backgroundSize: "cover",
    overflow: "hidden"
  },

  sectionHeader: {
    textAlign: "center",
    marginBottom: "60px"
  },

  sectionTitle: {
    fontSize: "42px",
    color: "#1B5E20",
    marginBottom: "15px"
  },

  sectionText: {
    color: "#666",
    maxWidth: "750px",
    margin: "auto",
    lineHeight: "1.8"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "30px"
  },

  card: {
    background: "white",
    padding: "35px",
    borderRadius: "24px",
    boxShadow: "0 12px 35px rgba(0,0,0,0.06)",
    borderTop: "4px solid #C9A227",
    transition: "all 0.35s ease",
    cursor: "pointer"
  },

  cardIcon: {
    width: "55px",
    height: "55px",
    borderRadius: "16px",
    background: "#1B5E20",
    marginBottom: "20px"
  },

  cardTitle: {
    color: "#5D4037",
    marginBottom: "15px",
    fontSize: "22px"
  },

  cardText: {
    color: "#555",
    lineHeight: "1.9",
    fontSize: "14px"
  },

  darkSection: {
    background: "#1E1E1E",
    padding: "110px 10%"
  },

  overviewContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "50px",
    alignItems: "center"
  },

  lightTitle: {
    color: "#C9A227",
    fontSize: "42px",
    marginBottom: "20px"
  },

  lightText: {
    color: "#DADADA",
    lineHeight: "1.9",
    marginBottom: "35px"
  },

  overviewBox: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "18px"
  },

  overviewItem: {
    background: "rgba(255,255,255,0.06)",
    padding: "20px",
    borderRadius: "16px",
    color: "white",
    textAlign: "center",
    border: "1px solid rgba(255,255,255,0.08)"
  },

  overviewImage: {
    width: "100%",
    height: "460px",
    objectFit: "cover",
    borderRadius: "28px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.35)"
  },

  benefitsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "25px"
  },

  benefitCard: {
    background: "white",
    borderRadius: "22px",
    padding: "35px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
    transition: "all 0.35s ease",
    cursor: "pointer"
  },

  benefitIcon: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "#1B5E20",
    margin: "0 auto 20px auto"
  },

  benefitText: {
    color: "#444",
    fontSize: "18px"
  },

  modulesSection: {
    background: "#F1F4F2",
    padding: "100px 10%"
  },

  whiteTitle: {
    fontSize: "42px",
    color: "#1B5E20",
    marginBottom: "15px"
  },

  whiteText: {
    color: "#666",
    maxWidth: "700px",
    margin: "auto",
    lineHeight: "1.8"
  },

  moduleGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "25px"
  },

  moduleCard: {
    background: "white",
    padding: "35px",
    borderRadius: "22px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
    borderBottom: "4px solid #1B5E20",
    transition: "all 0.35s ease",
    cursor: "pointer"
  },

  moduleTitle: {
    color: "#5D4037",
    fontSize: "20px"
  },

  ctaSection: {
    position: "relative",
    padding: "120px 10%",
    textAlign: "center",
    background: `
      linear-gradient(
        rgba(10, 20, 10, 0.82),
        rgba(10, 20, 10, 0.85)
      ),
      url("https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&w=1974&auto=format&fit=crop")
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    overflow: "hidden"
  },

  ctaOverlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.25)"
  },

  ctaContent: {
    position: "relative",
    zIndex: 2,
    color: "white"
  },

  ctaTitle: {
    fontSize: "48px",
    marginBottom: "20px"
  },

  ctaText: {
    maxWidth: "760px",
    margin: "0 auto 40px auto",
    color: "#EAEAEA",
    lineHeight: "1.9"
  }

};

export default Home;