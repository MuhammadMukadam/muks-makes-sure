import profile from "./assets/profile.jpg";
export default function App() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        
        <h1 style={styles.title}>Muks Makes Sure</h1>
        <div style={styles.blueLine}></div>
        <p style={styles.subtitle}>
          Short-Term Insurance Specialist<br />
          Gauteng • Serving South Africa
        </p>

      <img src={profile} alt="Muks" style={styles.profileImage} />

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>What I Cover</h2>
          <ul style={styles.list}>
            <li>Business Insurance</li>
            <li>Guesthouses</li>
            <li>Logistics Companies</li>
            <li>Beauty & Wellness</li>
            <li>Engineering Firms</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Request a Callback</h2>

          <form onSubmit={(e) => e.preventDefault()} style={styles.form}>
            <input style={styles.input} placeholder="Full Name" />
            <input style={styles.input} placeholder="Phone Number" />
            <input style={styles.input} placeholder="Email (optional)" />

            <select style={styles.input}>
              <option>What do you need cover for?</option>
              <option>Business Insurance</option>
              <option>Guesthouse</option>
              <option>Logistics</option>
              <option>Beauty & Wellness</option>
              <option>Engineering</option>
              <option>Other</option>
            </select>

            <button style={styles.button}>
              Get a Callback
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

const styles = {
  profileImage: {
  width: "200px",
  height: "200px",
  objectFit: "cover",
  borderRadius: "15px",
  marginBottom: "40px",
  border: "2px solid #00bcd4"
},
  page: {
    backgroundColor: "#0b0b0b",
    minHeight: "100vh",
    color: "white",
    fontFamily: "Arial, sans-serif",
    padding: "40px 20px",
    textAlign: "center"
  },
  container: {
    maxWidth: "700px",
    margin: "0 auto"
  },
  title: {
    fontSize: "48px",
    margin: 0
  },
  blueLine: {
    height: "6px",
    width: "150px",
    backgroundColor: "#00bcd4",
    margin: "15px auto"
  },
  subtitle: {
    color: "#bbbbbb",
    marginBottom: "40px"
  },
  photoPlaceholder: {
    height: "200px",
    backgroundColor: "#1a1a1a",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "40px",
    color: "#666"
  },
  section: {
    backgroundColor: "#111",
    padding: "25px",
    borderRadius: "15px",
    marginBottom: "30px"
  },
  sectionTitle: {
    marginBottom: "15px"
  },
  list: {
    listStyle: "none",
    padding: 0,
    lineHeight: "1.8"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #333",
    backgroundColor: "#0f0f0f",
    color: "white"
  },
  button: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#00bcd4",
    fontWeight: "bold",
    cursor: "pointer"
  }
};