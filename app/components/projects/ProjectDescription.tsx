export default function ProjectDescription({
    children: description,
}: {
    children: string;
}) {
    return <p className="text-secondary ">{description}</p>;
}
