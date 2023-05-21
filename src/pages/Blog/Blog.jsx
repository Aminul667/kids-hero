import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle('Blog');
  
  return (
    <div className="mb-10">
      <h2 className="title text-center">My Blog</h2>
      <div className="px-2 py-3 border rounded-lg border-colorPrimary mb-5">
        <h2 className="font-medium text-2xl font-jost mb-2">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h2>
        <p className="mb-2">
          An access token is a credential that is used to access protected
          resources on behalf of a user or an application. It is typically
          short-lived and expires after a certain period of time. Access tokens
          are commonly used in OAuth 2.0 and similar authentication frameworks.
          When a user or application successfully authenticates with a server,
          the server generates an access token and provides it to the client.
          The client includes the access token in each request to the server
          when accessing protected resources. The server validates the access
          token to ensure that the client has the necessary permissions to
          access the requested resource.
        </p>
        <p>
          A refresh token is a long-lived credential used to obtain a new access
          token without having to re-authenticate the user. It is typically
          issued alongside an access token. Unlike access tokens, refresh tokens
          have a longer lifespan and can be used to request new access tokens
          when the existing one expires. When an access token expires, the
          client can use the refresh token to request a new access token from
          the authorization server without requiring the user to re-enter their
          credentials. This process is usually transparent to the user. The
          refresh token itself is not used in each request to the server but is
          securely stored by the client and exchanged for a new access token
          when needed.
        </p>
      </div>
      <div className="px-2 py-3 border rounded-lg border-colorPrimary mb-5">
        <h2 className="font-medium text-2xl font-jost mb-2">
          Compare SQL and NoSQL databases?
        </h2>
        <p className="mb-2">
          SQL: SQL databases follow a rigid, predefined schema that organizes
          data into tables with fixed columns and data types. They use
          structured query language to define, manipulate, and retrieve data.
        </p>
        <p className="mb-2">
          NoSQL: NoSQL databases are schema-less or have a flexible schema. They
          can handle unstructured, semi-structured, or structured data. NoSQL
          databases can use various data models, such as key-value pairs,
          documents, columnar, or graph models.
        </p>
        <p className="mb-2">
          SQL: SQL databases typically use a vertical scaling approach, where
          you add more resources (e.g., CPU, RAM) to a single server to handle
          increased load. It can become expensive and have limitations in
          scaling.
        </p>
        <p>
          NoSQL: NoSQL databases are designed for horizontal scalability. They
          distribute data across multiple servers, allowing for easy scaling by
          adding more servers to the system. They can handle large amounts of
          data and high traffic loads efficiently.
        </p>
      </div>
      <div className="px-2 py-3 border rounded-lg border-colorPrimary mb-5">
        <h2 className="font-medium text-2xl font-jost mb-2">
          What is express js? What is Nest JS?
        </h2>
        <p className="mb-2">
          Express.js is a minimalist web application framework for Node.js that
          provides a simple and flexible set of features for building web
          applications and APIs. It is widely used and has a large ecosystem of
          middleware and plugins available.
        </p>
        <p className="mb-2">
          Express.js focuses on providing a lightweight and unopinionated
          framework, allowing developers to have more control over the structure
          and components of their applications. It provides basic routing,
          middleware support, and template rendering capabilities. With
          Express.js, developers have the flexibility to choose and integrate
          various libraries and tools to build the desired functionality of
          their web applications.
        </p>
        <p className="mb-2">
          Nest.js is a progressive, opinionated framework for building scalable
          and efficient server-side applications. It leverages modern JavaScript
          features and concepts from other frameworks like Angular to provide a
          structured and modular architecture for building Node.js applications.
        </p>
        <p>
          Nest.js follows the concept of "opinionated defaults" and enforces a
          modular, component-based structure. It uses decorators, dependency
          injection, and TypeScript to create reusable and testable modules,
          controllers, services, and middleware. Nest.js also provides built-in
          support for features like routing, request validation, authentication,
          caching, and more.
        </p>
      </div>
      <div className="px-2 py-3 border rounded-lg border-colorPrimary mb-5">
        <h2 className="font-medium text-2xl font-jost mb-2">
        What is MongoDB aggregate and how does it work?
        </h2>
        <p className="mb-2">
        In MongoDB, the aggregate operation is a powerful tool for performing advanced data processing and analysis. It allows you to perform complex computations, transformations, and aggregations on collections of documents.
        </p>
        <p className="mb-2">
        The aggregate operation works by taking an input collection and applying a sequence of stages to process and transform the data. Each stage performs a specific operation on the input documents and passes the transformed documents to the next stage in the pipeline. The output of the last stage is the result of the aggregation.
        </p>
        <p>
          Nest.js is a progressive, opinionated framework for building scalable
          and efficient server-side applications. It leverages modern JavaScript
          features and concepts from other frameworks like Angular to provide a
          structured and modular architecture for building Node.js applications.
        </p>
      </div>
    </div>
  );
};

export default Blog;
