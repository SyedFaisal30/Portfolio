import { FC } from "react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-11/12 sm:w-1/2 md:w-1/3">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">My Resume</h2>
        <iframe
          src="src/assets/Syed Faisal.pdf" // Replace with the actual URL of your resume
          className="w-full h-96"
          title="Resume"
        ></iframe>
        <div className="mt-4 text-center">
          <button
            className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
