import React from 'react';
import { Shield, Users, BookOpen, Award, Terminal, Code } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">About HackClub SIMATS</h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-400">
              Empowering students at SIMATS University to learn cybersecurity through hands-on challenges and community.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-400 font-semibold tracking-wide uppercase">Our Mission</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Building the next generation of cybersecurity professionals
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
              HackClub SIMATS is dedicated to providing students with the skills, knowledge, and practical experience needed to excel in the field of cybersecurity.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-white">Practical Learning</h3>
                <p className="mt-2 text-base text-gray-400">
                  We believe in learning by doing. Our platform offers hands-on challenges that simulate real-world cybersecurity scenarios.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-white">Community Building</h3>
                <p className="mt-2 text-base text-gray-400">
                  We foster a supportive community where students can collaborate, share knowledge, and grow together.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-white">Industry Readiness</h3>
                <p className="mt-2 text-base text-gray-400">
                  Our curriculum and challenges are designed to prepare students for real-world cybersecurity roles and certifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-400 font-semibold tracking-wide uppercase">Our Story</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              From classroom to cybersecurity community
            </p>
          </div>
          <div className="mt-8 lg:mt-12">
            <div className="prose prose-lg text-gray-400 mx-auto">
              <p>
                HackClub SIMATS was founded in 2023 by a group of passionate cybersecurity students and faculty members at SIMATS University. Recognizing the growing demand for cybersecurity professionals and the lack of practical training opportunities, they set out to create a platform where students could learn and practice cybersecurity skills in a supportive environment.
              </p>
              <p className="mt-4">
                What started as a small club with weekly meetings has grown into a comprehensive learning platform with hundreds of active members. Our challenges are designed by industry professionals and academic experts to ensure they reflect current cybersecurity trends and practices.
              </p>
              <p className="mt-4">
                Today, HackClub SIMATS is recognized as one of the leading student-led cybersecurity initiatives in the region, with many of our alumni going on to successful careers in the field.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-400 font-semibold tracking-wide uppercase">Our Team</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Meet the people behind HackClub SIMATS
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
              Our team consists of dedicated students, faculty members, and industry professionals who are passionate about cybersecurity education.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3 sm:grid-cols-2">
            {[
              {
                name: 'Dr. Arun Kumar',
                role: 'Faculty Advisor',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                bio: 'Associate Professor of Computer Science with 15 years of experience in cybersecurity research and education.'
              },
              {
                name: 'Priya Sharma',
                role: 'Student President',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                bio: 'Final year Computer Science student specializing in network security and penetration testing.'
              },
              {
                name: 'Rahul Patel',
                role: 'Challenge Coordinator',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                bio: 'Third year student with a passion for creating engaging and educational cybersecurity challenges.'
              },
              {
                name: 'Ananya Desai',
                role: 'Community Manager',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                bio: 'Responsible for building and nurturing our community of cybersecurity enthusiasts.'
              },
              {
                name: 'Vikram Singh',
                role: 'Technical Lead',
                image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                bio: 'Masters student specializing in application security and secure coding practices.'
              },
              {
                name: 'Neha Gupta',
                role: 'Events Coordinator',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                bio: 'Organizes workshops, guest lectures, and competitions to enhance the learning experience.'
              }
            ].map((person, index) => (
              <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-16 w-16 rounded-full" src={person.image} alt={person.name} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white">{person.name}</h3>
                      <p className="text-sm text-green-400">{person.role}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-base text-gray-400">{person.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-400 font-semibold tracking-wide uppercase">FAQ</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Frequently Asked Questions
            </p>
          </div>
          <div className="mt-12">
            <dl className="space-y-6 divide-y divide-gray-700">
              {[
                {
                  question: 'Who can join HackClub SIMATS?',
                  answer: 'Any student enrolled at SIMATS University can join HackClub. We welcome students from all disciplines, not just computer science or IT.'
                },
                {
                  question: 'Do I need prior cybersecurity knowledge to participate?',
                  answer: 'No, we have challenges and resources for all skill levels, from complete beginners to advanced practitioners. Our learning paths will guide you from the basics to more complex topics.'
                },
                {
                  question: 'How often are new challenges added?',
                  answer: 'We add new challenges weekly, covering various cybersecurity domains. We also feature special challenge sets during events and competitions.'
                },
                {
                  question: 'Are there in-person events or is everything online?',
                  answer: 'We offer both online resources and in-person events such as workshops, guest lectures, and competitions held on campus.'
                },
                {
                  question: 'How can I contribute to HackClub SIMATS?',
                  answer: 'There are many ways to contribute! You can create challenges, help organize events, mentor other students, or contribute to our open-source projects. Contact any team member to get started.'
                }
              ].map((faq, index) => (
                <div key={index} className="pt-6">
                  <dt className="text-lg leading-7">
                    <h3 className="text-xl font-medium text-white">{faq.question}</h3>
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base text-gray-400">{faq.answer}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-800 to-green-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to join our community?</span>
            <span className="block text-green-300">Start your cybersecurity journey today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a href="/register" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100">
                Sign up for free
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a href="/challenges" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-800">
                Explore challenges
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;