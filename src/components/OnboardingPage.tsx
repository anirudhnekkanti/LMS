import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import FloatingChat from './FloatingChat';

interface OnboardingPageProps {
  onOnboardingComplete: () => void;
}

const OnboardingPage: React.FC<OnboardingPageProps> = ({ onOnboardingComplete }) => {
  const [yearsOfExperience, setYearsOfExperience] = useState<number>(0);
  const [currentTechStack, setCurrentTechStack] = useState('');
  const [desiredTechStack, setDesiredTechStack] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { completeOnboarding } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    completeOnboarding({
      yearsOfExperience,
      currentTechStack,
      desiredTechStack,
    });

    onOnboardingComplete();
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full space-y-8">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Tell Us About Yourself</h2>
            <p className="text-gray-300 mb-8">
              Help us create a personalized learning plan tailored to your experience and goals.
            </p>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-2">
                Years of Experience
              </label>
              <input
                id="experience"
                name="experience"
                type="number"
                min="0"
                max="50"
                required
                value={yearsOfExperience}
                onChange={(e) => setYearsOfExperience(parseInt(e.target.value) || 0)}
                className="w-full px-3 py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 3"
              />
            </div>

            <div>
              <label htmlFor="currentTech" className="block text-sm font-medium text-gray-300 mb-2">
                Current Tech Stack
              </label>
              <textarea
                id="currentTech"
                name="currentTech"
                rows={4}
                required
                value={currentTechStack}
                onChange={(e) => setCurrentTechStack(e.target.value)}
                className="w-full px-3 py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="List the technologies you currently work with (e.g., React, Node.js, MongoDB, etc.)"
              />
            </div>

            <div>
              <label htmlFor="desiredTech" className="block text-sm font-medium text-gray-300 mb-2">
                Desired Tech Stack
              </label>
              <textarea
                id="desiredTech"
                name="desiredTech"
                rows={4}
                required
                value={desiredTechStack}
                onChange={(e) => setDesiredTechStack(e.target.value)}
                className="w-full px-3 py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="List the technologies you want to learn (e.g., AWS, TypeScript, Docker, etc.)"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              {isLoading ? 'Generating Your Custom Plan...' : 'Generate My Custom Plan'}
            </button>
          </form>
        </div>
      </div>
      <FloatingChat />
    </div>
  );
};

export default OnboardingPage;