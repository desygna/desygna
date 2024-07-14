import React from "react";
import { CommonSandpack } from "../components/sandpack";

const App = `import React from "react";
import { $styled } from "@desygna/desygna";

const Button = $styled.button({
  boxSizing: "border-box",
  marginLeft: "10px",
  border: "none",
  borderRadius: 8,
  background: "coral",
  color: "white",
  cursor: "pointer"
});

export type BoxType = {
  fullWidth?: boolean;
  hasBackground?: boolean;
};

const Box = $styled.div<BoxType>(({ fullWidth, hasBackground }) => ({
  boxSizing: "border-box",
  backgroundColor: hasBackground ? "peachpuff" : "transparent",
  color: hasBackground ? "coral" : "black",
  display: fullWidth ? "block" : "inline",
  width: fullWidth ? "100%" : "fit-content",
  marginBottom: "12px",
  padding: "12px"
}));

const Container = $styled.div({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

export default function App() {
  return (
    <Container>
      <Box hasBackground fullWidth>
        1
        <Button>Button</Button>
      </Box>
      <Box hasBackground>
        2
      </Box>
    </Container>
  );
}`;

export const StyledApi = () => {
  return (
    <CommonSandpack
      files={{
        "/App.tsx": App
      }}
    />
  );
};
