import type { Project } from '@lib/types.d.ts';
import projects from './projects.json';

export default async function ProjectsPage() {
    return (
        <div>
            ProjectsPage
            <ProjectsGallery projects={projects.projects} />
        </div>
    )
}


interface ProjectsGalleryProps {
    projects: Project[];
}


function ProjectsGallery({projects} : ProjectsGalleryProps) {
    return (
        projects.map((project, idx) => {
            return (
                <div key={idx}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.href}>link</a>
                </div>
            )
        })
    )
}