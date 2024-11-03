export default function ProjectTitle({
    children: title,
}: {
    children: string;
}) {
    return <h3 className="font-medium text-2xl ">{title}</h3>;
}
