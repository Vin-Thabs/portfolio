export const items_tiles = [
  { id: 1, name: 'Projects', description: 'A collection of applications I have built.' },
  { id: 2, name: 'Skills', description: 'Technical and soft skills I have developed.' },
  { id: 3, name: 'WorkingExperience', description: 'Professional work roles and responsibilities.' },
  { id: 4, name: 'Hackathons', description: 'Competitions and hackathon achievements.' },
];

export const hackathons = [
  { id: 1, imageURL: 'https://th.bing.com/th/id/OIP.mO7VmB4iYVqfwnIcAz4TyAHaE2?w=261&h=180&c=7&r=0&o=7&pid=1.7&rm=3', companyName: 'Adapt IT: The Social Good Hackathon 2025', description: 'Built a software solution for an emergency SOS, to report crime incident in real time', position: 'Participant', github: '' },
  { id: 2, imageURL: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.-mm-NSlCOqGizensBQ3p7wHaEK%3Fpid%3DApi&f=1&ipt=79bbd360b4b5f9728334a66e3ef8fe5a337d445518fe1ff36b489a745c3f0060&ipo=images', companyName: 'Adapt IT: The Social Good Hackathon 2024', description: 'Designing a software solution to optomize the tackle of socio economic issues', position: '2nd Place', github: 'https://github.com/Vin-Thabs/AdaptIThackathon2024.git' },
  { id: 3, imageURL: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.nQgpq3ujcO9skdXYzgwZGwHaE8%3Fpid%3DApi&f=1&ipt=1f98e893219e977765da8818113ca22808c4fd225d4bc53e4032c5d44166a040&ipo=images', companyName: 'AdaptIt: The Social Good Hackathon 2023', description: 'Built a software solution to battle socio-economic issues', position: 'Participant' },
  { id: 4, imageURL: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.9dJoFM1pnNq4PCBTZkALtAHaE8%3Fpid%3DApi&f=1&ipt=abd012afcce5920447b1e9382e7bf0e957aae3c730a3cb5dbf28271cd06109c7&ipo=images', companyName: 'Adapt IT: The Social Good Hackathon 2022', description: 'Built a software soluton to find the closest location to donate essential resources to the needy', position: '1st Place', github: '' },
  { id: 5, imageURL: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.DPpY83MVkbhoy6zawqddPAHaD4%3Fpid%3DApi&f=1&ipt=34aa593bb94d9ddbe1e0b0495d00f2995ac3dce231acfddd114cb7876df0e9bd&ipo=images', companyName: 'Wits Cyber CTF: 2025', description: 'The Wits Cyber CTF hosted an internal hackathon between wits student to complete as many as possible CTF challenges within 3-4 days', position: '6th Position', github: '' },
  { id: 6, imageURL: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.MChF7XDJnpx1WRRBWPPwIAHaEK%3Fpid%3DApi&f=1&ipt=a7041417983143bf702c87e019eee4cde9c4169849204082430bd820b5d3c70a&ipo=images', companyName: 'IBM Z Datathon: 2025', description: 'Building a mathematical model to process, analyze the data on Socio-Economic Issues', position: 'Participant', github: '' },
  { id: 7, imageURL: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.QwEzXMkYQddAgNCVVBLWeAHaDe%3Fpid%3DApi&f=1&ipt=a0bcf13a6ccb9577ff669cdd3d4201cacb6e09315157f2fcaed1addb04900269&ipo=images', companyName: 'Retro Rabbit: 2022', description: 'Built a ticket sales website', position: 'Participant', github: '' },
];

export const projects = [
  {
    id: 1,
    name: 'RoboCup-AI',
    short_description: 'AI agent to play soccer against another AI agent/itself',
    long_description: 'The RoboCup 3D Soccer Simulation League, using Hungarian algorithm to find the best position for players, A* for optimal paths to goal',
    tech_stack: ['Python', 'C/C++', 'Bash'],
    demo_video: '',
    github: 'https://github.com/Vin-Thabs/RoboCup-AI.git'
  },
  {
    id: 2,
    name: 'University Research Collaboration Platform',
    short_description: 'A platform for researchers to find others to collaborate with.',
    long_description: 'This project, helps researchers to find other researchers to collaborate with, also find research to donate funds to. Export data about research topic.',
    tech_stack: ['Javascript', 'ReactJs', 'MySQL', 'Azure', 'CI/CD', 'TDD'],
    demo_video: '',
    github: 'https://github.com/Vin-Thabs/Uni-Research-Collab-Platform.git'
  },
  {
    id: 3,
    name: 'FindFunder',
    short_description: 'Funding Management Software solution used to manage funds',
    long_description: 'This project is a funding management, for funding for users. Users can donate funds, advertise the program that needs funds, upload PDFs with more information about the project that needs funding',
    tech_stack: ['ReactJS', 'Azure Functions', 'GitHub Actions', 'Firebase', 'MySQL'],
    demo_video: '',
    github: 'https://github.com/Vin-Thabs/funding-management.git'
  },
  {
    id: 4,
    name: 'Gurdia',
    short_description: 'Web app to minimize crime risks in certain areas',
    long_description: "Users can view high-risk zones, recent incidents reports, and receive route safety recommendations, empowering them to make informed decisions. Especially against women and children.",
    tech_stack: ['ReactJS', 'Express', 'MySQL', 'Azure'],
    demo_video: '',
    github: 'https://github.com/Vin-Thabs/guardia.git'
  },
  {
    id: 5,
    name: 'Shell Command',
    short_description: 'CLI text-based instructions to perform tasks',
    long_description: 'A program similar to CLI linux, which uses the System calls to optimize the efficiency. The program handles basic CLI instructions like ls, cd, etc.',
    tech_stack: ['C', 'Bash'],
    demo_video: '',
    github: 'https://github.com/Vin-Thabs/Wits_Shell_Tester.git'
  },
  {
    id: 6,
    name: 'Undecidability FOL',
    short_description: 'Computation of FOL and Turing Machines with FOL',
    long_description: 'Handles validation of proper formula definition in FOL, Signature, variables, NNF and a Model with formula input. Constructs Turing Machine with a formula.',
    tech_stack: ['Python'],
    demo_video: '',
    github: 'https://github.com/Vin-Thabs/Undecidability_FOL.git'
  },
  {
    id: 7,
    name: 'Turing Machine Simulator',
    short_description: 'Encoder and simulation of Turing Machines',
    long_description: 'Implementation of a two-way Turing Machine, taking in M, a Turing Machine with some string and then Outputs the computation result.',
    tech_stack: ['C++'],
    demo_video: '',
    github: 'https://github.com/Vin-Thabs/turing_machine_simulator.git'
  },
  {
    id: 8,
    name: 'CGV Game Design',
    short_description: 'Video game using JavaScript and WebGL',
    long_description: 'A game built with javascript, the game world and characters were created with Blender',
    tech_stack: ['Javascript', 'WebGL', 'Blender'],
    demo_video: '',
    github: 'https://github.com/Vin-Thabs/cgv_game_design.git'
  }
];

export const skills = {
  languages: ['Python', 'JavaScript', 'PHP', 'C/C++', 'Java', 'SQL', 'Bash'],
  frameworks: ['React', 'Node.js', 'Express', 'Next.js', 'Angular'],
  tools: ['Git', 'Docker', 'Azure', 'Firebase', 'MySQL', 'PostgreSQL'],
  concepts: ['Data Structures', 'Algorithms', 'System Design', 'CI/CD', 'TDD', 'Agile', 'Design Patterns', 'Architecture Styles']
};

export const experience = [
   {
    id: 1,
    role: 'Software Developer',
    company: 'Junior Dev',
    period: '2025 - Present',
    description: 'Passionate about building innovative software solutions. Experienced in competitive programming through hackathons. Looking for opportunities to contribute towards impactful projects.',
    responsibilities: ['React', 'Python', 'C/C++', 'Azure', 'MySQL']

  },
 
];
