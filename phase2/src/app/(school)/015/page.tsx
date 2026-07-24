import { PlaceholderPage } from "@/components/shared/PlaceholderPage";
import { componentsRegistry } from "@/lib/components-registry";

const meta = componentsRegistry.find((c) => c.id === "015")!;

export default function Component015Page() {
  return <PlaceholderPage meta={meta} />;
}
