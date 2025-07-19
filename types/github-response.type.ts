export type GitHubResponse = [
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
];
