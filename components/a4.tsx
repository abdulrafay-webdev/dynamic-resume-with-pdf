"use client";
import React, { useState } from "react";
import { PDFViewer } from '@react-pdf/renderer';
import { Profile } from "./profile";
import { Objective } from "./objective";
import { Education } from "./education";
import { Skills } from "./skills";
import { Experience } from "./experience";
import PDFComponent from "./PDFComponent";

export const A4 = () => {
  const [step, setStep] = useState(1);

  const [edit, setedit] = useState(false);

  const [formData, setFormData]: any = useState({
    name: "",
    designation: "",
    fname: "",
    religion: "",
    nationality: "",
    domicile: "",
    age: "",
    phone: "",
    email: "",
    address: "",
    school: "",
    schoolyear: "",
    schoolgrade: "",
    college: "",
    collegeyear: "",
    collegegrade: "",
    university: "",
    universityyear: "",
    universitygrade: "",
    firstskillname: "",
    firstdescription: "",
    secondskillname: "",
    seconddescription: "",
    thirdskillname: "",
    thirddescription: "",
    firstofficename: "",
    firstexpdescription: "",
    secondofficename: "",
    secondexpdescription: "",
    objective: "",
  });

  const [submitdata, setsubmitdata]: any = useState("");

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    // issay value data may update hojaygi
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEdit = () => {
    setFormData(submitdata);
    setedit(true);
    setStep(1);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setsubmitdata(formData);
    // setFormData({
    //   name: "",
    //   designation: "",
    //   fname: "",
    //   religion: "",
    //   nationality: "",
    //   domicile: "",
    //   age: "",
    //   phone: "",
    //   email: "",
    //   address: "",
    //   school: "",
    //   schoolyear: "",
    //   schoolgrade: "",
    //   college: "",
    //   collegeyear: "",
    //   collegegrade: "",
    //   university: "",
    //   universityyear: "",
    //   universitygrade: "",
    //   firstskillname: "",
    //   firstdescription: "",
    //   secondskillname: "",
    //   seconddescription: "",
    //   thirdskillname: "",
    //   thirddescription: "",
    //   firstofficename: "",
    //   firstexpdescription: "",
    //   secondofficename: "",
    //   secondexpdescription: "",
    //   objective: "",
    // });
    // setStep(1);
  };

  return (
    <div className="flex flex-col-reverse">
      {/* input form  */}

      <div className="min-h-[80vh] p-10 flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Info */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">
                  Personal Information
                </h2>
                <div className="mb-4">
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Designation</label>
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your designation"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Father Name</label>
                  <input
                    type="text"
                    name="fname"
                    value={formData.fname}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your father name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Religion</label>
                  <input
                    type="text"
                    name="religion"
                    value={formData.religion}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your religion"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Nationality</label>
                  <input
                    type="text"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your nationality"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Domicile</label>
                  <input
                    type="text"
                    name="domicile"
                    value={formData.domicile}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your domicile"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your age"
                    required
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Contact Info */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">
                  Contact Information
                </h2>
                <div className="mb-4">
                  <label className="block text-gray-700">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Address</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your address"
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: EDucation */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">Education</h2>
                {/* Matriculation */}
                <h2 className="text-xl font-semibold mb-6">Matriculation</h2>
                <div className="mb-4">
                  <label className="block text-gray-700">Institute Name</label>
                  <input
                    type="text"
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your Institute Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">
                    Year Of Complete
                  </label>
                  <input
                    type="number"
                    name="schoolyear"
                    value={formData.schoolyear}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter year of completion"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Grade</label>
                  <input
                    type="text"
                    name="schoolgrade"
                    value={formData.schoolgrade}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your secured grade with percentage"
                    required
                  />
                </div>
                {/* intermediate */}
                <h2 className="text-xl font-semibold mb-6">Intermediate</h2>
                <div className="mb-4">
                  <label className="block text-gray-700">Institute Name</label>
                  <input
                    type="text"
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your Institute Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">
                    Year Of Complete
                  </label>
                  <input
                    type="number"
                    name="collegeyear"
                    value={formData.collegeyear}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter year of completion"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Grade</label>
                  <input
                    type="text"
                    name="collegegrade"
                    value={formData.collegegrade}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your secured grade with percentage"
                    required
                  />
                </div>
                {/* university */}
                <h2 className="text-xl font-semibold mb-6">University</h2>
                <div className="mb-4">
                  <label className="block text-gray-700">Institute Name</label>
                  <input
                    type="text"
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your Institute Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">
                    Year Of Complete
                  </label>
                  <input
                    type="number"
                    name="universityyear"
                    value={formData.universityyear}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter year of completion"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Grade</label>
                  <input
                    type="text"
                    name="universitygrade"
                    value={formData.universitygrade}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your secured grade with percentage"
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Skills */}
            {step === 4 && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">Skills</h2>
                {/* first Skill */}
                <div className="mb-4">
                  <label className="block text-gray-700">Skill Name</label>
                  <input
                    type="text"
                    name="firstskillname"
                    value={formData.firstskillname}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter 1st skill name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">description</label>
                  <textarea
                    rows={2}
                    name="firstdescription"
                    value={formData.firstdescription}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="enter 10 word description"
                    required
                  />
                </div>
                {/* second Skill */}
                <div className="mb-4">
                  <label className="block text-gray-700">Skill Name</label>
                  <input
                    type="text"
                    name="secondskillname"
                    value={formData.secondskillname}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter second skill name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">description</label>
                  <textarea
                    rows={2}
                    name="seconddescription"
                    value={formData.seconddescription}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="enter 10 word description"
                    required
                  />
                </div>
                {/* third Skill */}
                <div className="mb-4">
                  <label className="block text-gray-700">Skill Name</label>
                  <input
                    type="text"
                    name="thirdskillname"
                    value={formData.thirdskillname}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter third skill name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">description</label>
                  <textarea
                    rows={2}
                    name="thirddescription"
                    value={formData.thirddescription}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="enter 10 word description"
                    required
                  />
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(5)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 5: Experience */}
            {step === 5 && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">Experience</h2>
                {/* first experience */}
                <div className="mb-4">
                  <label className="block text-gray-700">Office Name</label>
                  <input
                    type="text"
                    name="firstofficename"
                    value={formData.firstofficename}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter 1st office name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">description</label>
                  <textarea
                    rows={2}
                    name="firstexpdescription"
                    value={formData.firstexpdescription}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="enter 10 word description"
                    required
                  />
                </div>
                {/* second Skill */}
                <div className="mb-4">
                  <label className="block text-gray-700">Office Name</label>
                  <input
                    type="text"
                    name="secondofficename"
                    value={formData.secondofficename}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter second Office name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">description</label>
                  <textarea
                    rows={2}
                    name="secondexpdescription"
                    value={formData.secondexpdescription}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="enter 10 word description"
                    required
                  />
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(6)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 6: Objective */}
            {step === 6 && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">Objective</h2>
                <div className="mb-4">
                  <label className="block text-gray-700">About You</label>
                  <textarea
                    rows={5}
                    name="objective"
                    value={formData.objective}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describe here"
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(5)}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
        <div></div>
      </div>

      {/* cv  */}

      {submitdata && (
        <div>
          {/* tablet view  */}
          <div className="md:hidden bg-gray-200 flex justify-center flex-col items-center p-2">
            <div className="a4-Msize shadow-lg overflow-hidden">
              <div className="w-full flex">
                {/* sidebar  */}
                <div className=" w-4/12">
                  <Profile
                    name={submitdata.name}
                    designation={submitdata.designation}
                    fname={submitdata.fname}
                    religion={submitdata.religion}
                    age={submitdata.age}
                    nationality={submitdata.nationality}
                    domicile={submitdata.domicile}
                    phone={submitdata.phone}
                    email={submitdata.email}
                    address={submitdata.address}
                  />
                </div>
                {/* right side  */}
                <div className="w-8/12 px-0.5 py-1 pl-3">
                  <Objective objective={submitdata.objective} />
                  <Education
                    school={submitdata.school}
                    college={submitdata.college}
                    university={submitdata.university}
                    schoolyear={submitdata.schoolyear}
                    schoolgrade={submitdata.schoolgrade}
                    collegeyear={submitdata.collegeyear}
                    collegegrade={submitdata.collegegrade}
                    universityyear={submitdata.universityyear}
                    universitygrade={submitdata.universitygrade}
                  />
                  <Skills
                    firstskillname={submitdata.firstskillname}
                    secondskillname={submitdata.secondskillname}
                    thirdskillname={submitdata.thirdskillname}
                    firstdescription={submitdata.firstdescription}
                    seconddescription={submitdata.seconddescription}
                    thirddescription={submitdata.thirddescription}
                  />
                  <Experience
                    firstexpdescription={submitdata.firstexpdescription}
                    secondexpdescription={submitdata.secondexpdescription}
                    firstofficename={submitdata.firstofficename}
                    secondofficename={submitdata.secondofficename}
                  />
                </div>
              </div>
            </div>
            {/* edit button  */}
            <PDFComponent formData={formData} />
            <button
              className="bg-blue-500 ml-8 hover:bg-blue-700 text-white font-bold py-2 px-7 my-5 rounded"
              onClick={handleEdit}
            >
              Edit
            </button>
          </div>
          {/* desktop view   */}
          <div className="hidden md:bg-gray-200 md:flex md:justify-center md:items-center flex-col md:p-4">
            <div className="a4-size shadow-lg    overflow-hidden">
              <div className="w-full flex">
                {/* sidebar  */}
                <div className=" w-1/4">
                  <Profile
                    name={submitdata.name}
                    designation={submitdata.designation}
                    fname={submitdata.fname}
                    religion={submitdata.religion}
                    age={submitdata.age}
                    nationality={submitdata.nationality}
                    domicile={submitdata.domicile}
                    phone={submitdata.phone}
                    email={submitdata.email}
                    address={submitdata.address}
                  />
                </div>
                {/* right side  */}
                <div className="w-3/4 p-5 pl-4">
                  <Objective objective={submitdata.objective} />
                  <Education
                    school={submitdata.school}
                    college={submitdata.college}
                    university={submitdata.university}
                    schoolyear={submitdata.schoolyear}
                    schoolgrade={submitdata.schoolgrade}
                    collegeyear={submitdata.collegeyear}
                    collegegrade={submitdata.collegegrade}
                    universityyear={submitdata.universityyear}
                    universitygrade={submitdata.universitygrade}
                  />
                  <Skills
                    firstskillname={submitdata.firstskillname}
                    secondskillname={submitdata.secondskillname}
                    thirdskillname={submitdata.thirdskillname}
                    firstdescription={submitdata.firstdescription}
                    seconddescription={submitdata.seconddescription}
                    thirddescription={submitdata.thirddescription}
                  />
                  <Experience
                    firstexpdescription={submitdata.firstexpdescription}
                    secondexpdescription={submitdata.secondexpdescription}
                    firstofficename={submitdata.firstofficename}
                    secondofficename={submitdata.secondofficename}
                  />
                </div>
              </div>
            </div>
            <PDFComponent formData={formData} />
            {/* edit button  */}
            <button
              className="bg-blue-500 ml-8 hover:bg-blue-700 text-white font-bold py-5 px-12 my-3 rounded"
              onClick={handleEdit}
            >
              Edit
            </button>
          </div>
        </div>
      )}
       {/* <PDFViewer className="w-full h-screen">
            <PDFComponent formData={formData} />
            </PDFViewer> */}
    </div>
  );
};
