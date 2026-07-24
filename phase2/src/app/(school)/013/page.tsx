import { PlaceholderPage } from "@/components/shared/PlaceholderPage";
import { componentsRegistry } from "@/lib/components-registry";

const meta = componentsRegistry.find((c) => c.id === "013")!;

export default function Component013Page() {
  return <PlaceholderPage meta={meta} />;
}
