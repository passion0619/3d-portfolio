type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Kevin — 3D Portfolio",
    fullName: "Kevin Edwards",
    email: "kevin.bigdream@gmail.com",
  },
  hero: {
    name: "Kevin Edwards",
    p: ["Full-Stack Developer", "BlockChain and Mobile Developer"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "About Me",
      content: `I'm Kevin Edwards, a passionate full-stack developer with a focus on blockchain and MERN stack technologies. My journey in the world of coding has been nothing short of thrilling. From diving into the intricacies of blockchain to creating seamless applications using the MERN stack, I've found my true calling in the ever-evolving realm of web development.

      In the exciting universe of blockchain, I bring a wealth of knowledge and expertise, navigating the decentralized landscape with precision. I thrive on the challenges it presents, always seeking innovative solutions to push the boundaries of what's possible.
      
      On the MERN stack front, I'm in my element, seamlessly blending MongoDB, Express.js, React, and Node.js to craft robust and dynamic applications. It's not just about writing code for me; it's about creating experiences that resonate with users and make a meaningful impact.
      
      Join me on this journey of innovation and exploration as I continue to push the boundaries of what technology can achieve. Let's build something extraordinary together!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
