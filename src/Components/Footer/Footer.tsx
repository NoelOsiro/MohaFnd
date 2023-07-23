import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer-admin mt-auto footer-light">
      <div className="container-xl px-4">
        <div className="row">
          <div className="col-md-6 small">Copyright &copy; Your Website 2023</div>
          <div className="col-md-6 text-md-end small">
            <a href="#!">Privacy Policy</a>
            &middot;
            <a href="#!">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
