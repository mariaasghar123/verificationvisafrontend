import React from 'react';

const visaJobs = [
  {
    title: 'Security Guard',
    image: '/media/images/security.webp',
    salary: '$5000',
    currency: 'Canadian Dollar',
  },
  {
    title: 'Food Packer',
    image: '/media/images/food.jpg',
    salary: '$5000',
    currency: 'Canadian Dollar',
  },
  {
    title: 'Cook/Chef',
    image: '/media/images/cook.webp',
    salary: '$5000',
    currency: 'Canadian Dollar',
  },
  {
    title: 'Driver',
    image: '/media/images/driver.jpg',
    salary: '$5000',
    currency: 'Canadian Dollar',
  },
];

export default function VisaCategories({ scroltofooter }) {
  return (
    <div className="container my-5 text-center">
      <h2 className="fw-bold">Visa Categories</h2>
      <div className="mb-2">
        <hr style={{ width: '100px', height: '3px', backgroundColor: 'red', margin: 'auto' }} />
      </div>
      <h5 className="fw-semibold">8 Hours Duty + Overtime</h5>
      <p className="text-muted">No Age Limit | No Degree | Without IELTS</p>

      <div className="row">
        {visaJobs.map((job, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="card h-100 shadow">
              <img
                src={job.image}
                className="card-img-top"
                alt={job.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="fw-bold">{job.title}</h5>
                <p className="mb-1 fw-semibold">Salary</p>
                <h4 className="fw-bold text-danger">{job.salary}</h4>
                <p className="text-muted">{job.currency}</p>
                <button onClick={scroltofooter} className="btn btn-danger mt-2">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
