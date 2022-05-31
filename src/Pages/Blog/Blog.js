import React from "react";

const Blog = () => {
  return (
    <div className="px-4 py-8 w-full max-w-5xl mx-auto mt-24">
      <h1 className="text-4xl text-center font-bold text-indigo-500 mb-20">
        Blogs
      </h1>
      <article className="mb-20">
        <h3 className="text-3xl mb-8 text-center font-bold">
          How will you improve the performance of a React Application?
        </h3>
        <p className="mt-4 max-w-2xl mx-auto text-justify">
          There Are Many Ways To Improve A React App Performance. Like, We can use setState instead of directly set a state. so it will re-render the component. also we can use fragments to wrap a group of elements so that it will not create a new node in DOM. Using CDN is another great way to improve app performance. Using Too much imports affect the speed of the app where CDN is much light-weight. there are many more ways to improve performance.
        </p>
      </article>
      <article className="mb-20">
        <h3 className="text-3xl mb-8 text-center font-bold">
          What are the different ways to manage a state in a React application?
        </h3>
        <p className="mt-4 max-w-2xl mx-auto text-justify">
          In a react app we can manage state in 6-7 ways. some of them are
          <ol className="font-bold my-2">
            <li>1. Local state</li>
            <li>2. Global state</li>
            <li>3. Server state</li>
            <li>4. URL state</li>
            <li>5. Derived State</li>
          </ol>
          In a react app it is necessary to use state because of having controls
          on your app. when a app becomes bigger and bigger then it needs to
          manage more more states. it is so painful to manage too many state in
          a app. but nowadays very useful solution has been arrived to manage
          react states. We can use Redux to manage states in our app. there are
          many others options also available.
        </p>
      </article>
      <article className="mb-20">
        <h3 className="text-3xl mb-8 text-center font-bold">
          How does prototypical inheritance work?
        </h3>
        <p className="mt-4 max-w-2xl mx-auto text-justify">
          JavaScript Is A Proto Type Based Language So It Can Do Prototypical
          Inheritance. Prototypical Inheritance simply means the ability to
          access object properties from different objects. Javascript use a
          prototype to create new method in object. And then we can inherit them
          in different object by prototype. Prototypical Inheritance gives us
          the access to use a method or object into different object.
        </p>
      </article>
      <article className="mb-20">
        <h3 className="text-3xl mb-8 text-center font-bold">
          Why you do not set the state directly in React. For example, if you
          have const [products, setProducts] = useState([]). Why you do not set
          products = [...] instead, you use the setProducts
        </h3>
        <p className="mt-4 max-w-2xl mx-auto text-justify">
          If we set a state without setState it will mutate the state, which means it will not trigger re-render. instead it will create a new state. using setState returns a new state and does not mutate the original state, which can be passed to a pure component.when we update the state of a component all it's children are going to be rendered as well. or our entire component tree rendered.when a component is rendered we basically get a react element, so that is updating our virtual dom. then react will figure out what is changed and based on that it will update the real DOM accordingly .
        </p>
      </article>
      <article className="mb-20">
        <h3 className="text-3xl mb-8 text-center font-bold">
          You have an array of products. Each product has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </h3>
        <p className="mt-4 max-w-2xl mx-auto text-justify">
          We Can Do It Many Ways. There are plenty of array methods to do these
          kind of searching. if we need a single result we can use find method.
          it will return a single value. if we need condition based result we
          can use filter method. it will return us a array containing the
          result.
        </p>
      </article>
      <article className="mb-20">
        <h3 className="text-3xl mb-8 text-center font-bold">
          What is a unit test? Why should write unit tests?
        </h3>
        <p className="mt-4 max-w-2xl mx-auto text-justify">
          Unit testing is a method of testing the smallest pieces of code,
          typically individual functions. These small pieces of code are called
          units. Unit testing helps in maintaining and changing the code. This
          is possible by making the codes less interdependent so that unit
          testing can be executed. Hence chances of impact of changes to any
          other code gets reduced.Also tests run fast when dealing with small
          units. The objective of a unit test is to test an entity in the code,
          ensure that it is coded correctly with no errors, and that it returns
          the expected outputs for all relevant inputs.
        </p>
      </article>
    </div>
  );
};

export default Blog;
