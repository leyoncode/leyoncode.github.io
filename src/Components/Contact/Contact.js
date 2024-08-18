function Contact() {
    return (
        <div id="contact">

            <h3> Contact </h3>

            <a href="mailto:leyonibnkamal@gmail.com" className="me-2 text-white"><img src="email.png" width="60" height="60"
                                                                           className="rounded" alt="email link"/>
                &nbsp; leyonibnkamal@gmail.com
            </a>

            <br/>

            <a href="https://www.linkedin.com/in/leyonibnkamal/" className="me-1 text-white"><img src="linkedin.png" width="60"
                                                                                       height="60" className="rounded"
                                                                                       alt="linkedin link"/>
                &nbsp; https://www.linkedin.com/in/leyonibnkamal/
            </a>

            {/*
                <a href="https://twitter.com/leyoncode" className="ms-1"><img src="twitter.png" width="60" height="60" className="rounded" alt="twitter link" /></a>
                */}

        </div>
    );
}

export default Contact