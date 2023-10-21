const About = () => {
  return (
    <div className="container m-auto p-8 pt-24  lg:pt-64 justify-center items-center text-lg xl:text-4xl">
      <div className="space-y-8">
        <h1>About Us :-</h1>

        {/* Company Introduction */}
        <section>
          <h2>Our Story :</h2>
          <p>
            Welcome to Tectronic, where [brief description of your
            brand-shop]. [Add any additional information about your
            shop founding story and mission.]
          </p>
        </section>

        {/* Team Members */}
        <section>
          <h2>Meet the Team :</h2>
          <div className="">
            <ul>
              <li>1.X</li>
              <li>2.Y</li>
              <li>3.Z</li>
            </ul>
            <div />
            {/* Add more TeamMember components for each team member */}
          </div>
        </section>

        {/* Values and Principles */}
        <section>
          <h2>Our Values :</h2>
          <p>
            At Tectronic, we believe in [list your core values and principles].
            [Explain how these values guide your work and set your project
            apart.]
          </p>
        </section>

        {/* Achievements */}
        <section>
          <h2>Our Achievements :</h2>
          <p>
            Over the years, we've achieved [highlight significant achievements
            or milestones]. [Include any awards, recognitions, or major
            accomplishments.]
          </p>
        </section>

        {/* Future Roadmap */}
        <section>
          <h2>Future Roadmap :</h2>
          <p>
            We are excited about the future! Our roadmap includes [outline your
            vision and upcoming features]. [Share your plans for expansion,
            improvements, or new initiatives.]
          </p>
        </section>

        {/* Contact Information */}
        <section>
          <h2>Contact Us :</h2>
          <p>
            If you have any questions or would like to get in touch, feel free
            to contact us at [your contact information]. [Include a contact form
            or links to your social media channels.]
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
