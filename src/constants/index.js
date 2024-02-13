import { meta, shopify, tesla, starbucks } from "../assets/images";
import {
    car,
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    nextjs,
    nodejs,
    react,
    sass,
    snapgram,
    pricewise,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export let skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
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
    
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "C++ Developer",
        company_name: "NeuroNexus Innovations",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "November 2023 - December 2023",
        points: [
            "Designed a simple console-based to-do list manager that allows users to add, view, and delete tasks.",
            " Developed a LIBRARY MANAGEMENT TOOL to manage books,borrowers, and transactions in a library. and it include switch statements and user-defined functions like add book, book Info, author Name, total, title, id.",
        ],
    },
    {
        title: "Technical Content Writer",
        company_name: "Coding Ninjas",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "July 2022 - August 2022",
        points: [
            "Interned as a Technical Blog Writer at a famous Ed-Tech Platform, Coding Ninjas, and authored several SEO-rich blogs.",
            "Designed articles of Data Structures and Algorithms.",
            "Explored technologies like Vaadin, Blockchain and cryptography.",
            "Participating in code reviews and providing constructive feedback.",
        ],
    },
    {
        title: "Open Source Contributor",
        company_name: "Girlscript Summer of Code(GSSOC)",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "March 2022 - May 2022",
        points: [
            "Completed 15+ issues on GITHUB during GSSOC 2022.",
            "Contributed to repositories that include famous questions on DataStructures andAlgorithms.",
            "Participating in code reviews and providing constructive feedback",
        ],
    },
    {
        title: "Open Source Contributor",
        company_name: "Hacktoberfest-2021",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Oct 2021 - Nov 2021",
        points: [
            " Completed a number of issues on GITHUB during Hacktoberfest 2022. ",
            " Reached to complete four Pull Requests to earn t-shirt from Hacktoberfest event. ",
            "Participating in code reviews and providing constructive feedback",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/KhushiRana2003',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/khushi-rana-114822221/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Algo Blocks',
        description: 'Created a Sorting Visualizer Web application to visualize various sorting algorithms. Change the speed of sorting, the number of elements to sort etc. Provided with the Pseudocode of each sorting algorithm for deep understanding.',
        link: 'https://algoblocks.surge.sh/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'StuTube',
        description: 'Developed a React based Web application that acts as a Video Streaming WebApp.  Implemented using functional components and react hooks(useDispatch) in functional component. And Axios package for youtube API and load data.' ,
        link: 'https://github.com/KHUSHIRANA2003/STUTUBE',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Parking Management System',
        description: 'Developed a user-friendly parking system to streamline vehicle registration and parking slot allocation. Developed a responsive webpage featuring an admin dashboard. Established a feature to display the total number of registered vehicles for enhanced user experience.',
        link: 'https://github.com/KHUSHIRANA2003/SMART-PARKING-MANAGEMENT-SYSTEM',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Online Streaming App',
        description: 'Built a complete clone of Netflix, It presents the interface as it is in original Netflix Website, allowing users to see web series and movies in a familiar social media environment.',
        link: 'https://github.com/KhushiRana2003/Online-Streaming-app',
    }
];
