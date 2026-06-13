import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSummary } from "../services/analyticsService";
import Navbar from "../components/Navbar";

function About() {

  const navigate = useNavigate();

  const standards = [
    {
      code: "ARS 1000-1",
      title: "Systèmes de Gestion et Performances",
      text: "Définit les pratiques de gestion durable, la sécurité des travailleurs, la protection de l'environnement et l'amélioration continue des exploitations.",
      doc: "https://ars1000.conseilcafecacao.ci/wdocs/ars1000-1.pdf",
      image:
      "https://www.cbi.eu/sites/default/files/styles/image_medium/public/2023-07/CBI-2023-tips-to-become-more-socially-responsible-in-the-cocoa-sector-new-figure-6.png"
  },
  {
    code: "ARS 1000-2",
    title: "Qualité et Traçabilité du Cacao",
    text: "Garantit la traçabilité du cacao depuis la parcelle jusqu'à l'exportation grâce à des mécanismes de contrôle et de transparence.",
    doc: "https://ars1000.conseilcafecacao.ci/wdocs/ars1000-2.pdf",
    image:
      "https://farmlogics.com/wp-content/uploads/2021/05/closeup-hands-cocoa-farmer-use-pruning-shears-cut-cocoa-pods-harvest-from-cacao-tree.jpg"
  },
  {
    code: "ARS 1000-3",
    title: "Certification et Audit",
    text: "Encadre les audits, la vérification de conformité, les organismes certificateurs et les processus de certification.",
    doc: "https://ars1000.conseilcafecacao.ci/wdocs/ars1000-3.pdf",
    image:
      "https://www.coeurdexocolat.com/media/certifications.jpg"
  },
  ];

  const workflow = [
  "Enregistrement de l'exploitation",
  "Suivi sur le terrain",
  "Évaluation de conformité",
  "Notation de durabilité",
  "Rapport d'audit"
  ];

  const [impacts, setImpacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

  getSummary()
    .then((res) => {

      const data = res.data;

      setImpacts([
        { stat: data.totalFarmers, label: "Agriculteurs enregistrés" },
        { stat: data.totalFarms, label: "Exploitations suivies" },
        { stat: data.totalMonitoring, label: "Rapports de monitoring" },
        { stat: data.totalEvaluations, label: "Évaluations réalisées" }
      ]);

      setLoading(false);

    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });

}, []);

  return (

    <div style={styles.container}>

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section style={styles.hero}>

        <div style={styles.heroOverlay}></div>

        <div style={styles.heroContent}>

          <h1 style={styles.title}>
          À propos d'ARS Monitor
        </h1>

        <p style={styles.subtitle}>
          Une plateforme intelligente dédiée à la modernisation du suivi des
          exploitations cacaoyères, de l'évaluation de conformité et de la mise
          en œuvre des normes ARS 1000.
        </p>

        </div>

      </section>

      {/* INTRO SECTION */}
      <section style={styles.introSection}>

        <div style={styles.introGrid}>

          <div>

            <span style={styles.sectionBadge}>
              Intelligence Durable
            </span>

            <h2 style={styles.sectionTitle}>
              Transformer le suivi du cacao grâce aux technologies numériques
            </h2>

            <p style={styles.sectionText}>
              ARS Monitor fournit un environnement numérique centralisé pour le suivi
              agricole, l'évaluation environnementale, la gestion de la durabilité et
              l'analyse de conformité.
            </p>

            <p style={styles.sectionText}>
              La plateforme accompagne les auditeurs, coopératives, producteurs et
              acteurs du secteur cacao dans leurs activités de suivi, d'inspection
              et de prise de décision.
            </p>

          </div>

          <div style={styles.imageCard}>

            <img
              src="https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1200&auto=format&fit=crop"
              alt="Cocoa Farm"
              style={styles.image}
            />

          </div>

        </div>

      </section>

      {/* STATS */}
      <section style={styles.statsSection}>

        <div style={styles.statsGrid}>

          {loading ? (
              <p>Chargement des statistiques...</p>
            ) : (
              impacts.map((item, index) => (
                <div key={index} style={styles.statCard}>
                  <h2 style={styles.statNumber}>{item.stat}</h2>
                  <p style={styles.statLabel}>{item.label}</p>
                </div>
              ))
            )}

        </div>

      </section>


      {/* ARS 1000 SECTION */}
        <section style={styles.darkSection}>

        <div style={styles.darkHeader}>

            <span style={styles.darkBadge}>
            Référentiel ARS 1000
            </span>

            <h2 style={styles.darkTitle}>
            Structure des normes de durabilité
            </h2>

            <p style={styles.darkText}>
            Les normes ARS 1000 reposent sur trois piliers fondamentaux :
            la gestion durable des exploitations, la traçabilité du cacao
            et les mécanismes de certification et d'audit.
            </p>

        </div>

        <div style={styles.arsGrid}>

            {standards.map((item, index) => (

            <div
                key={index}
                style={{
                ...styles.arsCard,
                backgroundImage: `url(${item.image})`
                }}
                onClick={() => window.open(item.doc, "_blank")}
            >

                <div style={styles.arsOverlay}></div>

                <div style={styles.arsContent}>

                <span style={styles.arsCode}>
                    {item.code}
                </span>

                <h3 style={styles.arsTitle}>
                    {item.title}
                </h3>

                <p style={styles.arsText}>
                    {item.text}
                </p>

                <span style={styles.arsLink}>
                    Consulter la documentation →
                </span>

                </div>

            </div>

            ))}

        </div>

        </section>

      {/* WORKFLOW */}
      <section style={styles.workflowSection}>

        <div style={styles.workflowHeader}>

          <span style={styles.sectionBadge}>
            Processus d'évaluation
          </span>

          <h2 style={styles.sectionTitle}>
            Fonctionnement de la plateforme
          </h2>

        </div>

        <div style={styles.timeline}>

          {workflow.map((step, index) => (

            <div key={index} style={styles.timelineCard}>

              <div style={styles.timelineNumber}>
                0{index + 1}
              </div>

              <h3 style={styles.timelineTitle}>
                {step}
              </h3>

            </div>

          ))}

        </div>

      </section>

      {/* IMAGE SECTION */}
      <section style={styles.imageSection}>

        <div style={styles.imageOverlay}></div>

        <div style={styles.imageContent}>

          <h2 style={styles.imageTitle}>
            Accompagner la transformation durable du secteur cacao
          </h2>

          <p style={styles.imageText}>
            Du suivi des exploitations à l'évaluation environnementale,
            ARS Monitor contribue à renforcer la transparence,
            la conformité et la durabilité de la filière cacao.
          </p>

        </div>

      </section>

      {/* CTA */}
      <section style={styles.cta}>

        <h2 style={styles.ctaTitle}>
          Prêt à moderniser le suivi de la durabilité agricole ?
        </h2>

        <p style={styles.ctaText}>
          Accédez à des tableaux de bord intelligents, des outils d'évaluation
          et des rapports détaillés pour améliorer la conformité aux normes ARS 1000.
        </p>

        <div style={styles.ctaButtons}>

          <button
            style={styles.primaryBtn}
            onClick={() => navigate("/")}
          >
            Connexion
          </button>

          <button
            style={styles.secondaryBtn}
            onClick={() => navigate("/contact")}
          >
            Contacter l'équipe
          </button>

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

  hero: {
    position: "relative",
    minHeight: "70vh",
    backgroundImage:
      "url('https://www.barry-callebaut.com/sites/default/files/styles/full_screen/public/2022-05/Barry%20Callebaut%20establishes%20R%26D%20cocoa%20farm%20in%20Ecuador_0.jpg?itok=LuR19fLp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "120px 5%"
},

  heroOverlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.55)"
  },

  heroContent: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    maxWidth: "850px"
  },

  title: {
    fontSize: "clamp(2.5rem, 6vw, 4rem)",
    color: "#FFFFFF",
    marginBottom: "20px"
  },

  subtitle: {
    color: "#EAEAEA",
    fontSize: "18px",
    lineHeight: "1.9"
  },

  introSection: {
    padding: "100px 10%"
  },

  introGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "40px",
    alignItems: "center"
  },

  sectionBadge: {
    display: "inline-block",
    padding: "8px 16px",
    borderRadius: "30px",
    background: "#E8F5E9",
    color: "#1B5E20",
    fontSize: "13px",
    fontWeight: "600",
    marginBottom: "20px"
  },

  sectionTitle: {
    fontSize: "clamp(2rem, 5vw, 2.8rem)",
    color: "#1B5E20",
    marginBottom: "20px",
    lineHeight: "1.3"
  },

  sectionText: {
    color: "#555",
    lineHeight: "1.9",
    marginBottom: "18px"
  },

  imageCard: {
    borderRadius: "24px",
    overflow: "hidden",
    boxShadow: "0 15px 40px rgba(0,0,0,0.12)"
  },

  image: {
    width: "100%",
    height: "100%",
    minHeight: "300px",
    maxHeight: "500px",
    objectFit: "cover",
    display: "block"
},
  
  statsSection: {
    padding: "0 10% 100px"
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "25px"
  },

  statCard: {
    background: "white",
    padding: "35px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.06)"
  },

  statNumber: {
    fontSize: "42px",
    color: "#1B5E20",
    marginBottom: "10px"
  },

  statLabel: {
    color: "#666"
  },

  darkSection: {
    background: "#1E1E1E",
    padding: "100px 10%"
  },

  darkHeader: {
    textAlign: "center",
    maxWidth: "850px",
    margin: "0 auto 60px"
  },

  darkBadge: {
    display: "inline-block",
    padding: "8px 16px",
    borderRadius: "30px",
    background: "rgba(255,255,255,0.08)",
    color: "#C9A227",
    fontSize: "13px",
    marginBottom: "20px"
  },

  darkTitle: {
    color: "white",
    fontSize: "42px",
    marginBottom: "20px"
  },

  darkText: {
    color: "#DADADA",
    lineHeight: "1.9"
  },

  arsGrid: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "25px"
},

arsCard: {
  position: "relative",
  height: "320px",
  borderRadius: "20px",
  overflow: "hidden",
  cursor: "pointer",
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: "transform 0.3s ease, box-shadow 0.3s ease"
},

arsOverlay: {
  position: "absolute",
  inset: 0,
  background: "rgba(0,0,0,0.65)"
},

arsContent: {
  position: "relative",
  zIndex: 2,
  padding: "25px",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  height: "80%"
},

arsCode: {
  fontSize: "12px",
  color: "#C9A227",
  fontWeight: "700",
  marginBottom: "8px"
},

arsTitle: {
  fontSize: "18px",
  marginBottom: "10px"
},

arsText: {
  fontSize: "13px",
  color: "#EAEAEA",
  lineHeight: "1.6",
  marginBottom: "15px"
},

arsLink: {
  fontSize: "13px",
  color: "#C9A227",
  fontWeight: "600"
},

  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px"
  },

  card: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    padding: "30px",
    borderRadius: "20px",
    backdropFilter: "blur(10px)"
  },

  cardTitle: {
    color: "#C9A227",
    marginBottom: "15px"
  },

  cardText: {
    color: "#EAEAEA",
    lineHeight: "1.8",
    fontSize: "14px"
  },

  workflowSection: {
    padding: "100px 10%"
  },

  workflowHeader: {
    textAlign: "center",
    marginBottom: "50px"
  },

  timeline: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px"
},

  timelineCard: {
    background: "white",
    padding: "35px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)"
  },

  timelineNumber: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "#1B5E20",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto 20px",
    fontWeight: "bold"
  },

  timelineTitle: {
    color: "#444"
  },

  imageSection: {
    position: "relative",
    minHeight: "60vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&auto=format&fit=crop')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px 10%"
  },

  imageOverlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.55)"
  },

  imageContent: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    maxWidth: "800px"
  },

  imageTitle: {
    fontSize: "42px",
    color: "white",
    marginBottom: "20px"
  },

  imageText: {
    color: "#EAEAEA",
    lineHeight: "1.9"
  },

  cta: {
    padding: "100px 10%",
    textAlign: "center",
    background: "white"
  },

  ctaTitle: {
    fontSize: "42px",
    color: "#1B5E20",
    marginBottom: "20px"
  },

  ctaText: {
    maxWidth: "750px",
    margin: "0 auto 35px",
    color: "#666",
    lineHeight: "1.9"
  },

  ctaButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap"
},

  primaryBtn: {
    padding: "14px 30px",
    border: "none",
    borderRadius: "10px",
    background: "#1B5E20",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
    minWidth: "180px"
},

  secondaryBtn: {
    padding: "14px 30px",
    border: "1px solid #DDD",
    borderRadius: "10px",
    background: "white",
    color: "#333",
    fontWeight: "600",
    cursor: "pointer",
    minWidth: "180px"
}

};

export default About;