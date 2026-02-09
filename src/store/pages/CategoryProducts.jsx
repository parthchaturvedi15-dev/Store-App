import { useParams } from "react-router-dom";

export default function CategoryProducts() {
  const { category } = useParams();

  return (
    <section className="py-12">
      <h1 className="text-3xl font-semibold capitalize mb-6">
        {category}
      </h1>

      {/* fetch category-based products here */}
    </section>
  );
}
