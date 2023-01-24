import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    foto: state.home.foto,
    nama: state.home.nama,
    education: state.resume.education,
    work: state.resume.work,
    kuote: state.resume.kuote,
    quotesmaker: state.resume.quotesmaker,
  };
};

class Resume extends Component {
  render() {
    return (
      <div>
        {/* PAGE: RESUME */}
        <div className="section-vcardbody section-page" id="page-resume">
          {/* SECTION: Education */}
          <div className="section-education">
            {/* Section title */}
            <h2 className="section-title">Resume</h2>
            {/* /Section title */}
            {/* Buttons */}
            <div className="resume-buttons header-page-buttons">
              {/* Download CV button */}
              <a href="##" className="btn btn-default btn-default2">
                <i className="fa fa-download" />
                &nbsp; Download my resume
              </a>
              {/* /Download CV button */}
              {/* Get in Touch button */}
              <a
                href="#page-contact"
                className="btn btn-default btn-default2 link-page"
              >
                <i className="fa fa-download" />
                &nbsp; Get in Touch
              </a>
              {/* /Get in Touch button */}
            </div>
            {/* /Buttons */}

            <h2 className="section-title2">
              <i className="fa fa-university" />
              &nbsp; Education
            </h2>

            {/* Resume Item */}
            {this.props.education.map((data, key) => {
              return (
                <div className="resume-item" key={key}>
                  {/* Graduation title */}
                  <h3 className="section-item-title-1">{data.jurusan}</h3>
                  {/* /Graduation title */}
                  {/* Graduation time */}
                  <h4 className="graduation-time">
                    {data.sekolah} (
                    <strong className="graduation-date">{data.tahun}</strong>)
                  </h4>
                  {/* /Graduation time */}
                  {/* content */}
                  <div className="graduation-description">
                    <p>
                      Saya lulusan tahun 2020, di Universitas PancaSakti Bekasi,
                    </p>
                  </div>
                  {/* /Content */}
                </div>
              );
            })}
            {/* /Resume Item */}
          </div>
          {/*/ SECTION: Education */}

          {/* SECTION: WORK EXPERIENCE */}
          <div className="section-education">
            <h2 className="section-title2">
              <i className="fa fa-flag" />
              &nbsp; Work Experience
            </h2>

            {/* Resume Item */}
            {this.props.work.map((data, key) => {
              return (
                <div className="resume-item" key={key}>
                  {/* Work Place */}
                  <h3 className="section-item-title-1">{data.perusahaan}</h3>
                  {/* /Work Place */}
                  {/* Job Time */}
                  <h4 className="job">
                    {data.jabatan} -{" "}
                    <span className="job-date">{data.lama}</span>
                  </h4>
                  {/* /Job Time*/}
                  {/* content */}
                  <div className="graduation-description">
                    <p>
                      saya bekerja di pt karya komponen presisi sebagai operator
                      dan quality assurance selama 2 tahun, job desk: mengukur
                      dan memastikan semua part berdimensi ok
                    </p>
                  </div>
                  {/* /Content */}
                </div>
              );
            })}
            {/* /Resume Item */}
          </div>
          {/*/ SECTION: WORK EXPERIENCE */}
          <h2 className="section-title2">
            <i className="fa fa-commenting" />
            &nbsp; Tentang Saya
          </h2>
          {/* Testimonials */}
          <div className="testimonials">
            {/* Testimonial Slides */}
            <div className="testimonial-slides" id="testimonial-carousel">
              {/* item */}
              <div className="testimonial-item">
                {/* Testimonial Content */}
                <div className="testimonial-content">
                  <p>{this.props.kuote}</p>
                </div>
                {/* /Testimonial Content */}
                {/* Testimonial Author */}
                <div className="testimonial-credits">
                  {/* picture */}
                  <div className="testimonial-picture">
                    <img src={this.props.foto} alt />
                  </div>
                  {/* /picture */}
                  <p className="testimonial-author">{this.props.nama}</p>
                </div>
                {/* /Testimonial Author */}
              </div>
              {/* /item */}
              {/* item */}
            </div>
            {/* Testimonial Slides */}
          </div>
          {/* /testimonials */}
          <div className="page-footer">
            {/* Buttons */}
            <div className="resume-buttons">
              {/* Download CV button */}
              <a href="#" className="btn btn-default btn-default2">
                <i className="fa fa-download" />
                &nbsp; Download my resume
              </a>
              {/* /Download CV button */}
              {/* Get in Touch button */}
              <a
                href="#page-contact"
                className="btn btn-default btn-default2 link-page"
              >
                <i className="fa fa-download" />
                &nbsp; Get in Touch
              </a>
              {/* /Get in Touch button */}
            </div>
            {/* /Buttons */}
            {/* Quote */}
            {/* <p className="footer-quote">
              "The best way to predict the future is to create it" <br />
              <i>Peter Drucker</i>
            </p> */}
            {/* /Quote */}
          </div>
        </div>
        {/* /PAGE: RESUME  */}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Resume);
