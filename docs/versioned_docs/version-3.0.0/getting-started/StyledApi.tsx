import React from "react";
import { CommonSandpack } from "../components/sandpack";

const App = `import React from "react";
import { styled } from "@desygna/desygna";

const Button = styled.button({
  marginLeft: "10px",
  border: "none",
  borderRadius: 8,
  background: "blue",
  color: "white",
  cursor: "pointer"
});

export type BoxType = {
  fullWidth?: boolean;
};

const Box = styled.div<BoxType>(({ fullWidth }) => ({
  backgroundColor: "red",
  color: "white",
  display: fullWidth ? "block" : "inline",
  width: fullWidth ? "100%" : "auto"
}));

export default function App() {
  return (
    <Box>
      <Box fullWidth>
        1
        <Button>Button</Button>
      </Box>
      <Box>
        2
      </Box>
    </Box>
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
