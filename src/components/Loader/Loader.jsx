function Loader() {
  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0,
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      zIndex: 9999,
      fontSize: "2rem"
    }}>
      Loading...
    </div>
  );
}

export default Loader;
