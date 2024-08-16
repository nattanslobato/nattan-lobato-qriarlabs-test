import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <br />
        <h1>Campanhas</h1>
        <br />
        <Link href={"/Campaign"}>
          <h3>Campanha</h3>
        </Link>
        <br />
        <Link href={"/CreateCampaign"}>
          <h3>Criar Campanha</h3>
        </Link>
      </div>
    </main>
  );
}
