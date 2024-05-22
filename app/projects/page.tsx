import projects from './projects.json';
import ProjectDisplay from '@components/projectdisplay';

export default async function ProjectsPage() {
    return (
        <div>
            Try clicking on one of them to see the project. \ ˚▽˚ /
            <ProjectDisplay projects={projects.projects} />
        </div>
    )
}

