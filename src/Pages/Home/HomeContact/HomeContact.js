import React from "react";

const HomeContact = () => {
  return (
    <div className="bg-white">
      <div className="py-20 container mx-auto ">
        <h4 className="text-center my-6 text-xl">Contact</h4>
        <h2 className="text-center mb-20 text-4xl font-bold">
          Let us handle your project, professionally.
        </h2>
        <form className="mx-auto my-14 w-8/12">
          <div className="flex my-5">
            <input
              type="text"
              placeholder="First Name"
              className="input input-bordered input-base-100 w-full mx-2"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input input-bordered w-full mx-2"
            />
          </div>
          <div className="flex my-5">
            <input
              type="text"
              placeholder="First Name"
              className="input input-bordered w-full mx-2"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input input-bordered w-full mx-2"
            />
          </div>
          <div className="flex my-5">
            <textarea
              name=""
              placeholder="Your Message"
              className="textarea textarea-bordered w-full mx-2"
            ></textarea>
          </div>
          <div className="flex justify-center my-5 items-center">
            <input type="submit" className="btn btn-primary text-white w-6/12" value="Send Message" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomeContact;
