import AboutMe from "./sections/aboutme";
import Education from "./sections/education";
import Experiences from "./sections/experiences";
import Technologies from "./sections/technologies";
import Trainings from "./sections/trainings";

export default function Page() {
  return (
    <>
      <AboutMe />
      <Technologies />
      <Experiences />
      <Trainings />
      <Education />
    </>
  )
}
