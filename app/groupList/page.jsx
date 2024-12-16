import React from 'react'
import Footer from '../components/footer';

const groupMembers = () => {
    const members = [
        { name: "ALILECHE Rayan", class: "TI 2", year: 2024 },
        { name: "HADLI Younes", class: "TI 2", year: 2024 },
        { name: "MAACHOU Douaa", class: "TI 2", year: 2024 },
        { name: "MISRAOUI Neila", class: "TI 2", year: 2024 },
    ];


    return (
        <>
            <div className="search-section hasSearched">
                <div className="logo">
                    <span className="logo-sri">SRI</span>
                    <span className="logo-search">Group Members</span>
                </div>

                <div className="results-container">
                    <h2 className="results-title">Group Members List</h2>
                    {members.map((member, index) => (
                        <div key={index} className="result-card">
                            <h3>{member.name}</h3>
                            <p>Class: {member.class}</p>
                            <p>Year of Study: {member.year}</p>
                        </div>
                    ))}
                </div>
                <Footer />
            </div>

        </>

    )
}

export default groupMembers