function About() {
  return (
    <div className="biography">
      <h2>My Portfolio</h2>
      <p>This is my portfolio where I showcase my projects and skills.</p>
      
      {/* GitHub Projects Section */}
      <h3>GitHub Projects in Development</h3>
      <div className="github-projects">
      <div className="project-card1">
        {/* Project 1 */}
        <img src="./public/iconopicyoutube.jpg"alt="Project 1" />
        <button><a href="https://github.com/Goleo87/diariodelhostil.git" target="_blank">View on GitHub</a></button>
        <button><a href="https://goleo87.github.io/diariodelhostil/intro.html" target="_blank">View Demo</a></button>
      </div>
      <div className="project-card1">
        {/* Project 2 */}
        <img src="./public/Palazzo.png"alt="Project 1" />
        <button><a href="https://github.com/Goleo87/PalazzoMazziotiBookingApp.git" target="_blank">View on GitHub</a></button>
        <button><a href="https://goleo87.github.io/PalazzoMazziotiBookingApp/" target="_blank">View Demo</a></button>
      </div>
      <div className="project-card1">
        {/* Project 2 */}
        <img src="./public/pickerapp.png"alt="Project 1" />
        <button><a href="https://github.com/Goleo87/Random-Picker-App.git" target="_blank">View on GitHub</a></button>
        <button><a href="https://random-picker-app-rgm2.onrender.com/" target="_blank">View Demo</a></button>
      </div>
    </div>

      {/* Audiovisual Projects Section */}
      <h3>Audiovisual Projects</h3>
      <div className="audiovisual-projects">
      <div className="video-container">
        {/* Video 1 */}
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZcTmOTSIW20?si=64-po2Np9-uDVGQx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <button><a href="https://www.youtube.com/@DiariodelHostil" target="_blank">View on YouTube</a></button>
      </div>
      {/* Video 2 */}
      <iframe width="560" height="315" src="https://www.youtube.com/embed/sPjQZeuE8pk?si=QxRTUM-f6b1uK1E-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <button><a href="https://www.youtube.com/channel/UCxu6mVIxWzKi2XFEmVJ7b4w" target="_blank">View on YouTube</a></button>
     {/* Video 1 */}
     <iframe width="560" height="315" src="https://www.youtube.com/embed/ZcTmOTSIW20?si=64-po2Np9-uDVGQx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <button><a href="https://www.youtube.com/@DiariodelHostil" target="_blank">View on YouTube</a></button>
    </div>
    </div>
  );
}

export default About;
