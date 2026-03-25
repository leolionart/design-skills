import { Container } from "@/components/ui/container";
import { Surface } from "@/components/ui/surface";

export default function ThemeLoading() {
  return (
    <main className="min-h-screen bg-[#f5efe6] text-[#1c1713]">
      <Container className="py-10 sm:py-16">
        <div className="space-y-6 animate-pulse">
          <div className="h-3 w-40 rounded-full bg-black/10" />
          <div className="h-16 max-w-4xl rounded-[28px] bg-black/10" />
          <div className="h-6 max-w-2xl rounded-full bg-black/10" />
          <div className="grid gap-4 lg:grid-cols-3">
            <Surface className="h-48 bg-white/50">
              <div className="h-full" />
            </Surface>
            <Surface className="h-48 bg-white/50">
              <div className="h-full" />
            </Surface>
            <Surface className="h-48 bg-white/50">
              <div className="h-full" />
            </Surface>
          </div>
        </div>
      </Container>
    </main>
  );
}
