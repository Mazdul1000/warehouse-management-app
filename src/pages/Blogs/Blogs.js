import React from 'react';
import { QuestionMarkCircleIcon } from '@heroicons/react/solid';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <h1 className="blogs-header">Read My Blogs</h1>

            <div className="blog">
                <h4><QuestionMarkCircleIcon className='question-icon'></QuestionMarkCircleIcon>Difference between javascript and nodejs </h4>
                <p><span className='answer'>Answer:</span>Javascript is a high level programming language that basically use in the client-side web application for making a web application dynamic. On the other hand Nodejs is a cross-platform javascript runtime environment and it allows javascript to run on the server side. <br />

                    Javascript can be run on any  engine or running environment that is equivalent to a proper browser.It can't be run outside the browser. On the otherhand Nodejs allows javascript to run outside the browser that supports only the V8 engine of Google Chrome. <br />

                    Javascript can manipulate DOM or add HTML . On the Other hand , Nodejs doesn't have the capability to add HTML or manipulate DOM. <br />
                </p>
            </div>
            <div className="blog">
                <h4><QuestionMarkCircleIcon className='question-icon'></QuestionMarkCircleIcon> When should you use nodejs and when should you use mongodb?</h4>
                <p> <span className='answer'>Answer:</span>Node js is a Javascript runtime environment . We can use Nodejs on many purpose.
                    We can use Nodejs for making API application.Because of its single thread with event loop , Nodejs is a good choice for making API application. <br />
                    Nodejs is also a good choice for making Real-time applications. Because of the event-driven and asynchronous nature , Node.js is good at building real-time applications like messaging,notification delivery,live streaming and collaboration tools. Node.js also can be used in many different aspect.</p>
                <p>MongoDB is the most popular of the non-realtion NoSQL databases.It is a document-oriented database. <br />

                    MongoDB is a good option when  our data is document-centric and doesn't fit well into the schema of a relational database, when we need to accomodate massive scale. <br />

                    we can use Mongodb when we are going to implement tasks  like  Product data management, product catalog, Customer Analytics, Real-Time Data Integration,Scalling and Application Mobility etc.</p>
            </div>
            <div className="blog">
                <h4><QuestionMarkCircleIcon className='question-icon'></QuestionMarkCircleIcon>Differences between SQL and NoSQL databases. </h4>
                <p><span className='answer'>Answer:</span>when we decide to choose a database, main decision is to pick a SQL(relational database) or NoSQL(non-relational database). Though both of this database can fulfill our need. They both have pros and cons.When we choose one of them , we should know the key difference of them.

<ul>
    <li>SQL databases use structured query language(SQL) And have a predefined schema. On the other hand, NoSql Databases have dynamic schemas for unstructured data.</li>
    <li>SQL databases are table based . On the other hand NoSQL databases are document databases, key-value databases, Column-oriented databases, graph databases.</li>
    <li>SQL databases are vertically scalable and NoSQL databases are horizontally scalable.</li>
    <li>SQL databases follows ACID(Atomicity, Consistency, Isolation, and Durability) property. On the other hand, NoSQL databases follows CAP(consistency, availability, partition tolerance) theorem.</li>
    <li>SQL database requires predefined schema that determines how tables are configured and data is stored.That ensures the data integrity but limits flexibility.On the other hand , NoSQL requires no predifined schema that means they uses dynamic schema. Thus NoSQL database system has a high degree of flexibility.
      </li>          
</ul>

</p>


 






            </div>

        </div>
    );
};

export default Blogs;