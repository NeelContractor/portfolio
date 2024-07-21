import { About } from "@/components/About";
import { AppBar } from "@/components/AppBar";
import { BoxGrid } from "@/components/BoxGrid";



export default function Home() {
  return (
    <div>
      <AppBar />
      <About />
      <BoxGrid />
    </div>
  );
}
