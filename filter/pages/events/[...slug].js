import { useRouter } from "next/router";

function FilterdEventsPage() {
  const router = useRouter();

  console.log(router.query.slug);

  return (
    <div>
      <h1>Filtered Events Page</h1> 
    </div>
  );
}

export default FilterdEventsPage;
