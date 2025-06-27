import { Sort } from "@/types/sort.enum";
import axios from "axios";

export async function GetGitRepoData() {
    const convertTimeToString = (dateString: string) => {
        const date: Date = new Date(dateString);
        const readableString = date.toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
        return readableString;
    };

    const convertTimeToNumber = (dateString: string) => {
        const date: Date = new Date(dateString);
        return date.getTime();
    };

    const formatSize = (size_kb: number) => {
        if (size_kb < 1000) return `${size_kb} KB`;
        size_kb /= 1000;
        if (size_kb < 1000) return `${size_kb} MB`;
        size_kb /= 1000;
        return `${size_kb} GB`;
    };

    return axios.get('https://api.github.com/users/c-pill/repos')
        .then((response) => {
            const gitResponse: GitHubResponse = response.data;
            const gitData: GitHubData[] = gitResponse.map(({
                name,
                html_url,
                description,
                created_at,
                pushed_at,
                languages_url,
                size
            }) => ({
                name,
                html_url,
                description,
                created_at_string: convertTimeToString(created_at),
                pushed_at_string: convertTimeToString(pushed_at),
                created_at_number: convertTimeToNumber(created_at),
                pushed_at_number: convertTimeToNumber(pushed_at),
                languages_url,
                size_kb: size,
                size_string: formatSize(size)
            }));
            return gitData;
        });
};

export function SortProjects(gitData: GitHubData[], sort: string) {
    switch (sort) {
        case Sort.Newest: 
            gitData.sort((a, b) => b.pushed_at_number - a.pushed_at_number);
            break;
        case Sort.Oldest:
            gitData.sort((a, b) => a.pushed_at_number - b.pushed_at_number);
            break;
        case Sort.Smallest:
            gitData.sort((a, b) => a.size_kb - b.size_kb);
            break;
        case Sort.Largest:
            gitData.sort((a, b) => b.size_kb - a.size_kb);
            break;
        case Sort.Terminal:
            break;
        default:
            break;
    };
};

// export function ProjectTerminal() {
//     useEffect(() => {
//         const terminal = document.getElementById('terminal');
//         const term = new Terminal();
//         term.open(terminal);
//         term.write('sup');
//     });
//     return (
//         <>
//             <head>
//                 <link rel='style_sheets' href='node_modules/@xterm/xterm/css/xterm.css' />
//                 <script src='node_modules/@xterm/xterm/lib/xterm.js'></script>
//             </head>
//             <div id='terminal'></div>
//         </>
//     );
// };
