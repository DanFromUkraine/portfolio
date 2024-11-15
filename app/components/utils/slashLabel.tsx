export default function PageHeading({ children }: { children: string }) {
  return (
    <h2 className="font-semibold text-3xl">
      <span className="text-purple">/</span> {children}
    </h2>
  );
}
