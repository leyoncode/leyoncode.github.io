function Projects() {
    return (
        <div id="projects">
            <h4 className="text-center" title="I did everything in all the projects listed!"> Projects </h4>

            <ul>

                <li style={{borderStyle: "solid", padding: "10px"}}>
                    <h6>Uniclubz - Android App to Manage University Clubs</h6>
                    <ul>
                        <li>Tools used: Android Studio, Java, Firebase, Figma</li>
                        <li>Description: This is an Android app that was built as a part of the Mobile and Wireless Application Development course at the university.
                            It was built using Android Jetpack and used Firebase for the backend for data storage and authentication.
                            The purpose of it was to be a general app that students from different universities can use
                            to manage their club activities like creating, searching, and joining events, from one app.</li>
                        <li>Github:  <a className="link-light" href="https://github.com/NSU-SU21-CSE486-1/1811050_SU21_CSE486_1">https://github.com/NSU-SU21-CSE486-1/1811050_SU21_CSE486_1</a></li>
                    </ul>
                </li>

                <li style={{borderStyle: "solid", padding: "10px"}}>
                    <h6>POS System</h6>
                    <ul>
                        <li>Tools used: Java, JavaFX</li>
                        <li>Description:Desktop application made in Java and JavaFX. Features include stock inventory management,
                            a sales portal to manage sales to each customer using a product selector and a shopping cart,
                            and auto-generate graphs and stats to show daily, monthly, and yearly sales and
                            profits along with which products are generating the most profits. </li>
                        <li>Github:  <a className="link-light" href="https://github.com/leyoncode/POS-System">https://github.com/leyoncode/POS-System</a></li>
                    </ul>
                </li>

                <li style={{borderStyle: "solid", padding: "10px"}}>
                    <h6>Portfalio - Full-Stack Web App for Project Portfolio Management</h6>
                    <ul>
                        <li>Tools used: Laravel, MySQL, ReactJS, Bootstrap, PHP, Javascript</li>
                        <li>Description: This is a full-stack web app. It is split up into a separate front-end and back-end.
                        The back-end serves as a REST API by handling authentication, user registration, and data that users upload about
                        their portfolio projects. The front-end then connects with the back-end using axios javascript library to get send and recieve
                        data to and from the backend. In this app, users can create separate portfolio items where they can upload an image of their
                        work and add name, description and a link if it is available live on the internet.</li>
                        <li>Github:  <a className="link-light" href="https://github.com/shawonibnkamal/portfal.io">https://github.com/shawonibnkamal/portfal.io</a></li>
                    </ul>
                </li>

                <li style={{borderStyle: "solid", padding: "10px"}}>
                    <h6>Temple Invader 2D</h6>
                    <ul>
                        <li>Tools used: Unity, C#, Photoshop, Audacity</li>
                        <li>Description: 2D platformer game with 60 unique levels. Completed the full game in 3 months.</li>
                        <li>Download link: <a className="link-light" href="https://scream-interactive-media.itch.io/temple-invader-2d">https://scream-interactive-media.itch.io/temple-invader-2d</a></li>
                    </ul>
                </li>

            </ul>
        </div>
    );
}

export default Projects