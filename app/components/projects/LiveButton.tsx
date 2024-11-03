
export default function LiveButton({githubUrl}: {githubUrl: string}) {
  return (
    <a className="px-4 py-2 purple-border w-fit" role="link" href={githubUrl}>
      <span>Live {"<"}~{">"}</span>
    </a>
  )
}
