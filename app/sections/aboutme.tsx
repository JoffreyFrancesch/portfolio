import Hello from "app/components/hello";
import Image from "next/image";
import profilePic from "/public/images/PP_1000.jpg"

export default function AboutMe() {
    return (
        <section>
            <Image src={profilePic} alt="profile picture" className="profile-img" />
            <Hello />
            <p className="mb-4">
                {`I'm software engineer and certified scrum master. 
                Passionate about software development and developing projects.
                Development have never been easier than today, but writing good code is hard.
                Thanks to craft principales I try to build the best and maintainable products for the future.
                Sharing my knowledge and learning from others is a key for me.`}
            </p>
        </section>
    )
}