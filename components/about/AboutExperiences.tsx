import AboutStyles from '@/styles/About.module.css';
import SharedStyles from '@/styles/Shared.module.css';
import Image from 'next/image';
import { Asm, C, Cpp, Cs, Css, Html, Java, Javascript, Python, Sql, Typescript } from '@/components/global/skills/Languages';
import { Anaconda, DevOps, ESLint, Figma, GitHub, Jupyter, Kaggle, Matlab, MicrosoftSqlServer, MSOffice, 
         MySql, OpenAI, Postman, SwaggerUI, VirtualBox, VisualStudio, VisualStudioCode, Weka, MongoDB, 
         Praat,
         MemoQ} from '@/components/global/skills/ToolsAndServices';
import { MongooseODM, ReactJS, NodeJS, SpringBoot, Contentful, NestJS, DotNet } from '@/components/global/skills/Frameworks';

export function UgaAi() {
   return (
      <div className={AboutStyles.experienceContainer}>
         <div className={AboutStyles.content}>
            <a 
               href='https://www.ai.uga.edu/ms-artificial-intelligence'
               target='_blank' title='UGA M.S. AI'
            >
                  <Image
                     className={AboutStyles.experienceImage}
                     priority={true}
                     alt='UGA M.S. AI'
                     src='https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/University_of_Georgia_seal.png/250px-University_of_Georgia_seal.png'
                     width={100}
                     height={100}
                  />
            </a>
            <div className={AboutStyles.experienceText}>
                  <h3>
                     University of Georgia
                  </h3>
                  <h4>
                     Master of Science in Artificial Intelligence
                  </h4>
                  <h5>
                     Graduated May 2026
                  </h5>
                  <ul>
                     <li>
                        GPA: 3.95/4.0
                     </li>
                     <li>
                        Completed a 2 year program in 1 year ⏩
                     </li>
                     <li>
                        Finished a Master&apos;s Thesis revolving around Evolutionary AI 🐒
                     </li>
                  </ul>
            </div>
         </div>
         <div className={SharedStyles.skillContainer} >
            <Anaconda />
            <Jupyter />
            <Python />
            <Kaggle />
            <Weka />
            <VisualStudioCode />
            <Cpp />
            <GitHub />
            <MSOffice />
            <Praat />
            <MemoQ />
         </div>
      </div>
   );
};

export function UgaCsci() {
    return (
      <div className={AboutStyles.experienceContainer}>
         <div className={AboutStyles.content} style={{flexWrap: 'wrap-reverse'}}>
            <div className={AboutStyles.experienceText}>
               <h3>
                  University of Georgia
               </h3>
               <h4>
                  Bachelor of Science in Computer Science
               </h4>
               <h5>
                  Graduated May 2025, magna cum laude
               </h5>
               <ul>
                  <li>
                     GPA: 3.88/4.0
                  </li>
                  <li>
                     Took graduate level courses early as part of the
                     <a href='https://doubledawgs.uga.edu/ProgramDetails/10080' style={{fontWeight: 'bold'}} target='_blank'> Double Dawgs Program </a>
                     📚
                  </li>
                  <li>
                     Studied abroad in Big Island, Hawai&apos;i 🏖️
                  </li>
               </ul>
            </div>
            <a 
               href='https://www.cs.uga.edu/bachelor-science-computer-science'
               target='_blank'
               title='UGA B.S. CSCI'
            >
               <Image 
                  className={AboutStyles.experienceImage}
                  alt='UGA B.S. CSCI'
                  src='/images/experiences/UGADawg.png'
                  width={100}
                  height={100}
                  priority
               />
            </a>
         </div>
         <div className={SharedStyles.skillContainer} >
            <C />
            <Cpp />
            <Java />
            <SpringBoot />
            <Html />
            <Css />
            <Javascript />
            <Figma />
            <NodeJS />
            <ReactJS />
            <Postman />
            <Python />
            <Asm />
            <MongooseODM />
            <VisualStudioCode />
            <MongoDB />
            <MySql />
            <Sql />
            <GitHub />
            <MSOffice />
            <VirtualBox />
            <Matlab />
         </div>
      </div>
    );
};

export function Pariveda() {
   return (
      <div className={AboutStyles.experienceContainer}>
         <div className={AboutStyles.content}>
            <a 
               href='https://parivedasolutions.com/'
               target='_blank'
               title='Pariveda'
            >
                <Image
                  className={AboutStyles.experienceImage}
                  alt='Pariveda'
                  src='/images/experiences/pariveda.gif'
                  width={100}
                  height={100}
               />
            </a>
            <div className={AboutStyles.experienceText}>
               <h3>
                  Pariveda
               </h3>
               <h4>
                  Software Engineer, Consultant
               </h4>
               <h5>
                  July 2026 - Present
               </h5>
               <ul>
                  <li>
                     Work in small teams to solve client problems
                  </li>
                  <li>
                     Develop applications in various languages and frameworks
                  </li>
                  <li>
                     Utilize AI strategically to enhance client solutions and accelerate delivery
                  </li>
                  <li>
                     Incorporate AI tools to streamline development and uncover insights
                  </li>
               </ul>
            </div>
         </div>
         {/* <div className={SharedStyles.skillContainer} >
            
         </div> */}
      </div>
   );
};

export function UgaResearch() {
   return (
      <div className={AboutStyles.experienceContainer}>
         <div className={AboutStyles.content} style={{flexWrap: 'wrap-reverse'}}>
            <div className={AboutStyles.experienceText}>
               <h3>
                  University of Georgia
               </h3>
               <h4>
                  Graduate Student Researcher
               </h4>
               <h5>
                  September 2025 - April 2026
               </h5>
               <ul>
                  <li>
                     Performed scholarly research on RAG systems and human-AI trust
                  </li>
                  <li>
                     Wrote publishable scholarly work as a secondary author
                  </li>
                  <li>
                     Assisted in formulating research questions and methodology
                  </li>
               </ul>
            </div>
            <a 
               href='https://engineering.uga.edu/'
               target='_blank'
               title='UGA Research'
            >
               <Image 
                  className={AboutStyles.experienceImage}
                  alt='UGA B.S. CSCI'
                  src='/images/experiences/UGADawg.png'
                  width={100}
                  height={100}
                  priority
               />
            </a>
         </div>
      </div>
    );
};

export function EdibleBrands() {
   return (
      <div className={AboutStyles.experienceContainer}>
         <div className={AboutStyles.content}>
            <a 
               href='https://www.ediblearrangements.com/'
               target='_blank'
               title='Edible Brands'
            >
                <Image
                  className={AboutStyles.experienceImage}
                  alt='Edible Brands'
                  src='/images/experiences/edible.gif'
                  width={100}
                  height={100}
               />
            </a>
            <div className={AboutStyles.experienceText}>
               <h3>
                  Edible Brands
               </h3>
               <h4>
                  Software Engineering Intern
               </h4>
               <h5>
                  May 2025 - July 2025
               </h5>
               <ul>
                  <li>
                     Configured Contentful CMS for seamless content delivery on Edible’s site
                  </li>
                  <li>
                     Conducted research on GPT agents and presented findings to C-Suite and management 
                  </li>
                  <li>
                     Built a franchisee-faced GPT agent to streamline operations and support 
                  </li>
                  <li>
                     Assisted front-end development of a new launchpad service
                  </li>
               </ul>
            </div>
         </div>
         <div className={SharedStyles.skillContainer} >
            <Typescript />
            <Javascript />
            <Css />
            <DevOps />
            <OpenAI />
            <Contentful />
            <NodeJS />
            <NestJS />
            <ReactJS />
            <Postman />
            <VisualStudioCode />
            <SwaggerUI />
            <ESLint />
         </div>
      </div>
   );
};

export function ABB() {
   return (
      <div className={AboutStyles.experienceContainer}>
         <div className={AboutStyles.content} style={{flexWrap: 'wrap-reverse'}}>
            <div className={AboutStyles.experienceText}>
               <h3>
                  ABB
               </h3>
               <h4>
                  Engineering Design Tools Analyst Intern
               </h4>
               <h5>
                  January 2025 - May 2025
               </h5>
               <ul>
                  <li>
                     Developed a graphing API using .NET framework to replace Excel and decrease execution time
                  </li>
                  <li>
                     Established a SQL database to store manufacturing plant data
                  </li>
                  <li>
                     Created sites using SharePoint to streamline the distribution and installation of professional software 
                  </li>
                  <li>
                     Tested and evaluated Generative AI for client use
                  </li>
               </ul>
            </div>
            <a 
               href='https://new.abb.com/us'
               target='_blank'
               title='ABB'
            >
               <Image 
                  className={AboutStyles.experienceImage}
                  alt='ABB'
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ABB_logo.svg/250px-ABB_logo.svg.png'
                  width={100}
                  height={100}
               />
            </a>
         </div>
         <div className={SharedStyles.skillContainer} >
            <Cs />
            <DotNet />
            <Python />
            <MSOffice />
            <Sql />
            <MicrosoftSqlServer />
            <DevOps />
            <VisualStudio />
            <VisualStudioCode />
            <SwaggerUI />
         </div>
      </div>
   );
};

export function TheCoderSchool() {
   return (
      <div className={AboutStyles.experienceContainer}>
         <div className={AboutStyles.content}>
            <a 
               href='https://www.thecoderschool.com/'
               target='_blank'
               title='theCoderSchool'
            >
               <Image
                  className={AboutStyles.experienceImage}
                  alt='theCoderSchool'
                  src='https://www.thecoderschool.com/locations/img/logostacked-white-shadow.png'
                  width={100}
                  height={100}
               />
            </a>
            <div className={AboutStyles.experienceText}>
               <h3>
                  theCoderSchool
               </h3>
               <h4>
                  Code Coach
               </h4>
               <h5>
                  May 2024 - August 2024
               </h5>
               <ul>
                  <li>
                     Instructed students aged 6-15 on coding concepts including simple Data Structures
                  </li>
                  <li>
                     Taught students to code in Python, C#, Java, Scratch, Roblox Studio, and Minecraft Education Edition
                  </li>
                  <li>
                     Encouraged students to solve problems as a team to simulate real-world situations
                  </li>
                  <li>
                     Offered trial classes to recruit potential new students
                  </li>
               </ul>
            </div>
         </div>
         <div className={SharedStyles.skillContainer}>
            <Cs />
            <Python />
            <Java />
         </div>
      </div>
   );
};

export function ChimneyLakesSwimTeam() {
    return (
         <div className={AboutStyles.experienceContainer}>
            <div className={AboutStyles.content} style={{flexWrap: 'wrap-reverse'}}>
               <div className={AboutStyles.experienceText}>
                  <h3>
                     Chimney Lakes Swim Team
                  </h3>
                  <h4>
                     Head Coach
                  </h4>
                  <h5>
                     May 2021 - June 2024
                  </h5>
                  <ul>
                     <li>
                        Managed 7 assistant coaches
                     </li>
                     <li>
                        Taught over 80 students annually
                     </li>
                     <li>
                        Coordinated with other teams to organize and execute events
                     </li>
                     <li>
                        Prepared for emergencies by completing Red Cross Training
                     </li>
                  </ul>
               </div>
               <a title='Chimney Lakes'>
                  <Image
                     className={AboutStyles.experienceImage}
                     alt='Chimney Lakes'
                     src='https://d1nmxxg9d5tdo.cloudfront.net/8514/logos/large/Chimney_Lakes.png'
                     width={100}
                     height={100}
                  />
               </a>
            </div>
         </div>
    );
};
