export type ProjectData = {
    name: string,
    url: string,
    description: string,
    created_at_string: string,
    pushed_at_string: string,
    created_at_number: number,
    pushed_at_number: number,
    size_kb: number,
    size_string: string,
    languages: string[],
    border_color: string
};

export type ProjectProps = {
    props: ProjectData
};
