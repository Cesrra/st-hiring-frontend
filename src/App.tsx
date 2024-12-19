import { Container } from '@mui/material'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        width: "100%",
        height: "100%",
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
