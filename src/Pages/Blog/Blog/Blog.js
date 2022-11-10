import React from "react";
import { Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import useTitle from "../../../Hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <Container className="mt-3 mb-5">
      <Row>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              what is the difference between SQL and NoSQL?
            </Accordion.Header>
            <Accordion.Body>
              <strong>SQL</strong>: SQL databases are primarily called RDBMS or
              Relational Databases.Traditional RDBMS uses SQL syntax and queries
              to analyze and get the data for further insights. They are used
              for OLAP systems.Structured query language (SQL).SQL databases are
              table based databases.SQL databases have a predefined schema.SQL
              databases are vertically scalable.Examples are Oracle, Postgres,
              and MS-SQL.
              <br />
              <strong>NoSQL</strong>: NoSQL databases are primarily called as
              Non-relational or distributed database.NoSQL database system
              consists of various kind of database technologies. These databases
              were developed in response to the demands presented for the
              development of the modern application.No declarative query
              language.NoSQL databases can be document based, key-value pairs,
              graph databases.NoSQL databases use dynamic schema for
              unstructured data.NoSQL databases are horizontally
              scalable.Examples MongoDB, Redis, Neo4j, Cassandra, Hbase.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              What is JWT, and how does it work?
            </Accordion.Header>
            <Accordion.Body>
              JWT, or JSON Web Token, is an open standard used to share security
              information between two parties — a client and a server. Each JWT
              contains encoded JSON objects, including a set of claims. JWTs are
              signed using a cryptographic algorithm to ensure that the claims
              cannot be altered after the token is issued.
              <br />
              <strong>Working Process</strong>: JWTs differ from other web
              tokens in that they contain a set of claims. Claims are used to
              transmit information between two parties. What these claims are
              depends on the use case at hand. For example, a claim may assert
              who issued the token, how long it is valid for, or what
              permissions the client has been granted. A JWT is a string made up
              of three parts, separated by dots (.), and serialized using
              base64. In the most common serialization format, compact
              serialization, the JWT looks something like this:
              xxxxx.yyyyy.zzzzz. Once decoded, you will get two JSON strings:
              <ol>
                <li>The header and</li>
                <li>the payload</li>
              </ol>
              The signature. The JOSE (JSON Object Signing and Encryption)
              header contains the type of token — JWT in this case — and the
              signing algorithm. The payload contains the claims. This is
              displayed as a JSON string, usually containing no more than a
              dozen fields to keep the JWT compact. This information is
              typically used by the server to verify that the user has
              permission to perform the action they are requesting. There are no
              mandatory claims for a JWT, but overlaying standards may make
              claims mandatory. For example, when using JWT as bearer access
              token under OAuth2.0, iss, sub, aud, and exp must be present. some
              are more common than others. The signature ensures that the token
              hasn’t been altered. The party that creates the JWT signs the
              header and payload with a secret that is known to both the issuer
              and receiver, or with a private key known only to the sender. When
              the token is used, the receiving party verifies that the header
              and payload match the signature.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              What is the difference between javascript and NodeJS?
            </Accordion.Header>
            <Accordion.Body>
              <strong>1.</strong> JavaScript is a client-side scripting language
              that is lightweight, cross-platform, and interpreted. Both Java
              and HTML include it. Node.js, on the other hand, is a V8-based
              server-side programming language. As a result, it is used to
              create network-centric applications. It's a networked system made
              for data-intensive real-time applications. If we compare node js
              vs. python, it is clear that node js will always be the preferred
              option.
              <br />
              <strong>2.</strong> JavaScript is a simple programming language
              that can be used with any browser that has the JavaScript Engine
              installed. Node.js, on the other hand, is an interpreter or
              execution environment for the JavaScript programming language. It
              requires libraries that can be conveniently accessed from
              JavaScript programming to be more helpful.
              <br />
              <strong>3.</strong> Any engine may run JavaScript. As a result,
              writing JavaScript is incredibly easy, and any working environment
              is similar to a complete browser. Node.js, on the other hand, only
              enables the V8 engine. Written JavaScript code, on the other hand,
              can run in any context, regardless of whether the V8 engine is
              supported.
              <br />
              <strong>4.</strong> A specific non-blocking operation is required
              to access any operating system. There are a few essential objects
              in JavaScript, but they are entirely OS-specific. Node.js, on the
              other hand, can now operate non-blocking software tasks out of any
              JavaScript programming. It contains no OS-specific constants.
              Node.js establishes a strong relationship with the system files,
              allowing companies to read and write to the hard drive.
              <br />
              <strong>5.</strong> The critical benefits of JavaScript include a
              wide choice of interfaces and interactions and just the proper
              amount of server contact and direct visitor input. Node.js, on the
              other hand, offers node package management with over 500 modules
              and the capacity to handle many requests at the same time. It also
              offers the unique ability to enable microservice architecture and
              the Internet of Things. Even when comparing node js vs. react js,
              node js always wins.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              How does NodeJS handle multiple requests at the same time?
            </Accordion.Header>
            <Accordion.Body>
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them. EventLoop is the
              listener for the EventQueue. If NodeJS can process the request
              without I/O blocking then the event loop would itself process the
              request and sends the response back to the client by itself. But,
              it is possible to process multiple requests parallelly using the
              NodeJS cluster module or worker_threads module.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
    </Container>
  );
};

export default Blog;
