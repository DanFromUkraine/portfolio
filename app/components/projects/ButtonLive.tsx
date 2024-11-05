import Button from "../utils/Button";

export default function ButtonLive({ githubUrl }: { githubUrl: string }) {
    return (
        <Button>
            <a href={githubUrl}>
                Live {"<"}~{">"}
            </a>
        </Button>
    );
}
