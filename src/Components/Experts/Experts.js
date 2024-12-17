import React from 'react';
import './Experts.css';

function Experts() {
  return (
    <div>
      <h2 className="experts-title" style={{ paddingTop: '4100px', paddingLeft: '550px' }}>Meet Our Experts</h2>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="experts-container">
        {/* Expert Card 1 */}
        <div className="expert-card">
          <img src="/images/team-1.png" alt="Expert" className="expert-image" />
          <h3 className="expert-name">John Doe</h3>
          <p className="expert-position">Barista Specialist</p>
          <p className="expert-bio">
            With over 10 years of experience, John crafts exceptional coffee blends that delight customers worldwide.
          </p>
        </div>

        {/* Expert Card 2 */}
        <div className="expert-card">
          <img src="/images/team-2.png" alt="Expert" className="expert-image" />
          <h3 className="expert-name">Jane Smith</h3>
          <p className="expert-position">Latte Artist</p>
          <p className="expert-bio">
            Jane's latte art brings smiles to faces, making every cup a work of art and a joy to drink.
          </p>
        </div>

        {/* Expert Card 3 */}
        <div className="expert-card">
          <img src="/images/team-3.png" alt="Expert" className="expert-image" />
          <h3 className="expert-name">Alice Brown</h3>
          <p className="expert-position">Coffee Roaster</p>
          <p className="expert-bio">
            Alice ensures that every bean is perfectly roasted, delivering the rich flavors we love in our coffee.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experts;
