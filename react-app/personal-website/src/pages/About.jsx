import Helmet from "react-helmet"
import EmploymentBlock from "../components/EmploymentBlock.jsx"
import EducationBlock from "../components/EducationBlock.jsx"
import ResearchBlock from "../components/ResearchBlock.jsx"

function About() {
    return (
        <>
            <Helmet>
                <title>Robert Bray | About</title>
                <meta name="description" content="About me."/>
            </Helmet>
            <h2>About</h2>
            <div class="flex-row">
                <div class="flex-col-50">
                    <h3>Employment</h3>
                    <EmploymentBlock 
                        title="AI/ML Engineer" 
                        company="Addiguru" 
                        timePeriod="Jan 2024 - Present"
                        description=""
                    />
                    <EmploymentBlock 
                        title="Artificial Intelligence Intern" 
                        company="Addiguru" 
                        timePeriod="May 2023 - Dec 2023"
                        description=""
                    />
                    <EmploymentBlock 
                        title="Graduate Teaching / Research Assistant" 
                        company="University of Tennessee, Knoxville" 
                        timePeriod="Aug 2022 - Jul 2023"
                        description="Research: Managing the technical aspects of projects in a social robotics lab at the University of Tennessee, Knoxville. Developing Raspberry Pi-based programs in Python for affordable social robot solutions from beginning to end. Creating Android-based applications in Kotlin and Java for social robots, including Pepper, to assist people with Alzheimer's disease and related dementia's (ADRD). Creating goals and timelines for our project teams. Training and guiding new programmers. Researching new technologies that can be used to enhance and improve our applications.

Teaching: Conducting lab sessions, helping students learn and understand material in office hours, and grading for Data Structures and Algorithms II."
                    />
                    <EmploymentBlock 
                        title="Undergraduate Research Assistant" 
                        company="University of Tennessee, Knoxville" 
                        timePeriod="Mar 2021 - Jul 2022"
                        description="Developing applications in Kotlin and Python for the Pepper robot created by Softbank Robotics to assess the cognitive abilities and self-care habits of people with alzheimers disease and related dimentias."
                    />
                </div>
                <div class="flex-col-50">
                    <h3>Education</h3>
                    <EducationBlock degreeLevel="M.S." major="Computer Science" year="2023" school="University of Tennessee, Knoxville"/>
                    <EducationBlock degreeLevel="B.S." major="Computer Science" year="2022" school="University of Tennessee, Knoxville"/>

                    <h3>Research</h3>
                    <ResearchBlock title="title" date="date" authors={["1", "2"]}/>
                </div>
            </div>
        </>
    );
}

export default About;