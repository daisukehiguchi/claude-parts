import { PlaceholderPage } from "@/components/shared/PlaceholderPage";
import { componentsRegistry } from "@/lib/components-registry";

const meta = componentsRegistry.find((c) => c.id === "014")!;

export default function Component014Page() {
  return <PlaceholderPage meta={meta} />;
}
