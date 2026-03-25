import { StyleLibrary } from "@/components/shell/style-library";
import { Container } from "@/components/ui/container";
import { styles } from "@/lib/themes";

export default function Home() {
  return (
    <main style={styles[0]?.vars} className="min-h-screen bg-[var(--theme-bg)] text-[var(--theme-text)]">
      <section id="library" className="py-10 sm:py-16">
        <Container>
          <StyleLibrary styles={styles} />
        </Container>
      </section>
    </main>
  );
}
