import ContainerLayout from "@/lib/ContainerLayout";
import HelloBlock from "@/components/hello-block";
import PopularWeekBlock from "@/components/popular-week-block";
import {Stack} from "@mui/material";
import {Suspense} from "react";

export default function Home() {
  return (
    <main>
      <ContainerLayout>
        <Stack direction='column' spacing={4}>
          <HelloBlock/>
          <Suspense>
            <PopularWeekBlock/>
          </Suspense>
        </Stack>
      </ContainerLayout>
    </main>
  );
}
