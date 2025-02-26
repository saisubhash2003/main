import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Sai Subhash',
    lastName:  'Vasamsetti',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Bussiness Enthusiast and CyberSecurity engineer/Analyst',
    avatar:    '/images/avatar-01.jpg',
    location:  'Asia/India',        // Expecting the IST time zone identifier, e.g., 'Asia/India'
    languages: ['English', 'Hindi', 'Telugu']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/kunalkundanam007',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/kunal-k-43aa05264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'kunalkundanam07@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Bussiness Enthusiast and Cyber Analyst</>,
    subline: <>I'm Kunal, a Bussiness Enthusiast and CyberSecurity engineer,<br/> I have a good Experience in CyberSecurity where i've work on various network related projects and i've Developed a Firewall <br/> for a networking server. I build my own projects.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Kunal is a India-based CyberSecurity engineer with a passion for transforming complex challenges into simple, elegant solutions. His work spans digital interfaces, interactive experiences, and the convergence of design and technology.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'ResilientShieldCyberSolutions',
                timeframe: '2024 - 2025',
                role: 'CyberSecurity Engineer',
                achievements: [
                    <>I've Designed and Devoloped a network vulnerability tool which scans the whole networks and detect network Vulnerabilities.</>,
                    <>I've designed very own firewall which can be implemented on any devices.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Network Testing Tool',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Kraken Games',
                timeframe: '2021 - 2023',
                role: 'Lead Designer',
                achievements: [
                    <>Developed a design for an open world 3rd person Game where i've designed maps of the game.</>,
                    <>Designed normal PLatformer Games.</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Sri Venkateshwara College Of Engineering',
                description: <>Studied Computer Science engineering in CyberSecurity.</>,
            },
            {
                name: 'Ethical Hacking',
                description: <>Studied online Ethical Hacking Program.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Python',
                description: <>Ive a good knowledge in Python.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Ethical Hacking',
                description: <>I have completed my Internship Program in CyberSecurity and EthicalHacking in ResilientShieldCyberSolutions.</>,
                images: [
                    {
                        src: '/images/projects/project-01/WhatsApp_Image_2025-02-20_at_18.48.22__1_.jpeg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-02.jpg ',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Full Stack Devolopment',
                description: <>Ive a good knowledge in HTML,CSS,PHP.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };
