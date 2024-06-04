import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Index = () => {
  const navigate = useNavigate();
  const { session, logout } = useSupabaseAuth();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Hello, World!</Text>
      {session ? (
          <>
            <Text>Welcome, {session.user.email}</Text>
            <Button onClick={logout}>Logout</Button>
          </>
        ) : (
          <Button onClick={() => navigate("/login")}>Login</Button>
        )}
      </VStack>
    </Container>
  );
};

export default Index;