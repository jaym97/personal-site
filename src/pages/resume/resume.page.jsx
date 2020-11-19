import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

import './resume.styles.scss'

const ResumePage = () => {
    const scrollToTopRef = useRef(null)

    const toggleScrollToTop = () => {

        if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
            scrollToTopRef.current.setAttribute('style', 'display: initial;')
        } else {
            scrollToTopRef.current.setAttribute('style', 'display: none;')
        }
    }

    document.onscroll = () => toggleScrollToTop()

    return (
        <div className="resume-page-container">
            <a
                href="/resume#my-resume-page"
                ref={scrollToTopRef}
                aria-hidden="true"
                className="scroll-to-top"
            >
                Go back to top
            </a>

            <header className="resume-page-header">
                <h1 id="my-resume-page" className="resume-heading">My Resume</h1>

                <Link
                    to="/files/cv-for-jason.pdf"
                    download
                    target="_blank"
                >
                    View full CV
                </Link>
            </header>

            <main className="resume-categories-container">
                <section aria-labelledby="experience-title" className="resume-category">
                    <h2 className="category-title" id="experience-title">Experience</h2>

                    <div className="category-details">
                        <div className="category-detail">
                            <div className="category-detail-header">
                                <h3 className="category-detail-title">2020-01 - 2020-09</h3>

                                <h4>Intern Front-end Engineer</h4>
                                <span>Sysnet Software Solutions</span>
                            </div>

                            <ul className="detail-items">
                                <li>
                                Developed the front-end	for	websites involving the Federal Ministry	of
                                Communications and Digital Economy of Nigeria and a project	bid	for	Nigeria
                                Investment Promotion Commission.
                                </li>
                            </ul>
                        </div>

                        <div className="category-detail">
                            <div className="category-detail-header">
                                <h3 className="category-detail-title">2018-06 - 2018-12</h3>

                                <h4>Freelance Developer</h4>
                                <span>Shell Nigeria Ltd (Port Harcourt)</span>
                            </div>

                            <ul className="detail-items">
                                <li>
                                    Developed the frontend for an archives web app and improved	on the
                                    existing information system by eliminating time-consuming protocol
                                    and reducing information retrieval time	from a few days	to minutes.
                                </li>
                            </ul>
                        </div>

                        <div className="category-detail">
                            <div className="category-detail-header">
                                <h3 className="category-detail-title">2017-07 - 2017-08</h3>

                                <h4>Intern Front-end Engineer</h4>
                                <span>Sysnet Software Solutions</span>
                            </div>

                            <ul className="detail-items">
                                <li>Added content for the School Management System project.</li>
                                <l1>Developed a	page for the app.</l1>
                                <l1>Worked with	the	team using Microsoft Teams and Git.</l1>
                            </ul>
                        </div>
                    </div>
                </section>

                <section aria-labelledby="education-title" className="resume-category">
                    <h2 className="category-title" id="education-title">Education</h2>

                    <div className="category-details">
                        <div className="category-detail">
                            <div className="category-detail-header">
                                <h3 className="category-detail-title">2015 - 2019</h3>

                                <h4>Afe Babalola University (ABUAD)</h4>
                            </div>

                            <ul className="detail-items">
                                <li>B.SC. Computer Science</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section aria-labelledby="skills-title" className="resume-category">
                    <h2 className="category-title" id="skills-title">Skillset</h2>

                    <div className="category-details">
                        <div className="category-detail">
                            <div className="category-detail-header">
                                <h3 className="category-detail-title">Soft Skills</h3>
                            </div>

                            <ul className="detail-items">
                                <li>Teamwork</li>
                                <li>Continuous learning</li>
                                <li>Problem solving</li>
                                <li>Critical thinking</li>
                                <li>Leadership</li>
                                <li>High adaptibility</li>
                            </ul>
                        </div>

                        <div className="category-detail">
                            <div className="category-detail-header">
                                <h3 className="category-detail-title">Technical Skills</h3>
                            </div>

                            <ul className="detail-items">
                                <li>Vanilla Javascript</li>
                                <li>React.js + Redux/Context API/Hooks</li>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Accessibility</li>
                                <li>Working with algorithms</li>
                                <li>Design, UI and UX</li>
                                <li>Git and Github/Gitlab</li>
                                <li>Node.js</li>
                                <li>NPM and Yarn</li>
                                <li>MySQL, Express.js and GraphQL</li>
                                <li>Adobe's Photoshop and Illustrator</li>
                            </ul>
                        </div>

                        <div className="category-detail">
                            <div className="category-detail-header">
                                <h3 className="category-detail-title">Languages</h3>
                            </div>

                            <ul className="detail-items">
                                <li>English (first language)</li>
                                <li>Spanish (A2)</li>
                                <li>German (A2)</li>
                                <li>Dutch(A1)</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default ResumePage
