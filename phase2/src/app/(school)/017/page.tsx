import { PlaceholderPage } from "@/components/shared/PlaceholderPage";
import { componentsRegistry } from "@/lib/components-registry";

const meta = componentsRegistry.find((c) => c.id === "017")!;

export default function Component017Page() {
  return <PlaceholderPage meta={meta} />;
}
