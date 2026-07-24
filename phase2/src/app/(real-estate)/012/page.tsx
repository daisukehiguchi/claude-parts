import { PlaceholderPage } from "@/components/shared/PlaceholderPage";
import { componentsRegistry } from "@/lib/components-registry";

const meta = componentsRegistry.find((c) => c.id === "012")!;

export default function Component012Page() {
  return <PlaceholderPage meta={meta} />;
}
