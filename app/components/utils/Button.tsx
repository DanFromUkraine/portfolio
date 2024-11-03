export default function Button({ children }: { children: string }) {
    return <button className="px-4 py-2 font-medium purple-border w-fit h-fit hover:bg-purple !bg-opacity-20">{children}</button>;
}
