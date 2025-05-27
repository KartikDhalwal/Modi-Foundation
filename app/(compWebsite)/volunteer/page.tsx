"use client";
import { useState } from "react";
import Swal from "sweetalert2";

function showSideAlert(message: string, type: string) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    customClass: {
      container: "side-alert-container",
      popup: `side-alert-${type}`,
      title: "side-alert-title",
      icon: "side-alert-icon",
    },
  });

  Toast.fire({
    icon: type,
    title: message,
  });
}

export default function VolunteerForm() {
   const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    passionDescription: '',
    isPartOfBioNationalCommunities: null,
    canCommitTime: null,
    isParticipantInActivities: null,
    availability: '',
    otherAvailability: '',
    isOpenToDigitalApproach: null,
    hasFlexibleSchedule: null,
    hasNetworkContacts: null,
    willingToWorkInRemoteAreas: null,
    hasSpecialSkills: null,
    motivationDescription: '',
    additionalInfo: '',
    wantsUpdates: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name: string, value: boolean) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.phone) {
      Swal.fire({
        title: 'Missing Information',
        text: 'Please fill out all required fields',
        icon: 'warning'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/SubmitVolunteer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          title: 'Success!',
          text: 'Your application has been submitted.',
          icon: 'success'
        });
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          passionDescription: '',
          isPartOfBioNationalCommunities: null,
          canCommitTime: null,
          isParticipantInActivities: null,
          availability: '',
          otherAvailability: '',
          isOpenToDigitalApproach: null,
          hasFlexibleSchedule: null,
          hasNetworkContacts: null,
          willingToWorkInRemoteAreas: null,
          hasSpecialSkills: null,
          motivationDescription: '',
          additionalInfo: '',
          wantsUpdates: null
        });
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error instanceof Error ? error.message : 'Failed to submit application',
        icon: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-2 text-green-800">VOLUNTEER APPLICATION FORM</h1>
      <h2 className="text-xl text-center mb-8 text-green-600">Environmental Conservation & Sustainable Practices</h2>

      {/* Personal Information Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-green-700 border-b-2 border-green-200 pb-2">
          PERSONAL INFORMATION
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Full name:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your full name"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email ID:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email address"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Phone number:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your phone number"
              required
            />
          </div>
        </div>
      </div>

      {/* Passion Description */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-green-700">
          Why are you passionate about environmental conservation and sustainable practices?
        </h3>
        <textarea
          name="passionDescription"
          value={formData.passionDescription}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          rows={4}
          placeholder="Describe your passion..."
          required
        />
      </div>

      {/* Yes/No Questions */}
      <div className="space-y-6 mb-8">
        <YesNoQuestion
          question="Are you part of bio-national communities and sustainability?"
          name="isPartOfBioNationalCommunities"
          value={formData.isPartOfBioNationalCommunities}
          onChange={handleRadioChange}
        />
        
        <YesNoQuestion
          question="Can you commit time to volunteering with us?"
          name="canCommitTime"
          value={formData.canCommitTime}
          onChange={handleRadioChange}
        />
        
        <YesNoQuestion
          question="Are you participating in activities, events, or continuation projects?"
          name="isParticipantInActivities"
          value={formData.isParticipantInActivities}
          onChange={handleRadioChange}
        />
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4 text-green-700">
            How long are you available to engage in volunteer work?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {['7 to 21 days', '1 Month', '2 Months', '3 Months or more', 'Other'].map(option => (
              <label key={option} className="inline-flex items-center">
                <input
                  type="radio"
                  name="availability"
                  value={option}
                  checked={formData.availability === option}
                  onChange={handleChange}
                  className="text-green-600 focus:ring-green-500"
                />
                <span className="ml-2">{option}</span>
              </label>
            ))}
          </div>
          {formData.availability === 'Other' && (
            <input
              type="text"
              name="otherAvailability"
              value={formData.otherAvailability}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Please specify"
            />
          )}
        </div>
        
        <YesNoQuestion
          question="Are you open to a digital approach for volunteer work?"
          name="isOpenToDigitalApproach"
          value={formData.isOpenToDigitalApproach}
          onChange={handleRadioChange}
        />
        
        <YesNoQuestion
          question="Is your schedule flexible for volunteering contributions?"
          name="hasFlexibleSchedule"
          value={formData.hasFlexibleSchedule}
          onChange={handleRadioChange}
        />
        
        <YesNoQuestion
          question="Do you know any contacts in our network or related organizations?"
          name="hasNetworkContacts"
          value={formData.hasNetworkContacts}
          onChange={handleRadioChange}
        />
        
        <YesNoQuestion
          question="Are you willing to work in remote areas if needed?"
          name="willingToWorkInRemoteAreas"
          value={formData.willingToWorkInRemoteAreas}
          onChange={handleRadioChange}
        />
        
        <YesNoQuestion
          question="Do you have special skills or expertise that would help? (e.g., Project Management, Teaching, Technical skills, etc.)"
          name="hasSpecialSkills"
          value={formData.hasSpecialSkills}
          onChange={handleRadioChange}
        />
      </div>

      {/* Motivation Description */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-green-700">
          What motivates you to be involved in community protection?
        </h3>
        <textarea
          name="motivationDescription"
          value={formData.motivationDescription}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          rows={4}
          placeholder="Describe your motivation..."
        />
      </div>

      {/* Additional Info */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-green-700">
          Is there any additional information or questions about our volunteer program?
        </h3>
        <textarea
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          rows={4}
          placeholder="Any additional information..."
        />
      </div>

      {/* Updates Preference */}
      <div className="mb-8">
        <YesNoQuestion
          question="Would you like to receive updates and notifications about our initiatives?"
          name="wantsUpdates"
          value={formData.wantsUpdates}
          onChange={handleRadioChange}
        />
      </div>

      {/* Submit Button */}
      <div className="text-center mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </div>
    </form>
  );
}

// Reusable Yes/No Question Component
function YesNoQuestion({ question, name, value, onChange }: {
  question: string;
  name: string;
  value: boolean | null;
  onChange: (name: string, value: boolean) => void;
}) {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2 text-green-700">{question}</h3>
      <div className="flex space-x-4">
        <label className="inline-flex items-center">
          <input
            type="radio"
            name={name}
            checked={value === true}
            onChange={() => onChange(name, true)}
            className="text-green-600 focus:ring-green-500"
          />
          <span className="ml-2">Yes</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            name={name}
            checked={value === false}
            onChange={() => onChange(name, false)}
            className="text-green-600 focus:ring-green-500"
          />
          <span className="ml-2">No</span>
        </label>
      </div>
    </div>
  );
}