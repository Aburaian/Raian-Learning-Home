import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-center p-2">
        Answer to the <span className="text-primary fw-bold">Question</span>
      </h1>

      <div className="container mt-4">
        <h3>1.Difference between authorization and authentication</h3>
        <p>
          <span className="h5">Authorization:</span> Authorization occurs after
          your identity is successfully authenticated by the system, which
          ultimately gives you full permission to access the resources such as
          information, files, databases, funds, locations, almost anything. In
          simple terms, authorization determines your ability to access the
          system and up to what extent. Once your identity is verified by the
          system after successful authentication, you are then authorized to
          access the resources of the system.
        </p>

        <p>
          <span className="h5">Authentication:</span> Authentication is about
          validating your credentials like User Name/User ID and password to
          verify your identity. The system determines whether you are what you
          say you are using your credentials. In public and private networks,
          the system authenticates the user identity via login passwords.
          Authentication is usually done by a username and password, and
          sometimes in conjunction with factors of authentication, which refers
          to the various ways to be authenticated.
        </p>
        <h3>
          2.Why are you using firebase? What other options do you have to
          implement authentication?
        </h3>
        <p>
          Firebase is made with a developer in mind to solve all the issues they
          might face when making an app. Firebase removes the need to worry
          about the technicalities of cloud server configuration. As a Google
          Cloud service, it also gives you access to other Google products and
          features, like Google Drive and Sheets. For instance, you can import
          dummy data from Google Sheets and use it temporarily to serve your
          app.
        </p>
        <p>
          <span className="h5">Back4app:</span> Back4app is a reliable Firebase
          alternative that works with an amalgamation of open-source
          technologies. The platform is straightforward to use and has a low
          learning curve. Back4app is a great option to build web and mobile
          apps super fast, scale without the complexity of managing server side
          infrastructure and focus on the user interface. The pricing is
          affordable and easy to understand.
        </p>
        <h3>
          3.What other services does firebase provide other than authentication
        </h3>
        <p>
          There are many services provided by Firebase. These services are:
          Cloud Firestore. Cloud Functions. Hosting. Cloud Storage. Google
          Analytics. Predictions.Cloud Messaging. Dynamic Links. Remote Config.
          Firebase is a full package that can help in developing your mobile or
          web applications faster with fewer resources and more efficiency.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
