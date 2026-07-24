import { PlaceholderPage } from "@/components/shared/PlaceholderPage";
import { componentsRegistry } from "@/lib/components-registry";

const meta = componentsRegistry.find((c) => c.id === "018")!;

export default function Component018Page() {
  return <PlaceholderPage meta={meta} />;
}
