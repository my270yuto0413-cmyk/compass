import { LegacyHero } from "./LegacyHero";
import { NewHero } from "./NewHero";

const heroVariant = import.meta.env.VITE_HERO_VARIANT === "old" ? "old" : "new";

export function Hero() {
  return heroVariant === "old" ? <LegacyHero /> : <NewHero />;
}
