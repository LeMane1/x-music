import ContainerLayout from "@/lib/ContainerLayout";
import HelloBlock from "@/components/hello-block";

export default function Home() {
  return (
    <main>
      <ContainerLayout>
        <HelloBlock/>
      </ContainerLayout>
    </main>
  );
}
