import { Container } from '@mui/material'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <Container
      maxWidth="lg"
      style={{
        minWidth: "90vw",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <AppRoutes />
    </Container>
  );
}

export default App;
