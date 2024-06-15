import Helmet from "react-helmet"
import EmploymentBlock from "../components/EmploymentBlock.jsx"
import EducationBlock from "../components/EducationBlock.jsx"
import ResearchBlock from "../components/ResearchBlock.jsx"
import Collapsible from "../components/Collapsible.jsx"
import ContactForm from "./ContactForm.jsx"

function About() {
    return (
        <>
            <Helmet>
                <title>Robert Bray | About</title>
                <meta name="description" content="About me."/>
            </Helmet>
            {/* <h2>About</h2> */}
            <div>
                <h2>Robert Bray</h2>
            </div>
            <div class="flex-row">
                <div class="flex-col-50">
                    <h3>Employment</h3>
                    <EmploymentBlock 
                        title="AI/ML Engineer" 
                        company="Addiguru" 
                        timePeriod="Jan 2024 - Present"
                        description="Developing algorithms for in-situ additive manufacturing process monitoring using computer vision and AI techniques.
                        Designing and implementing features for .NET applications. Guiding new customers through using software in addition to troubleshooting
                        software issues related to customer systems."
                    />
                    <EmploymentBlock 
                        title="Artificial Intelligence Intern" 
                        company="Addiguru" 
                        timePeriod="May 2023 - Dec 2023"
                        description="Developed algorithms for in-situ additive manufacturing process monitoring using computer vision and AI techniques.
                        Created and annotated datasets for training deep learning segmentation and object detection models."
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
                    <h3>Research</h3>
                    <ResearchBlock 
                        title="Developing a Flexible System for a Friendly Robot to Ease Dementia (FRED) Using Cloud Technologies and Software Design Patterns" 
                        date="2023" 
                        authors={["Robert Bray"]}
                        publication="Master's Thesis"
                    />
                    <ResearchBlock 
                        title="Development and Assessment of a Friendly Robot to Ease Dementia" 
                        date="2022" 
                        authors={["Robert Bray", "Luke MacDougall", "Cody Blankenship", "Kimberly Mitchell", "Fengpei Yuan", "Sylvia Cerel-Suhl", "Xiaopeng Zhao"]}
                        publication="International Conference on Social Robotics"
                    />

                    <h3>Education</h3>
                    <EducationBlock degreeLevel="M.S." major="Computer Science" year="2023" school="University of Tennessee, Knoxville"/>
                    <EducationBlock degreeLevel="B.S." major="Computer Science" year="2022" school="University of Tennessee, Knoxville"/>
                </div>
            </div>
            <hr/>
            <div class="flex-row">
                <div class="flex-col-50">
                    <h3>Personal Projects</h3>
                    <div>
                        <b>Convert Me! (under development)</b>
                        <p>
                            React-based website for converting many different file types.
                        </p>
                    </div>
                </div>
            </div>
            <hr/>
            <div class="flex-row">
                <div class="flex-col-100">
                    <h2>Contact Me</h2>
                    <ContactForm/>
                </div>
            </div>
        </>
    );
}

export default About;