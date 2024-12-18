function ProjectPage() {
    const projects = [
      { name: 'Decentralized Banking System', url: 'https://github.com/srinashg/CS4301Project' },
      { name: 'Paintify', url: 'https://bluestarburst.github.io/sketch-diff/' },
      { name: 'Ultimate Tic-Tac-Toe ☀️', url: 'https://github.com/srinashg/TicTacToe' },
      // Add more projects as needed
    ];

    return (
      <div>
        <title>Project Page</title>
        <h1>Project Page</h1>
        <p>This is the project page. Below are some of my coolest projects. You can check more projects
          on <a href="https://github.com/srinashg">my GitHub page</a>!
        </p>

        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <a href={project.url}>{project.name}</a>
            </li>
          ))}
        </ul>        
      </div>
    );
}
  
export default ProjectPage;