// src/pages/OurTeam.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OurTeam.css'; // Custom styles
import img21 from '../images/img21.jpeg';
import img22 from '../images/img22.jpeg';
import img23 from '../images/img23.jpeg';

const teamMembers = [
  {
    id: 1,
    name: 'Barka Kaigama',
    position: 'CEO',
    image: img21,
    email: 'barka.kaigama@example.com',
    phone: '(123) 456-7890',
  },
  {
    id: 2,
    name: 'Isaac Joseph',
    position: 'CTO',
    image: img22,
    email: 'bob.smith@example.com',
    phone: '(987) 654-3210',
  },
  {
    id: 3,
    name: 'Aina White',
    position: 'CFO',
    image: img23,
    email: 'carol.white@example.com',
    phone: '(555) 123-4567',
  },
  // Add more team members as needed
];

const OurTeam = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Meet Our Team</h1>
      <div className="row">
        {teamMembers.map((member) => (
          <div key={member.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={member.image} className="card-img-top" alt={member.name} />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text"><strong>Position:</strong> {member.position}</p>
                <p className="card-text"><strong>Email:</strong> <a href={`mailto:${member.email}`}>{member.email}</a></p>
                <p className="card-text"><strong>Phone:</strong> {member.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
