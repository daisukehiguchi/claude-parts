import { PlaceholderPage } from "@/components/shared/PlaceholderPage";
import { componentsRegistry } from "@/lib/components-registry";

const meta = componentsRegistry.find((c) => c.id === "020")!;

export default function Component020Page() {
  return <PlaceholderPage meta={meta} />;
}
