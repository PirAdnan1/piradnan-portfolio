import { delay, motion } from "framer-motion";
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
        },
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
        <Projects />
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

      <motion.p
        className="text-lg text-gray-600 mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: 1.5,
          },
        }}
      >
        I'm Web Developer
        <br />
        having 3+ years of Experience
      </motion.p>

      <motion.button
        className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: 2,
          },
        }}
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
              <motion.h3 className="text-xl font-bold text-gray-800 "
              initial= {{
                opacity: 0
              }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: 1 + index * 0.2,
                }
              }}
              >
                {skill.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-indigo-600 rounded-full"
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0
                  }}
                  whileInView={{
                    scaleX: 1,
                  }}
                  transition= {{
                    duration: 1,
                    delay: 1 + index * 0.2
                  }}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-5xl font-bold mt-10">Languages</h2>
      <div className="mt-8 space-y-4">
        {langueges.map((lng, index) => (
          <div className="w-64" key={index}>
            <motion.h3 className="text-xl font-bold text-gray-800 "
             initial= {{
               opacity: 0
             }}
             whileInView={{
               opacity: 1,
               transition: {
                 duration: 1,
                 delay: 1 + index * 0.2,
               }
             }}
            >{lng.title}</motion.h3>
            <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
              <motion.div
                className="h-full bg-indigo-600 rounded-full"
                style={{ width: `${lng.level}%` }}
                initial={{
                  scaleX: 0,
                  originX: 0
                }}
                whileInView={{
                  scaleX: 1,
                }}
                transition= {{
                  duration: 1,
                  delay: 2 + index * 0.2
                }}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const ContactSection = () => {
  return (
    <Section>
      <h2 className="text-5xl font-bold mt-10">Contact me</h2>
      <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
        <form>
          <label
            htmlFor="name"
            className="font-medium text-gray-900 block mb-1 "
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 "
          />

          <label
            htmlFor="name"
            className="font-medium text-gray-900 mt-4 block mb-1 "
          >
            Email
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 "
          />

          <label
            htmlFor="message"
            className="font-medium text-gray-900 block mt-4 mb-1 "
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="h-32 px-3 py-2 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 "
          ></textarea>
          <button className="bg-indigo-600 text-white mt-4 py-4 px-8 rounded-lg font-bold " href="mailto:piradnan113@gmail.com">
            Submit
          </button>
        </form>
      </div>
    </Section>
  );
};

const Projects = () => {
    return(
      <Section>
        <h3 className="text-3xl mb-3 font-bold">Projects</h3>
        <ul className="space-y-2 text-2xl">
          <li>
           <a href="https://better-oshida.vercel.app/" className="hover:text-blue-600" target="_blank">Better Oshida</a>
          </li>
          <li>
            <a href="https://lynq-hazratamin98.vercel.app/" className="hover:text-blue-600" target="_blank">Lynq</a>
          </li>
          <li>
            <a href="https://euromillons-vercel.vercel.app" className="hover:text-blue-600" target="_blank">Euro Millons</a>
          </li>
          <li>
            <a href="https://grabspider.vercel.app" className="hover:text-blue-600" target="_blank">Grab Spider</a>
          </li>
          <li>
            <a href="https://interview-pearl-phi.vercel.app/" className="hover:text-blue-600" target="_blank">Interview warmup</a>
          </li>
          <li>
            <a href="https://crypto-dashboard-lac.vercel.app" className="hover:text-blue-600" target="_blank">Crypto Dashboard</a>
          </li>
          <li>
            <a href="https://portalscene3-d.vercel.app" className="hover:text-blue-600" target="_blank">3D portal Scene</a>
          </li>
          <li>
            <a href="https://roon-studio3-d.vercel.app" className="hover:text-blue-600" target="_blank">3D Text</a>
          </li>
        </ul>
        
      </Section>
    )
}
