import React from 'react'
import { Link } from 'react-router-dom'

const Subject = () => {
    let Subject = {
        position: "Absolute",
        display: "inline-block",
        left: "10vh",
        margin: "30px",
        width: "60vh",
        top: "20vh"
    }
    return (
        <div style={Subject}>
            <div class="accordion shadow p-3 mb-5 bg-body rounded" id="accordiFourxample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button shadow p-3 mb-5 bg-body rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <b>COMPLETE SYLLABUS TEST</b>

                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse text-center collapse show" aria-labelledby="headingOne" data-bs-parent="#accordingExample">
                        <div class="accordion-body">
                            Total duration of the test is <b>90 minutes</b> <br />
                            There will be only <b>60 questions</b> in this test <br />
                            there are <b>3 section</b> in the question paper <br />
                            <b>Mathmatics</b><br />
                            <b>Physics</b><br />
                            <b>Chemistry</b><br />
                            Each subject consisting <b>20 question</b> <br />
                            All are <b>Single Choice Type</b> question  which are alloted
                            <br /> <b>4 marks</b> for each question


                            <br /> <br />

                            <input type="Checkbox" /> Accept all the condition
                            <hr />
                            <button ><Link to="/Form">GO</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                        <button class="accordion-button shadow p-3 mb-5 bg-body rounded collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            <b>PHYSICS</b>
                        </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse text-center  collapse" aria-labelledby="headingFour" data-bs-parent="#accordiFourxample">
                        <div class="accordion-body">
                            Total duration of the test is <b>30 minutes</b> <br />
                            There will be only <b>20 questions</b> in this test <br />
                            All are <b>Single Choice Type</b> question  which are alloted
                            <br /> <b>4 marks</b> for each question
                            <br /><br />



                            <input type="Checkbox" />  Accept all the condition
                            <hr />

                            <button>
                                <Link to="/Form">GO</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button shadow p-3 mb-5 bg-body rounded collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <b>CHEMISTry</b>
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse text-center  collapse" aria-labelledby="headingTwo" data-bs-parent="#accordiFourxample">
                        <div class="accordion-body">
                            Total duration of the test is <b>30 minutes</b> <br />
                            There will be only <b>20 questions</b> in this test <br />
                            All are <b>Single Choice Type</b> question  which are alloted
                            <br /> <b>4 marks</b> for each question
                            <br /><br />
                            <input type="Checkbox" />  Accept all the condition

                            <hr />

                            <button><Link to="/Form">GO</Link></button>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button shadow p-3 mb-5 bg-body rounded collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <b>MATHMATICS</b>

                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse text-center collapse" aria-labelledby="headingThree" data-bs-parent="#accordiFourxample">
                        <div class="accordion-body">
                            Total duration of the test is <b>30 minutes</b> <br />
                            There will be only <b>20 questions</b> in this test <br />
                            All are <b>Single Choice Type</b> question  which are alloted
                            <br /> <b>4 marks</b> for each question


                            <br /> <br />

                            <input type="Checkbox" /> Accept all the condition
                            <hr />
                            <button ><Link to="/Form">GO</Link></button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Subject
