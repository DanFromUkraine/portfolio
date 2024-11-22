export default function TechStackItem({
  techStackItem: content,
}: {
  techStackItem: string;
}) {
  return <p className="text-secondary">{content}</p>;
}
