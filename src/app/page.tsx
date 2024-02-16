import PageTitle from "../components/PageTitle";
import Card from "../components/Card";
import { DataProvider } from "../context";

export default function Home() {
  return (
    <DataProvider>
      <PageTitle />
      <Card />
    </DataProvider>
  );
}
