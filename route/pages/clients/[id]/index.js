import { useRouter } from "next/router";

function ClientsProjectPage() {
  const router = useRouter();

  function handleLoadProject() {
    router.push({
        pathname: "/clients/[id]/[clientprojectid]",
        query: { id: "max", clientprojectid: "projecta" },
        });
    }

  return (
    <div>
      <h1>Clients Project Page</h1>
      <button onClick={handleLoadProject}>Load Proj A</button>
    </div>
  );
}

export default ClientsProjectPage;
