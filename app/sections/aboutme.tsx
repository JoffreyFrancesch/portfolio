import Hello from "app/components/hello";
import Image from "next/image";
import profilePic from "../../public/images/PP_1000.jpg"

export default function AboutMe() {
    return (
        <section className="mb-8">
            <Image src={profilePic} alt="profile picture" className="profile-img" />
            <Hello />
            <div className="mb-4 text-muted">
                <p>📍 Currently based in Paris (France)</p>
                <p>📧 Contact me: <a href="mailto:joffrey.franceschini@icloud.com">joffrey.franceschini@icloud.com</a></p>
                <a href="https://www.linkedin.com/in/joffrey-franceschini/" target="_blank">👨🏻‍💻 Check my Linkedin profile</a>
            </div>
            <p>
                {`I'm software engineer and certified scrum master. 
                Passionate about software development and developing projects.
                Development have never been easier than today, but writing good code is hard.
                Thanks to craft principales I try to build the best and maintainable products for the future.
                Sharing my knowledge and learning from others is a key for me.`}
            </p>
        </section>
    )
}