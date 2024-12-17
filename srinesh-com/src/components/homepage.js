import SrineshImg from '../assets/Srinesh.jpg';

function HomePage() {
    return (
      <div>
        <title>Home Page</title>
        <h1>Home Page</h1>

        { /* About description */ }
        <section>
          <h2>About Me</h2>
          <p>This is the about me section.</p>
          
          <img
          src={SrineshImg}
          alt="Srinesh in Las Vegas"
          style={{ width: '300px', height: 'auto' }}
          />
        </section>

        { /* Contact form */ }
        <section>
          <h2>Contact Me</h2>
          <form>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message"></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
      </div>
    );
}
  
export default HomePage;