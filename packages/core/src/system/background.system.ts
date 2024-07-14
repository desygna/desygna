import { system } from "styled-system";

export const $background = system({
  background: {
    scale: "colors",
    property: "background"
  },
  backgroundImage: { property: "backgroundImage" },
  backgroundSize: { property: "backgroundSize" },
  backgroundPosition: { property: "backgroundPosition" },
  backgroundRepeat: { property: "backgroundRepeat" },
  backgroundAttachment: { property: "backgroundAttachment" },
  backgroundClip: { property: "backgroundClip" },
  backgroundOrigin: { property: "backgroundOrigin" }
});
