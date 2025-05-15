import React from "react";

const Profile = () => {
  return (
    <div className="flex justify-center align-center ">
      <div classNameName="flex items-center h-screen w-full justify-center ">
        <div className="max-w-xs ">
          <div className="bg-white ">
            {/* image */}
            <div className="photo-wrapper p-2">
              <img
                className="w-52 aspect-square object-cover mx-auto rounded-full shadow-lg shadow-black"
                src={`https://picsum.photos/200/300?random=${parseInt(
                  Math.floor(Math.random() * 100)
                )}`}
                alt="John Doe"
              />
            </div>
            <div className="p-2">
              <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                Joh Doe
              </h3>
              <div className="text-center text-gray-400 text-xs font-semibold">
                <p>Web Developer</p>
              </div>
              <table className="text-xs my-3">
                <tbody>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Address
                    </td>
                    <td className="px-2 py-2">
                      Chatakpur-3, Dhangadhi Kailali
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Phone
                    </td>
                    <td className="px-2 py-2">+977 9955221114</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Email
                    </td>
                    <td className="px-2 py-2">john@exmaple.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
