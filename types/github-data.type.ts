type GitHubResponse = [
    {
        [key: string]: unknown,
        name: string,
        html_url: string,
        description: string,
        created_at: string,
        pushed_at: string,
        languages_url: string,
        size: number
    }
]

type GitHubData = {
    name: string,
    html_url: string,
    description: string,
    created_at_string: string,
    pushed_at_string: string,
    created_at_number: number,
    pushed_at_number: number,
    languages_url: string,
    size_kb: number,
    size_string: string
}

type GitProps = {
    project: GitHubData
}
