import {  motion } from "framer-motion";
const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className={`w-screen h-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}
    
    initial={{
        opacity: 0,
        y: 50,
    }}
    whileInView={{
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        }
        
    }}
    >
      {children}
    </motion.section>
  );
};

function Interface() {
  return (
    <div>
      <Section>
        <AboutSection />
      </Section>

      <Section>
        <SkillSection />
      </Section>

      <Section>
        <h1>projects</h1>
      </Section>

      <Section>
        <ContactSection />
      </Section>
    </div>
  );
}

export default Interface;

const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug ">
        Hi, I'm <br />
        <span className="bg-white px-1 italic ">Pir Adnan</span>
      </h1>

      <motion.p className="text-lg text-gray-600 mt-4"
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 1.5
        }
      }}
      >
        I'm Web Developer
        <br />
        learing how to build 3D Websites.
      </motion.p>

      <motion.button className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16"
      
      >
        Contact Me
      </motion.button>
    </Section>
  );
};

const skills = [
  {
    title: "THREE JS / React Three Fiber",
    level: 90,
  },
  {
    title: "React Js Next Js",
    level: 95,
  },

  {
    title: "TypeScript",
    level: 60,
  },
];

const langueges = [
  {
    title: "English",
    level: 95,
  },
  {
    title: "Urdu",
    level: 100,
  },

  {
    title: "Pashto",
    level: 100,
  },
];

const SkillSection = () => {
  return (
    <Section>
      <div>
        <h2 className="text-5xl font-bold">Skills</h2>
        <div className="mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-64" key={index}>
              <h3 className="text-xl font-bold text-gray-800 ">{skill.title}</h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <div
                  className="h-full bg-indigo-600 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-5xl font-bold mt-10">Languages</h2>
      <div className="mt-8 space-y-4">
        {langueges.map((lng, index) => (
          <div className="w-64" key={index}>
            <h3 className="text-xl font-bold text-gray-800 ">{lng.title}</h3>
            <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
              <div
                className="h-full bg-indigo-600 rounded-full"
                style={{ width: `${lng.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const ContactSection = () => {
    return(
        <Section>
            <h2 className="text-5xl font-bold mt-10">Contact me</h2>
            <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
                <form>
                    <label htmlFor="name" className="font-medium text-gray-900 block mb-1 ">Name</label>
                    <input type="text" name="name" id="name" className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 " />

                    <label htmlFor="name" className="font-medium text-gray-900 mt-4 block mb-1 ">Email</label>
                    <input type="text" name="name" id="name" className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 " />

                    <label htmlFor="message" className="font-medium text-gray-900 block mt-4 mb-1 ">Message</label>
                    <textarea name="message" id="message" className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 "></textarea>
                <button className="bg-indigo-600 text-white mt-4 py-4 px-8 rounded-lg font-bold ">Submit</button>
                </form>

            </div>
        </Section>
    )
}
