import React from 'react';
import useTitle from '../../Hooks/UseTitle';
import Footer from '../../Shared/Footer/Footer';

const Blog = () => {

    useTitle('Blog');

    return (
        <div>
            <div className="mockup-window border border-base-300 p-2 mt-5">
                <h2 className='text-2xl font-semibold'>What is the difference between SQL and NoSQL?</h2>
                <div className="flex flex-col w-full lg:flex-row">
                    <div className="grid flex-grow card bg-base-300 rounded-box p-3 w-full">
                        <h3 className='text-xl font-semibold'>SQL:</h3><br />
                        <p>How works: SQL databases are valuable in handling structured data, or data that has relationships between its variables and entities.</p>
                        <p>Scalability: SQL databases can scale vertically, meaning you can increase the load on a server by migrating to a larger server that adds more CPU, RAM or SSD capability.</p>
                        <p>Structure: SQL works with such a strictly predefined schema, it requires organizing and structuring data before starting with the SQL database.</p>
                        <p>Properties: Atomicity, Consistency, Isolation, Durability</p>
                        <p>Example: Db2, MySQL, PostgreSQL, YugabyteDB, CockroachDB etc. </p>
                    </div>
                    <div className="divider lg:divider-horizontal">vs</div>
                    <div className="grid flex-grow card bg-base-300 rounded-box p-3 w-full">
                        <h3 className='text-xl font-semibold'>NoSQL:</h3><br />
                        <p>How works: Unlike SQL, NoSQL systems allow you to work with different data structures within a database. NoSQL databases allow you to add new attributes and fields, as well as use varied syntax across databases.</p>
                        <p>Scalability: NoSQL databases scale better horizontally, which means one can add additional servers or nodes as needed to increase load.</p>
                        <p>Structure: NoSQL databases are not relational, so they don’t solely store data in rows and tables.</p>
                        <p>Properties: Consistency, Availability, Partition tolerance </p>
                        <p>Example: Redis, FaunaDB, CouchDB, MongoDB, Cassandra etc. </p>
                    </div>
                </div>
            </div>
            <div className="mockup-window border border-base-300 p-2 mt-5">
                <h2 className='text-2xl font-semibold'>What is JWT, and how does it work?</h2>
                <div className="grid flex-grow card bg-base-300 rounded-box p-3 w-full">
                    <h3 className='text-xl font-semibold'>JWT:</h3><br />
                    <p>
                        JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.
                    </p><br />
                    <p>
                        Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.
                    </p>
                </div>
            </div>
            <div className="mockup-window border border-base-300 p-2 mt-5">
                <h2 className='text-2xl font-semibold'>What is the difference between Javascript and NodeJS?</h2>
                <div className="flex flex-col w-full lg:flex-row">
                    <div className="grid flex-grow card bg-base-300 rounded-box p-3 w-full">
                        <h3 className='text-xl font-semibold'>Javascript:</h3><br />
                        <p>Javascript is a programming language that is used for writing scripts on the website.</p>
                        <p>Javascript can only be run in the browsers.</p>
                        <p>It is basically used on the client-side.</p>
                        <p>Javascript is capable enough to add HTML and play with the DOM. </p>
                        <p>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. </p>
                        <p>Javascript is used in frontend development.</p>
                    </div>
                    <div className="divider lg:divider-horizontal">vs</div>
                    <div className="grid flex-grow card bg-base-300 rounded-box p-3 w-full">
                        <h3 className='text-xl font-semibold'>NodeJS:</h3><br />
                        <p>NodeJS is a Javascript runtime environment.</p>
                        <p> We can run Javascript outside the browser with the help of NodeJS.</p>
                        <p>It is mostly used on the server-side.</p>
                        <p>Nodejs does not have capability to add HTML tags. </p>
                        <p>V8 is the Javascript engine inside of node.js that parses and runs Javascript. </p>
                        <p>Nodejs is used in server-side development.</p>
                    </div>
                </div>
            </div>
            <div className="mockup-window border border-base-300 p-2 mt-5">
                <h2 className='text-2xl font-semibold'>How does NodeJS handle multiple requests at the same time?</h2>
                <div className="grid flex-grow card bg-base-300 rounded-box p-3 w-full">
                    <h3 className='text-xl font-semibold'>NodeJS handle multiple requests:</h3><br />
                    <p>
                        I understand that Node.js uses a single-thread and an event loop to process requests only processing one at a time (which is non-blocking). But still, how does that work, lets say 10,000 concurrent requests. The event loop will process all the requests? Would not that take too long? <br />
                        I can not understand (yet) how it can be faster than a multi-threaded web server. I understand that multi-threaded web server will be more expensive in resources (memory, CPU), but would not it still be faster? I am probably wrong; please explain how this single-thread is faster in lots of requests, and what it typically does (in high level) when servicing lots of requests like 10,000. <br />
                        And also, will that single-thread scale well with that large amount? Please bear in mind that I am just starting to learn Node.js.
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;