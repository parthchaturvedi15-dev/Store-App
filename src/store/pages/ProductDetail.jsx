import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <section className="py-12">
      {/* fetch product by id */}
      <h1 className="text-3xl font-semibold">Product Details</h1>
    </section>
  );
}
