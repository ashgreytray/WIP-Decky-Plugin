import { ButtonItem, PanelSection, PanelSectionRow } from "@decky/ui";
import { useState } from "react";
import { startStream, stopStream } from "./plugin";

export default function Content() {
  const [running, setRunning] = useState(false);

  const PC_IP = "192.168.1.50"; //change later migth need to use port forwarding
  const PORT = 5555;

  return (
    <PanelSection title="Gyro Stream">
      <PanelSectionRow>
        <ButtonItem
          onClick={async () => {
            if (!running) {
              await startStream({ ip: PC_IP, port: PORT });
              setRunning(true);
            } else {
              await stopStream({});
              setRunning(false);
            }
          }}
        >
          {running ? "Stop Gyro Stream" : "Start Gyro Stream"}
        </ButtonItem>
      </PanelSectionRow>
    </PanelSection>
  );
}
