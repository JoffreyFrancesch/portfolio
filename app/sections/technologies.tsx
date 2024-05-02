function Badge(props) {
    return (
        <p
            {...props}
            className="mr-1 inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
        />
    );
}

export default function Technologies() {
    const technologies = {
        "languages": [
            {
                "name": "Java",
            },
            {
                "name": "JavaScript"
            },
            {
                "name": "TypeScript"
            },
            {
                "name": "Python"
            },
            {
                "name": "SQL"
            }],
        "frameworks": [{
            "name": "React"
        },
        {
            "name": "SpringBoot"
        }],
        "testing": [
            {
                "name": "Jest"
            },
            {
                "name": "Mocha"
            },
            {
                "name": "Cypress"
            },
            {
                "name": "Testing library"
            },
            {
                "name": "JUnit"
            },
            {
                "name": "AssertJ"
            },
            {
                "name": "Mockito"
            },
            {
                "name": "K6"
            }],
        "ci/cd": [{
            "name": "Git"
        },
        {
            "name": "Github"
        },
        {
            "name": "Github Actions"
        },
        {
            "name": "Sonar"
        },
        {
            "name": "Jenkins"
        },
        {
            "name": "Docker"
        },
        {
            "name": "Kubernetes"
        },
        {
            "name": "Helm"
        }],
        "others": [{
            "name": "PostgreSQL"
        },
        {
            "name": "Grafana"
        }],
        "practices": [
            {
                "name": "TDD"
            },
            {
                "name": "BDD"
            },
            {
                "name": "Hexagonal architecture"
            }
        ]
    }

    return (
        <section className="mb-8">
            <h2 className="mb-1 text-xl font-semibold tracking-tighter">Technologies</h2>
            <div className="mb-1">
                <h3>Languages</h3>
                {
                    technologies.languages.map((techno) => <Badge key={techno.name}>
                        {techno.name}
                    </Badge>)
                }
            </div>
            <div className="mb-1">
                <h3>Main frameworks & library</h3>
                {
                    technologies.frameworks.map((techno) => <Badge key={techno.name}>
                        {techno.name}
                    </Badge>)
                }
            </div>
            <div className="mb-1">
                <h3>Testing</h3>
                {
                    technologies.testing.map((techno) => <Badge key={techno.name}>
                        {techno.name}
                    </Badge>)
                }
            </div>
            <div className="mb-1">
                <h3>CI/CD</h3>
                {
                    technologies["ci/cd"].map((techno) => <Badge key={techno.name}>
                        {techno.name}
                    </Badge>)
                }
            </div>
            <div className="mb-1">
                <h3>Others</h3>
                {
                    technologies.others.map((techno) => <Badge key={techno.name}>
                        {techno.name}
                    </Badge>)
                }
            </div>
            <div className="mb-1">
                <h3>Pratices</h3>
                {
                    technologies.practices.map((techno) => <Badge key={techno.name}>
                        {techno.name}
                    </Badge>)
                }
            </div>
        </section >
    )
}