import React from 'react';

const teamMembers = [
  { name: 'Bu Ester', img: '/images/team/Ester.png' },
  { name: 'Louie', img: '/images/team/Louie.png' },
  { name: 'Calvin', img: '/images/team/calvin.png' },
  { name: 'Yesaya', img: '/images/team/yesaya.png' },
  { name: 'Marcell', img: '/images/team/marcel.png' },
  { name: 'Pavel', img: '/images/team/pavel.png' },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">About Us</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="flex flex-col items-center bg-gray-800 border-4 border-yellow-400 rounded-lg p-4 shadow-lg"
            style={{
              boxShadow: '0 0 0 4px #222, 8px 8px 0 0 #222',
              imageRendering: 'pixelated',
            }}
          >
            <div
              className="w-32 h-32 bg-yellow-200 border-4 border-yellow-400 rounded mb-4 flex items-center justify-center overflow-hidden"
              style={{
                boxShadow: '0 0 0 4px #222',
                imageRendering: 'pixelated',
              }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>
            <span className="text-xl font-mono text-yellow-300">{member.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
