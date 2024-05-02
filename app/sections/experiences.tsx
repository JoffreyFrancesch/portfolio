export default function Experiences() {
    return (
        <section className="mb-8">
            <h2 className="mb-b text-xl font-semibold tracking-tighter">Experiences</h2>
            <div className="mb-2">
                <h3>Project manager & software engineer <span className="text-muted">- Société Générale - Paris (France)</span></h3>
                <p className="text-muted">September 2020 - Today</p>
            </div>
            <div className="mb-4">
                <h3>Full stack developer apprenticeship <span className="text-muted">- Société Générale - Paris (France)</span></h3>
                <p className="text-muted">September 2019 - August 2020</p>
                <div>
                    <p>Projects:</p>
                    <ul>
                        <li className="mb-2 text-justify">
                            {`Development of a web application to digitalize documents related to ITIL process like testing strategy, release strategy and change strategy.
                              Thanks to this application process owner are able to create document template in order to align all strategy documents from the company. 
                              Then users are able to create strategy following the latest offical template and keep following the update of it. The application is developed with a RESTful API in Java Spring boot linked to a PostgreSQL database, and with a web interface in React and Redux.
                              The application is deployed in Kubernetes and deployments are automatized through a CI/CD process with Jenkins.`}</li>
                        <li className="text-justify">
                            {`The team was in charge to promote and manage test management tools like Quality Center or CucumberStudio.
                             In order to be more resilient and more reactive in case of any infrastructure issues.
                             I automate the deployment, the backuping of data and his restoration for our CucumberStudio platform in our internal cloud. 
                             Thanks to a jenkins process we were able to re-create all the infrastruture in less than 10min, and in 30min to have an up and running platform without any data missing.
                             To ease the process and facilitate his maintenance I have developed a Jenkins shared library to interact with our internal cloud APIs.`}
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <h3>Full stack developer internship <span className="text-muted">- Société Générale - Paris (France)</span></h3>
                <p className="text-muted">April 2019 - August 2019</p>
                <div>
                    <p>Project:</p>
                    <ul>
                        <li className="text-justify">
                            {`Development of a web application in order to ease the community manager job.
                            The application was able to interact with the social media application of the company through a RESTful API.
                            Thanks to this application as a community manager your were able to: collect metrics, organize events, track your audience, send emails to your members.
                            This application was developed with Django and deployed with Docker Swarm.`}
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}