import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    // {
    //     imageUrl: git,
    //     name: "Git",
    //     type: "Version Control",
    // },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
    // {
    //     imageUrl: typescript,
    //     name: "TypeScript",
    //     type: "Frontend",
    // }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: 'https://wa.me/2348034430486?text=Hello%20i%20would%20like%20to%20make%20enquires%20about%20a%20job',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/rhunor',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/john-rhunor-ighoshemu-7979a8214/',
    }
];

export const projects = [
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Nexaforce.autos',
        description: 'Designed and built the Website for a auto sales company (nexaforce), NexaForce Autos, your portal to automotive excellence, offers an extensive range of vehicles and services. Fueled by a profound passion for automobiles, they are committed to addressing your distinct lifestyle and aspirations..',
        link: 'https://nexaforce.autos/',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'ReactJob application',
        description: 'Developed a web applicatioDiscover jobs effortlessly with React Jobs App. Powered by React Native, it offers a seamless experience on Android and iOS. Utilizing the Google API, it provides real-time job listings and intuitive search filters. Apply easily with your Google account and get personalized recommendations. A modern tool for a competitive job market, downloadable now for cross-platform job hunting.n that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://expo.dev/@rhunor/react_native_jobs?serviceType=classic&distribution=expo-go',
    },
   
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'spacesVR',
        description: 'Welcome to the 3D Display Room project built with SpacesVR and Next.js! This interactive web application allows you to explore a virtual room filled with imported 3D components',
        link: 'https://github.com/rhunor/react-3-spacesVR',
    },
  
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'rhunor-tube',
        description: 'a clone of youtube developed using reactjs MUI5 and rapid api to grab youtubes api',
        link: 'https://dulcet-dodol-3ec821.netlify.app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'cubanedion.com',
        description: 'This website showcases his talent, and brand. It features a visually captivating design, a music section with streaming options, social media integration for fan engagement, and a contact page for inquiries.',
        link: 'https://cubanedion.com',
    },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];